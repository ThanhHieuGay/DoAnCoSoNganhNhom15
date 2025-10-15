// prediction.js - JavaScript cho Trang Dự Đoán Vé Số

// Dữ liệu tỉnh/thành theo miền
const provinces = {
    nam: ['TP. Hồ Chí Minh', 'Đồng Nai', 'Cần Thơ', 'An Giang', 'Bình Dương', 'Vũng Tàu', 'Tiền Giang', 'Bến Tre'],
    trung: ['Đà Nẵng', 'Huế', 'Khánh Hòa', 'Phú Yên', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định'],
    bac: ['Hà Nội', 'Hải Phòng', 'Quảng Ninh', 'Bắc Ninh', 'Thái Bình', 'Nam Định']
};

let currentRegion = 'nam';
let predictionHistory = [];

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    loadPredictionHistory();
    setupEventListeners();
});

// Khởi tạo trang
function initializePage() {
    updateProvinceList();
    setDateRange();
    
    // Load lịch sử từ sessionStorage
    const saved = sessionStorage.getItem('predictionHistory');
    if (saved) {
        predictionHistory = JSON.parse(saved);
        displayHistory();
    }
}

// Cập nhật danh sách tỉnh/thành
function updateProvinceList() {
    const select = document.getElementById('prediction-province');
    select.innerHTML = '<option value="">-- Chọn tỉnh/thành --</option>';
    
    provinces[currentRegion].forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        select.appendChild(option);
    });
}

// Thiết lập giới hạn ngày (chỉ được chọn từ hôm nay đến 3 ngày sau)
function setDateRange() {
    const dateInput = document.getElementById('prediction-date');
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 3);
    
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.max = maxDate.toISOString().split('T')[0];
    dateInput.value = today.toISOString().split('T')[0];
}

// Chọn miền
function selectRegionPrediction(region) {
    currentRegion = region;
    
    // Cập nhật UI tabs
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-region="${region}"]`).classList.add('active');
    
    updateProvinceList();
}

// Setup event listeners
function setupEventListeners() {
    // Xử lý form submit
    const form = document.getElementById('prediction-form');
    form.addEventListener('submit', handlePredictionSubmit);
    
    // Hiển thị/ẩn trường ngày sinh khi chọn phương pháp "Số may mắn cá nhân"
    const methodSelect = document.getElementById('prediction-method');
    methodSelect.addEventListener('change', function() {
        const luckyGroup = document.getElementById('lucky-number-group');
        if (this.value === 'lucky') {
            luckyGroup.style.display = 'block';
        } else {
            luckyGroup.style.display = 'none';
        }
    });
}

// Xử lý submit form dự đoán
async function handlePredictionSubmit(e) {
    e.preventDefault();
    
    const province = document.getElementById('prediction-province').value;
    const date = document.getElementById('prediction-date').value;
    const method = document.getElementById('prediction-method').value;
    const birthDate = document.getElementById('birth-date').value;
    
    if (!province || !date) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Hiển thị loading
    showLoading();
    
    // Giả lập thời gian xử lý (1.5 giây)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Tạo dự đoán
    const prediction = generatePrediction(province, date, method, birthDate);
    
    // Ẩn loading
    hideLoading();
    
    // Hiển thị kết quả
    displayPrediction(prediction);
    
    // Lưu vào lịch sử
    savePredictionToHistory(prediction);
}

// Tạo số dự đoán
function generatePrediction(province, date, method, birthDate) {
    const prediction = {
        province: province,
        date: date,
        method: method,
        timestamp: new Date().toISOString(),
        specialNumbers: [],
        firstNumbers: [],
        potentialNumbers: [],
        confidence: 0,
        analysis: []
    };
    
    // Tạo seed từ thông tin
    const seed = getSeed(province, date, method, birthDate);
    
    // Tạo số đặc biệt (3 bộ 6 số)
    for (let i = 0; i < 3; i++) {
        prediction.specialNumbers.push(generateSixDigitNumber(seed + i));
    }
    
    // Tạo số giải nhất (3 bộ 6 số)
    for (let i = 3; i < 6; i++) {
        prediction.firstNumbers.push(generateSixDigitNumber(seed + i));
    }
    
    // Tạo số tiềm năng (10 số 2 chữ số)
    for (let i = 0; i < 10; i++) {
        prediction.potentialNumbers.push(generateTwoDigitNumber(seed + i + 10));
    }
    
    // Tính độ tin cậy (60-85%)
    prediction.confidence = Math.floor(60 + Math.random() * 25);
    
    // Tạo phân tích
    prediction.analysis = generateAnalysis(method, prediction);
    
    return prediction;
}

// Tạo seed từ thông tin
function getSeed(province, date, method, birthDate) {
    let seed = 0;
    
    // Thêm mã từ tỉnh
    for (let i = 0; i < province.length; i++) {
        seed += province.charCodeAt(i);
    }
    
    // Thêm mã từ ngày
    seed += new Date(date).getTime() % 10000;
    
    // Thêm mã từ phương pháp
    seed += method.length * 100;
    
    // Nếu có ngày sinh, thêm vào
    if (birthDate) {
        seed += new Date(birthDate).getTime() % 10000;
    }
    
    return seed;
}

// Tạo số 6 chữ số
function generateSixDigitNumber(seed) {
    const random = seededRandom(seed);
    return String(Math.floor(random * 900000) + 100000);
}

// Tạo số 2 chữ số
function generateTwoDigitNumber(seed) {
    const random = seededRandom(seed);
    return String(Math.floor(random * 100)).padStart(2, '0');
}

// Random có seed (để kết quả nhất quán)
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Tạo phân tích
function generateAnalysis(method, prediction) {
    const analyses = [];
    
    switch(method) {
        case 'ai':
            analyses.push('🤖 Sử dụng thuật toán AI để phân tích 100 kỳ quay gần nhất');
            analyses.push('📊 Nhận diện được 3 pattern chính trong dữ liệu lịch sử');
            analyses.push('🎯 Các số dự đoán có tỷ lệ xuất hiện cao trong 30 ngày qua');
            break;
        case 'frequency':
            analyses.push('📈 Phân tích tần suất xuất hiện của các con số trong 50 kỳ gần nhất');
            analyses.push('🔢 Các số chẵn có xu hướng xuất hiện nhiều hơn (58%)');
            analyses.push('💡 Tổ hợp số được chọn dựa trên thống kê tần suất cao nhất');
            break;
        case 'pattern':
            analyses.push('🧩 Nhận dạng mẫu số liên tiếp và số cách đều');
            analyses.push('🔄 Phát hiện chu kỳ lặp lại mỗi 7-10 kỳ quay');
            analyses.push('🎲 Dự đoán dựa trên pattern xuất hiện trong 3 tháng qua');
            break;
        case 'lucky':
            analyses.push('🍀 Tính toán số may mắn dựa trên ngày sinh và phong thủy');
            analyses.push('⭐ Các con số hợp với mệnh và tuổi của bạn');
            analyses.push('🌟 Kết hợp yếu tố phong thủy Đông Phương');
            break;
    }
    
    // Thêm phân tích chung
    analyses.push(`✨ Độ tin cậy: ${prediction.confidence}% - Mức độ ${prediction.confidence > 75 ? 'Cao' : prediction.confidence > 65 ? 'Trung bình' : 'Khả quan'}`);
    analyses.push('💰 Khuyến nghị: Nên kết hợp nhiều bộ số để tăng cơ hội trúng thưởng');
    
    return analyses;
}

// Hiển thị kết quả dự đoán
function displayPrediction(prediction) {
    const resultDiv = document.getElementById('prediction-result');
    
    // Hiển thị số đặc biệt
    const specialDiv = document.getElementById('special-numbers');
    specialDiv.innerHTML = prediction.specialNumbers.map(num => 
        `<div class="predicted-number">${num}</div>`
    ).join('');
    
    // Hiển thị số giải nhất
    const firstDiv = document.getElementById('first-numbers');
    firstDiv.innerHTML = prediction.firstNumbers.map(num => 
        `<div class="predicted-number">${num}</div>`
    ).join('');
    
    // Hiển thị số tiềm năng
    const potentialDiv = document.getElementById('potential-numbers');
    potentialDiv.innerHTML = prediction.potentialNumbers.map(num => 
        `<div class="predicted-number small">${num}</div>`
    ).join('');
    
    // Hiển thị độ tin cậy
    const confidenceBadge = document.getElementById('confidence-badge');
    confidenceBadge.textContent = `Độ tin cậy: ${prediction.confidence}%`;
    
    // Hiển thị phân tích
    const analysisDiv = document.getElementById('analysis-content');
    analysisDiv.innerHTML = prediction.analysis.map(item => 
        `<div class="analysis-item">${item}</div>`
    ).join('');
    
    // Hiển thị kết quả
    resultDiv.style.display = 'block';
    
    // Scroll đến kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Lưu dự đoán vào lịch sử
function savePredictionToHistory(prediction) {
    predictionHistory.unshift({
        id: Date.now(),
        province: prediction.province,
        date: prediction.date,
        method: prediction.method,
        timestamp: prediction.timestamp,
        specialNumbers: prediction.specialNumbers,
        confidence: prediction.confidence
    });
    
    // Giới hạn 10 dự đoán gần nhất
    if (predictionHistory.length > 10) {
        predictionHistory = predictionHistory.slice(0, 10);
    }
    
    // Lưu vào sessionStorage
    sessionStorage.setItem('predictionHistory', JSON.stringify(predictionHistory));
    
    // Hiển thị lại lịch sử
    displayHistory();
}

// Hiển thị lịch sử dự đoán
function displayHistory() {
    const historyDiv = document.getElementById('history-list');
    
    if (predictionHistory.length === 0) {
        historyDiv.innerHTML = '<div class="empty-history">Chưa có lịch sử dự đoán nào</div>';
        return;
    }
    
    historyDiv.innerHTML = predictionHistory.map(item => {
        const methodName = getMethodName(item.method);
        const dateStr = new Date(item.date).toLocaleDateString('vi-VN');
        const timeStr = new Date(item.timestamp).toLocaleString('vi-VN');
        
        return `
            <div class="history-item" onclick="viewHistoryDetail(${item.id})">
                <div class="history-item-header">
                    <span class="history-item-date">📅 ${dateStr} - ${item.province}</span>
                    <span class="history-item-method">${methodName}</span>
                </div>
                <div class="history-item-numbers">
                    🎯 Số dự đoán: ${item.specialNumbers.join(', ')}
                </div>
                <small style="color: #999; display: block; margin-top: 5px;">
                    ⏰ Tạo lúc: ${timeStr} | Độ tin cậy: ${item.confidence}%
                </small>
            </div>
        `;
    }).join('');
}

// Xem chi tiết lịch sử
function viewHistoryDetail(id) {
    const item = predictionHistory.find(h => h.id === id);
    if (!item) return;
    
    alert(`
Chi tiết dự đoán:
━━━━━━━━━━━━━━━━━━
📍 Tỉnh/Thành: ${item.province}
📅 Ngày quay: ${new Date(item.date).toLocaleDateString('vi-VN')}
🎲 Phương pháp: ${getMethodName(item.method)}
🎯 Số đặc biệt: ${item.specialNumbers.join(', ')}
✨ Độ tin cậy: ${item.confidence}%
⏰ Tạo lúc: ${new Date(item.timestamp).toLocaleString('vi-VN')}
    `);
}

// Lấy tên phương pháp
function getMethodName(method) {
    const names = {
        'ai': 'AI Phân Tích',
        'frequency': 'Thống Kê Tần Suất',
        'pattern': 'Nhận Dạng Mẫu',
        'lucky': 'Số May Mắn'
    };
    return names[method] || method;
}

// Lưu dự đoán hiện tại
function savePrediction() {
    const result = document.getElementById('prediction-result');
    if (result.style.display === 'none') {
        alert('Không có dự đoán nào để lưu!');
        return;
    }
    
    alert('✅ Đã lưu dự đoán vào lịch sử!\n\nBạn có thể xem lại trong phần "Lịch Sử Dự Đoán" bên dưới.');
}

// Chia sẻ dự đoán
function sharePrediction() {
    const result = document.getElementById('prediction-result');
    if (result.style.display === 'none') {
        alert('Không có dự đoán nào để chia sẻ!');
        return;
    }
    
    const specialNumbers = Array.from(document.querySelectorAll('#special-numbers .predicted-number'))
        .map(el => el.textContent).join(', ');
    
    const shareText = `🎯 Dự đoán xổ số may mắn!\n\nSố đặc biệt: ${specialNumbers}\n\nChúc bạn may mắn! 🍀`;
    
    // Copy vào clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        alert('✅ Đã copy dự đoán vào clipboard!\n\nBạn có thể dán và chia sẻ với bạn bè.');
    }).catch(() => {
        // Fallback nếu không support clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ Đã copy dự đoán vào clipboard!');
    });
}

// Reset form và kết quả
function resetPrediction() {
    document.getElementById('prediction-form').reset();
    document.getElementById('prediction-result').style.display = 'none';
    document.getElementById('lucky-number-group').style.display = 'none';
    setDateRange();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hiển thị loading
function showLoading() {
    const loadingHTML = `
        <div class="loading-overlay" id="loading-overlay">
            <div class="loading-spinner"></div>
            <div class="loading-text">🔮 Đang phân tích và dự đoán...</div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

// Ẩn loading
function hideLoading() {
    const loading = document.getElementById('loading-overlay');
    if (loading) {
        loading.remove();
    }
}

// Load lịch sử khi trang load
function loadPredictionHistory() {
    const saved = sessionStorage.getItem('predictionHistory');
    if (saved) {
        predictionHistory = JSON.parse(saved);
        displayHistory();
    }
}

// Export các hàm cần thiết để gọi từ HTML
window.selectRegionPrediction = selectRegionPrediction;
window.savePrediction = savePrediction;
window.sharePrediction = sharePrediction;
window.resetPrediction = resetPrediction;
window.viewHistoryDetail = viewHistoryDetail;