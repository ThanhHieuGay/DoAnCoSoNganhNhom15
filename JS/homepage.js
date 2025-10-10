// ===== HOMEPAGE.JS - JAVASCRIPT RIÊNG CHO TRANG CHỦ =====

// Toggle Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.classList.toggle('show');
    }
}

// Select Region (Chọn miền)
function selectRegion(region) {
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.querySelector(`[data-region="${region}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Cập nhật tiêu đề theo miền
    const regionNames = {
        'nam': 'Miền Nam',
        'trung': 'Miền Trung',
        'bac': 'Miền Bắc'
    };
    
    const headers = document.querySelectorAll('.status-card h2');
    headers.forEach(h => {
        const dateText = h.textContent.split(' - ')[1] || 'Thứ Hai, 06/10/2025';
        h.textContent = `Kết quả xổ số ${regionNames[region]} - ${dateText}`;
    });
    
    console.log('Đã chọn miền:', regionNames[region]);
}

// Change Date (Thay đổi ngày)
function changeDate(days) {
    const currentDateEl = document.getElementById('current-date');
    if (!currentDateEl) return;
    
    // Lấy ngày hiện tại từ text
    const currentText = currentDateEl.textContent;
    
    // Tạo thông báo
    if (days < 0) {
        alert('Đang tải kết quả hôm qua...');
    } else {
        alert('Đang tải kết quả ngày mai...');
    }
    
    // Trong thực tế, bạn sẽ gọi API để lấy dữ liệu ngày mới
    console.log('Thay đổi ngày:', days > 0 ? 'Ngày mai' : 'Hôm qua');
}

// Show Date Picker (Hiển thị bộ chọn ngày)
function showDatePicker() {
    const input = document.createElement('input');
    input.type = 'date';
    input.style.position = 'absolute';
    input.style.opacity = '0';
    document.body.appendChild(input);
    
    input.onchange = function(e) {
        const selected = new Date(e.target.value);
        const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = selected.toLocaleDateString('vi-VN', options);
        
        const currentDateEl = document.getElementById('current-date');
        if (currentDateEl) {
            currentDateEl.textContent = formattedDate;
        }
        
        // Cập nhật tiêu đề các card
        const headers = document.querySelectorAll('.status-card h2');
        headers.forEach(h => {
            const region = h.textContent.split(' - ')[0];
            h.textContent = `${region} - ${formattedDate}`;
        });
        
        document.body.removeChild(input);
    };
    
    input.click();
}

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

// Check Ticket (Kiểm tra vé số)
function checkTicket(e) {
    e.preventDefault();
    
    const numberInput = document.getElementById('ticket-number');
    const resultDiv = document.getElementById('check-result');
    
    if (!numberInput || !resultDiv) return;
    
    const number = numberInput.value;
    
    // Dữ liệu mẫu (thay bằng dữ liệu thực từ database)
    const winningNumbers = {
        'dacbiet': '123456',
        'nhat': '654321',
        'nhi': ['112233', '445566'],
        'ba': ['778899', '990011']
    };
    
    let result = '';
    let isWin = false;
    
    if (number === winningNumbers.dacbiet) {
        result = '🎉 CHÚC MỪNG! Bạn trúng Giải Đặc Biệt!';
        isWin = true;
    } else if (number === winningNumbers.nhat) {
        result = '🎊 Bạn trúng Giải Nhất!';
        isWin = true;
    } else if (winningNumbers.nhi.includes(number)) {
        result = '👏 Bạn trúng Giải Nhì!';
        isWin = true;
    } else if (winningNumbers.ba.includes(number)) {
        result = '✨ Bạn trúng Giải Ba!';
        isWin = true;
    } else {
        result = '❌ Rất tiếc, số này không trúng giải.';
        isWin = false;
    }
    
    resultDiv.className = 'check-result ' + (isWin ? 'win' : 'lose');
    resultDiv.textContent = result;
    resultDiv.style.display = 'block';
}

// Simulate Status Changes (Giả lập trạng thái)
function simulateLiveStatus() {
    document.getElementById('status-waiting').style.display = 'none';
    document.getElementById('status-live').style.display = 'block';
    
    // Sau 30 giây chuyển sang trạng thái hoàn thành
    setTimeout(() => {
        document.getElementById('status-live').style.display = 'none';
        document.getElementById('status-complete').style.display = 'block';
    }, 30000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Khởi động đồng hồ đếm ngược
    updateCountdown();
    
    // Hiển thị trạng thái mặc định (có thể thay đổi tùy theo thời gian thực)
    // Để demo, ta hiển thị kết quả hoàn chỉnh
    setTimeout(() => {
        document.getElementById('status-waiting').style.display = 'none';
        document.getElementById('status-complete').style.display = 'block';
    }, 1000);
    
    // Tự động phát hiện vị trí và chọn miền phù hợp
    // (Trong thực tế, dùng geolocation API)
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
document.getElementById('check-mien')?.addEventListener('change', function() {
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
        'dacbiet': '123456',
        'nhat': '654321',
        'nhi': ['112233', '445566'],
        'ba': ['778899', '990011']
    };
    
    let result = '';
    let isWin = false;
    
    if (number === winningNumbers.dacbiet) {
        result = `🎉 CHÚC MỪNG! Bạn trúng Giải Đặc Biệt tại ${tinh} ngày ${date}!`;
        isWin = true;
    } else if (number === winningNumbers.nhat) {
        result = `🎊 Bạn trúng Giải Nhất tại ${tinh} ngày ${date}!`;
        isWin = true;
    } else if (winningNumbers.nhi.includes(number)) {
        result = `👏 Bạn trúng Giải Nhì tại ${tinh} ngày ${date}!`;
        isWin = true;
    } else if (winningNumbers.ba.includes(number)) {
        result = `✨ Bạn trúng Giải Ba tại ${tinh} ngày ${date}!`;
        isWin = true;
    } else {
        result = `❌ Rất tiếc, số ${number} không trúng giải tại ${tinh} ngày ${date}.`;
        isWin = false;
    }
    
    resultDiv.className = 'check-result ' + (isWin ? 'win' : 'lose');
    resultDiv.textContent = result;
    resultDiv.style.display = 'block';
    
    // Smooth scroll đến kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
const provinceCards = document.querySelectorAll('.results-carousel .province-card');
const totalProvinces = provinceCards.length;

function changeProvince(direction) {
    provinceCards[currentProvinceIndex].classList.remove('active');
    
    currentProvinceIndex += direction;
    
    if (currentProvinceIndex < 0) {
        currentProvinceIndex = totalProvinces - 1;
    } else if (currentProvinceIndex >= totalProvinces) {
        currentProvinceIndex = 0;
    }
    
    provinceCards[currentProvinceIndex].classList.add('active');
    
    // Cập nhật indicator
    const indicator = document.getElementById('province-indicator');
    if (indicator) {
        indicator.textContent = `${currentProvinceIndex + 1} / ${totalProvinces}`;
    }
    
    // Cập nhật nút prev/next
    updateCarouselButtons();
}

function updateCarouselButtons() {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
 
}

// Khởi tạo carousel
document.addEventListener('DOMContentLoaded', function() {
    if (provinceCards.length > 0) {
        updateCarouselButtons();
    }
});