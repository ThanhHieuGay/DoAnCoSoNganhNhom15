// ===== HOMEPAGE.JS - JAVASCRIPT RIÊNG CHO TRANG CHỦ =====

// Toggle Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.classList.toggle('show');
    }
}

// Select Region (Chọn miền) - FIXED
function selectRegion(region) {
    console.log('🔄 Chuyển sang miền:', region);
    
    // 1. Cập nhật active tab
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.querySelector(`[data-region="${region}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 2. ẨN TẤT CẢ các section
    document.querySelectorAll('.region').forEach(section => {
        section.style.display = 'none';
    });
    
    // 3. HIỂN THỊ section được chọn
    let targetSection = null;
    if (region === 'nam') {
        targetSection = document.getElementById('mien-nam');
    } else if (region === 'trung') {
        targetSection = document.getElementById('mien-trung');
    } else if (region === 'bac') {
        targetSection = document.getElementById('mien-bac');
    }
    
    if (targetSection) {
        targetSection.style.display = 'block';
        console.log('✅ Đã hiển thị:', targetSection.id);
        
        // 4. Reset carousel về card đầu tiên
        const cards = targetSection.querySelectorAll('.province-card');
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === 0) card.classList.add('active');
        });
        
        // 5. Cập nhật indicator
        const indicator = targetSection.querySelector('.province-indicator');
        if (indicator && cards.length > 0) {
            indicator.textContent = `1 / ${cards.length}`;
        }
        
        // 6. Reset index
        currentProvinceIndex = 0;
    } else {
        console.error('❌ Không tìm thấy section cho miền:', region);
    }
}

// ❌ ĐÃ XÓA: changeDate() - dùng từ dayyear.js
// ❌ ĐÃ XÓA: showDatePicker() - dùng từ dayyear.js

// Countdown Timer (Đồng hồ đếm ngược)
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    let time = 4530; // 01:15:30 tính bằng giây
    
    const interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            countdownEl.textContent = '00:00:00';
            // Chuyển sang trạng thái đang quay
            simulateLiveStatus();
            return;
        }
        
        time--;
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        countdownEl.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Simulate Status Changes (Giả lập trạng thái)
function simulateLiveStatus() {
    const statusWaiting = document.getElementById('status-waiting');
    const statusLive = document.getElementById('status-live');
    const statusComplete = document.getElementById('status-complete');
    
    if (statusWaiting) statusWaiting.style.display = 'none';
    if (statusLive) statusLive.style.display = 'block';
    
    // Sau 30 giây chuyển sang trạng thái hoàn thành
    setTimeout(() => {
        if (statusLive) statusLive.style.display = 'none';
        if (statusComplete) statusComplete.style.display = 'block';
    }, 30000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Khởi động đồng hồ đếm ngược
    updateCountdown();
    
    // Hiển thị trạng thái mặc định (có thể thay đổi tùy theo thời gian thực)
    // Để demo, ta hiển thị kết quả hoàn chỉnh
    setTimeout(() => {
        const statusWaiting = document.getElementById('status-waiting');
        const statusComplete = document.getElementById('status-complete');
        
        if (statusWaiting) statusWaiting.style.display = 'none';
        if (statusComplete) statusComplete.style.display = 'block';
    }, 1000);
    
    console.log('Trang chủ đã tải xong');
});

// ==== CẢI TIẾN CHỨC NĂNG TRA CỨU ====

// Danh sách tỉnh theo miền
const provinces = {
    nam: ['TP. Hồ Chí Minh', 'Đồng Nai', 'Cần Thơ', 'Bến Tre', 'Vũng Tàu', 'An Giang', 'Bạc Liêu', 'Cà Mau', 'Đồng Tháp', 'Kiên Giang', 'Long An', 'Sóc Trăng', 'Tiền Giang', 'Trà Vinh', 'Vĩnh Long'],
    trung: ['Đà Nẵng', 'Khánh Hòa', 'Bình Định', 'Quảng Nam', 'Quảng Ngãi', 'Phú Yên', 'Đắk Lắk', 'Quảng Trị', 'Gia Lai', 'Ninh Thuận', 'Huế'],
    bac: ['Hà Nội', 'Hải Phòng', 'Quảng Ninh', 'Bắc Ninh', 'Thái Bình', 'Hà Nam', 'Nam Định']
};

// Cập nhật dropdown tỉnh khi chọn miền
document.addEventListener('DOMContentLoaded', function() {
    const checkMienSelect = document.getElementById('check-mien');
    
    if (checkMienSelect) {
        checkMienSelect.addEventListener('change', function() {
            const mien = this.value;
            const tinhSelect = document.getElementById('check-tinh');
            
            if (!tinhSelect) return;
            
            tinhSelect.innerHTML = '<option value="">-- Chọn tỉnh/thành --</option>';
            
            if (mien && provinces[mien]) {
                provinces[mien].forEach(tinh => {
                    tinhSelect.innerHTML += `<option value="${tinh}">${tinh}</option>`;
                });
            }
        });
    }
});

// Hàm kiểm tra vé (cập nhật)
function checkTicket(e) {
    e.preventDefault();
    
    const mien = document.getElementById('check-mien')?.value;
    const tinh = document.getElementById('check-tinh')?.value;
    const date = document.getElementById('check-date')?.value;
    const number = document.getElementById('ticket-number')?.value;
    const resultDiv = document.getElementById('check-result');
    
    if (!resultDiv) return;
    
    // Validate
    if (!mien || !tinh || !date || !number) {
        resultDiv.className = 'check-result lose';
        resultDiv.textContent = '⚠️ Vui lòng điền đầy đủ thông tin!';
        resultDiv.style.display = 'block';
        return;
    }
    
    // Dữ liệu mẫu (thay bằng API thực tế)
    const winningNumbers = {
        'dacbiet': '363636',
        'nhat': '654321',
        'nhi': ['112233', '445566'],
        'ba': ['778899', '990011'],
        'tu': ['12345', '67890', '11122', '33344'],
        'nam': ['22334', '55667', '88990'],
        'sau': ['1122', '3344', '5566'],
        'bay': ['778', '990', '223'],
        'tam': ['45']
    };
    
    let result = '';
    let isWin = false;
    let prizeType = '';
    
    if (number === winningNumbers.dacbiet) {
        result = `🎉 CHÚC MỪNG! Bạn trúng Giải Đặc Biệt tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Đặc Biệt';
    } else if (number === winningNumbers.nhat) {
        result = `🎊 Bạn trúng Giải Nhất tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Nhất';
    } else if (winningNumbers.nhi.includes(number)) {
        result = `👍 Bạn trúng Giải Nhì tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Nhì';
    } else if (winningNumbers.ba.includes(number)) {
        result = `✨ Bạn trúng Giải Ba tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Ba';
    } else if (winningNumbers.tu.includes(number)) {
        result = `🎁 Bạn trúng Giải Tư tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Tư';
    } else if (winningNumbers.nam.includes(number)) {
        result = `🌟 Bạn trúng Giải Năm tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Năm';
    } else if (winningNumbers.sau.includes(number)) {
        result = `💫 Bạn trúng Giải Sáu tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Sáu';
    } else if (winningNumbers.bay.includes(number)) {
        result = `⭐ Bạn trúng Giải Bảy tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Bảy';
    } else if (winningNumbers.tam.includes(number)) {
        result = `🎯 Bạn trúng Giải Tám tại ${tinh} ngày ${formatDateVN(date)}!`;
        isWin = true;
        prizeType = 'Tám';
    } else {
        result = `❌ Rất tiếc, số ${number} không trúng giải tại ${tinh} ngày ${formatDateVN(date)}.`;
        isWin = false;
    }
    
    resultDiv.className = 'check-result ' + (isWin ? 'win' : 'lose');
    resultDiv.innerHTML = `
        <div style="padding: 20px; text-align: center;">
            <p style="font-size: 1.2em; margin-bottom: 10px;">${result}</p>
            ${isWin ? `<p style="color: #4CAF50; font-weight: bold;">Giải: ${prizeType}</p>` : ''}
            <small style="color: #666;">Vui lòng mang vé gốc đến đại lý để nhận thưởng</small>
        </div>
    `;
    resultDiv.style.display = 'block';
    
    // Smooth scroll đến kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Format ngày theo kiểu Việt Nam
function formatDateVN(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Toggle xem thêm giải
function toggleDetails(button) {
    const hiddenRows = button.closest('table').querySelector('.hidden-details');
    if (!hiddenRows) return;
    
    if (hiddenRows.classList.contains('show')) {
        hiddenRows.classList.remove('show');
        button.textContent = '▼ Xem các giải còn lại';
    } else {
        hiddenRows.classList.add('show');
        button.textContent = '▲ Ẩn bớt';
    }
}

// Carousel cho kết quả xổ số
let currentProvinceIndex = 0;

function changeProvince(direction) {
    // Lấy section đang hiển thị
    const activeSection = document.querySelector('.region:not([style*="display: none"])');
    if (!activeSection) return;
    
    const provinceCards = activeSection.querySelectorAll('.province-card');
    const totalProvinces = provinceCards.length;
    
    if (totalProvinces === 0) return;
    
    // Xóa active cũ
    provinceCards[currentProvinceIndex].classList.remove('active');
    
    // Tính index mới
    currentProvinceIndex += direction;
    
    if (currentProvinceIndex < 0) {
        currentProvinceIndex = totalProvinces - 1;
    } else if (currentProvinceIndex >= totalProvinces) {
        currentProvinceIndex = 0;
    }
    
    // Thêm active mới
    provinceCards[currentProvinceIndex].classList.add('active');
    
    // Cập nhật indicator
    const indicator = activeSection.querySelector('.province-indicator');
    if (indicator) {
        indicator.textContent = `${currentProvinceIndex + 1} / ${totalProvinces}`;
    }
}

// Reset index khi chuyển miền
function resetProvinceIndex() {
    currentProvinceIndex = 0;
}

// Export các hàm để dùng trong HTML
window.checkTicket = checkTicket;
window.selectRegion = selectRegion;
window.changeProvince = changeProvince;
window.toggleDetails = toggleDetails;