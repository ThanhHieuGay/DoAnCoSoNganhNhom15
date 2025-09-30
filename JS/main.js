

// INDEX.HTML - Trang chủ

if (document.getElementById('check-form')) {
    const form = document.getElementById('check-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const soVe = document.getElementById('so-ve').value;

        // Dữ liệu mẫu
        const dacBiet = "123456";
        const giaiNhat = "654321";

        let ketQua = "Không trúng giải nào.";
        if (soVe === dacBiet) ketQua = "Chúc mừng! Bạn trúng Giải Đặc Biệt.";
        else if (soVe === giaiNhat) ketQua = "Bạn trúng Giải Nhất.";

        resultDiv.innerHTML = `<p>${ketQua}</p>`;
    });
}



// LOGIN.HTML - Đăng nhập/Đăng ký

if (document.getElementById('login')) {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-form`).classList.add('active');
        });
    });

    // Xử lý đăng nhập
   
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'user@xosokienthiet.vn' && password === '1') {
        alert('Đăng nhập thành công! Chuyển hướng đến trang cá nhân...');
        sessionStorage.setItem('user', email);
        window.location.href = 'index.html';
    } else if (email === 'admin@xosokienthiet.vn' && password === '1') {
        alert('Đăng nhập admin thành công!');
        sessionStorage.setItem('user', email);
        window.location.href = 'admin.html';
    } else {
        alert('Email hoặc mật khẩu không đúng.');
    }
});

    // Xử lý đăng ký
    document.getElementById('register').addEventListener('submit', (e) => {
        e.preventDefault();
        const hoTen = document.getElementById('register-ho-ten').value;
        const email = document.getElementById('register-email').value;
        const dienThoai = document.getElementById('register-dien-thoai').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }

        alert(`Đăng ký thành công cho ${hoTen}! Email: ${email}, SĐT: ${dienThoai}`);
        document.getElementById('register').reset();
    });
}



// CHECK-LOTTERY.HTML - Tra cứu vé số

if (document.getElementById('check-lottery-form')) {
    const form = document.getElementById('check-lottery-form');
    const lotteryContainer = document.getElementById('lottery-result');
    const lotteryBody = document.getElementById('lottery-body');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mien = document.getElementById('mien').value;
        const tinh = document.getElementById('tinh').value;
        const ngay = document.getElementById('ngay').value;

        // Dữ liệu giả lập
        const ketQuaMau = {
            dacbiet: "123456",
            nhat: "654321",
            nhi: ["112233", "445566"],
            ba: ["778899", "990011"],
            tu: ["12345", "67890", "11122", "33344", "55566", "77788", "99900"],
            nam: ["22334", "55667", "88990"],
            sau: ["1122", "3344", "5566"],
            bay: ["778", "990", "223"],
            tam: "45"
        };

        lotteryBody.innerHTML = `
            <tr><td>Đặc Biệt</td><td class="highlight">${ketQuaMau.dacbiet}</td></tr>
            <tr><td>Giải Nhất</td><td>${ketQuaMau.nhat}</td></tr>
            <tr><td>Giải Nhì</td><td>${ketQuaMau.nhi.join(" - ")}</td></tr>
            <tr><td>Giải Ba</td><td>${ketQuaMau.ba.join(" - ")}</td></tr>
            <tr><td>Giải Tư</td><td>${ketQuaMau.tu.join(" - ")}</td></tr>
            <tr><td>Giải Năm</td><td>${ketQuaMau.nam.join(" - ")}</td></tr>
            <tr><td>Giải Sáu</td><td>${ketQuaMau.sau.join(" - ")}</td></tr>
            <tr><td>Giải Bảy</td><td>${ketQuaMau.bay.join(" - ")}</td></tr>
            <tr><td>Giải Tám</td><td>${ketQuaMau.tam}</td></tr>
        `;
        lotteryContainer.style.display = 'block';
    });
}



// RESULTS.HTML - Trang mua vé số

if (document.getElementById('ticket-list')) {
    const ticketData = {
        nam: [
            { id: 1, so: '123456', gia: 10000, ngay: '2025-10-01', dai: 'TP. Hồ Chí Minh', soLuong: 50 },
            { id: 2, so: '654321', gia: 10000, ngay: '2025-10-01', dai: 'TP. Hồ Chí Minh', soLuong: 30 },
            { id: 3, so: '888888', gia: 10000, ngay: '2025-10-01', dai: 'Đồng Nai', soLuong: 0 },
            { id: 4, so: '168168', gia: 10000, ngay: '2025-09-30', dai: 'TP. Hồ Chí Minh', soLuong: 10 },
            { id: 5, so: '777777', gia: 10000, ngay: '2025-10-02', dai: 'An Giang', soLuong: 100 },
            { id: 6, so: '999999', gia: 10000, ngay: '2025-09-30', dai: 'Đồng Nai', soLuong: 5 },
        ],
        trung: [
            { id: 7, so: '234567', gia: 10000, ngay: '2025-10-01', dai: 'Khánh Hòa', soLuong: 40 },
            { id: 8, so: '876543', gia: 10000, ngay: '2025-10-01', dai: 'Phú Yên', soLuong: 60 },
            { id: 9, so: '888666', gia: 10000, ngay: '2025-09-30', dai: 'Huế', soLuong: 8 },
        ],
        bac: [
            { id: 10, so: '345678', gia: 10000, ngay: '2025-10-01', dai: 'Hà Nội', soLuong: 70 },
            { id: 11, so: '987654', gia: 10000, ngay: '2025-10-01', dai: 'Hải Phòng', soLuong: 0 },
            { id: 12, so: '686868', gia: 10000, ngay: '2025-09-30', dai: 'Hà Nội', soLuong: 12 },
        ]
    };

    const provinces = {
        nam: ['TP. Hồ Chí Minh', 'Đồng Nai', 'An Giang', 'Bình Dương'],
        trung: ['Khánh Hòa', 'Phú Yên', 'Huế', 'Đà Nẵng'],
        bac: ['Hà Nội', 'Hải Phòng', 'Quảng Ninh']
    };

    let currentMien = 'nam';
    let cart = [];

    updateProvinceFilter();
    loadTickets();
    updateCartDisplay();

    document.querySelectorAll('.tab-mien').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-mien').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentMien = this.dataset.mien;
            updateProvinceFilter();
            loadTickets();
        });
    });

    function updateProvinceFilter() {
        const select = document.getElementById('filter-province');
        select.innerHTML = '<option value="">Tất cả</option>';
        provinces[currentMien].forEach(p => {
            select.innerHTML += `<option value="${p}">${p}</option>`;
        });
    }

    function loadTickets() {
        const container = document.getElementById('ticket-list');
        const tickets = ticketData[currentMien];
        
        if (tickets.length === 0) {
            container.innerHTML = '<p class="empty-cart">Không có vé số nào</p>';
            return;
        }

        container.innerHTML = tickets.map(ticket => {
            const isUrgent = isTicketUrgent(ticket.ngay);
            const soldOut = ticket.soLuong === 0;
            
            return `
                <div class="ticket-card">
                    ${isUrgent && !soldOut ? '<span class="badge-urgent">⏰ Sắp hết hạn</span>' : ''}
                    ${soldOut ? '<span class="badge-sold-out">Hết vé</span>' : ''}
                    <div class="ticket-number">${ticket.so}</div>
                    <div class="ticket-info"><strong>Đài:</strong> ${ticket.dai}</div>
                    <div class="ticket-info"><strong>Ngày quay:</strong> ${formatDate(ticket.ngay)}</div>
                    <div class="ticket-info"><strong>Còn lại:</strong> ${ticket.soLuong} vé</div>
                    <div class="ticket-price">${ticket.gia.toLocaleString()} VNĐ</div>
                    <button class="btn-add-cart" onclick="addToCart(${ticket.id})" ${soldOut ? 'disabled' : ''}>
                        ${soldOut ? 'Hết vé' : 'Thêm vào giỏ'}
                    </button>
                </div>
            `;
        }).join('');
    }

    function isTicketUrgent(ngayQuay) {
        const now = new Date();
        const quayDate = new Date(ngayQuay);
        const hoursDiff = (quayDate - now) / (1000 * 60 * 60);
        return hoursDiff <= 24 && hoursDiff > 0;
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('vi-VN');
    }

    window.applyFilter = function() {
        const date = document.getElementById('filter-date').value;
        const province = document.getElementById('filter-province').value;
        const number = document.getElementById('filter-number').value;

        let filtered = ticketData[currentMien];

        if (date) filtered = filtered.filter(t => t.ngay === date);
        if (province) filtered = filtered.filter(t => t.dai === province);
        if (number) filtered = filtered.filter(t => t.so.includes(number));

        const container = document.getElementById('ticket-list');
        if (filtered.length === 0) {
            container.innerHTML = '<p class="empty-cart">Không tìm thấy vé số phù hợp</p>';
            return;
        }

        container.innerHTML = filtered.map(ticket => {
            const isUrgent = isTicketUrgent(ticket.ngay);
            const soldOut = ticket.soLuong === 0;
            
            return `
                <div class="ticket-card">
                    ${isUrgent && !soldOut ? '<span class="badge-urgent">⏰ Sắp hết hạn</span>' : ''}
                    ${soldOut ? '<span class="badge-sold-out">Hết vé</span>' : ''}
                    <div class="ticket-number">${ticket.so}</div>
                    <div class="ticket-info"><strong>Đài:</strong> ${ticket.dai}</div>
                    <div class="ticket-info"><strong>Ngày quay:</strong> ${formatDate(ticket.ngay)}</div>
                    <div class="ticket-info"><strong>Còn lại:</strong> ${ticket.soLuong} vé</div>
                    <div class="ticket-price">${ticket.gia.toLocaleString()} VNĐ</div>
                    <button class="btn-add-cart" onclick="addToCart(${ticket.id})" ${soldOut ? 'disabled' : ''}>
                        ${soldOut ? 'Hết vé' : 'Thêm vào giỏ'}
                    </button>
                </div>
            `;
        }).join('');
    }

    window.addToCart = function(ticketId) {
        const allTickets = [...ticketData.nam, ...ticketData.trung, ...ticketData.bac];
        const ticket = allTickets.find(t => t.id === ticketId);
        
        if (!ticket || ticket.soLuong === 0) return;

        const existingItem = cart.find(item => item.id === ticketId);
        if (existingItem) {
            alert('Vé này đã có trong giỏ hàng!');
            return;
        }

        cart.push({ ...ticket, quantity: 1 });
        updateCartDisplay();
        alert('Đã thêm vé vào giỏ hàng!');
    }

    function updateCartDisplay() {
        document.getElementById('cart-count').textContent = cart.length;
        
        const cartItems = document.getElementById('cart-items');
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
            document.getElementById('cart-total').textContent = '0';
            return;
        }

        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${item.so}</strong><br>
                    <small>${item.dai} - ${formatDate(item.ngay)}</small><br>
                    <small>${item.gia.toLocaleString()} VNĐ</small>
                </div>
                <button class="btn btn-secondary" onclick="removeFromCart(${index})">Xóa</button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.gia, 0);
        document.getElementById('cart-total').textContent = total.toLocaleString();
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

    window.toggleCart = function() {
        document.getElementById('cart-modal').classList.toggle('active');
    }

    window.checkout = function() {
        if (cart.length === 0) {
            alert('Giỏ hàng trống!');
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.gia, 0);
        alert(`Tổng đơn hàng: ${total.toLocaleString()} VNĐ\n\nChuyển đến trang thanh toán...`);
    }
}


// SCHEDULE.HTML - Lịch mở thưởng

if (document.getElementById('schedule-form')) {
    const form = document.getElementById('schedule-form');
    const scheduleTable = document.getElementById('schedule-table');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ngay = document.getElementById('ngay').value;

        // Simulate dữ liệu lịch
        const sampleData = {
            '2025-09-24': [
                { mien: 'Miền Nam', tinh: 'TP. Hồ Chí Minh, Đồng Nai', link: 'results.html?ngay=2025-09-24&tinh=tphcm' },
                { mien: 'Miền Trung', tinh: 'Khánh Hòa', link: 'results.html?ngay=2025-09-24&tinh=khanhhoa' }
            ],
            '2025-09-25': [
                { mien: 'Miền Nam', tinh: 'An Giang, Bình Thuận', link: 'results.html?ngay=2025-09-25&tinh=angiang' }
            ]
        };

        const data = sampleData[ngay] || [];
        scheduleTable.innerHTML = '';
        if (data.length === 0) {
            scheduleTable.innerHTML = '<tr><td colspan="4">Không có lịch mở thưởng cho ngày này.</td></tr>';
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ngay}</td>
                <td>${item.mien}</td>
                <td>${item.tinh}</td>
                <td><a href="${item.link}">Xem</a></td>
            `;
            scheduleTable.appendChild(row);
        });
    });
}



// NEWS.HTML - Tin tức

if (document.getElementById('news-list')) {
    const tabs = document.querySelectorAll('.tabs .tab');
    const newsItems = document.querySelectorAll('#news-list article');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.dataset.type;

            newsItems.forEach(item => {
                if (type === 'all' || item.dataset.type.includes(type)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Phân trang
    const paginationBtns = document.querySelectorAll('.pagination button');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Đang tải trang tiếp theo...');
        });
    });
}



// CONTACT.HTML - Liên hệ

if (document.getElementById('contact-form')) {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const hoTen = document.getElementById('ho-ten').value;
        const email = document.getElementById('email').value;
        const dienThoai = document.getElementById('dien-thoai').value;
        const tinhThanh = document.getElementById('tinh-thanh').value;
        const noiDung = document.getElementById('noi-dung').value;

        alert(`Cảm ơn ${hoTen}! Chúng tôi đã nhận thông tin từ ${tinhThanh}. Sẽ liên hệ qua ${email} hoặc ${dienThoai}. Nội dung: ${noiDung}`);
        form.reset();
    });
}



// ADMIN.HTML - Quản trị

if (document.getElementById('admin-section')) {
    // Kiểm tra quyền admin
    if (sessionStorage.getItem('user') !== 'admin@xosokienthiet.vn') {
        alert('Bạn cần đăng nhập với quyền admin để truy cập trang này.');
        window.location.href = 'login.html';
    }

    const tabs = document.querySelectorAll('.tabs .tab');
    const adminTabs = document.querySelectorAll('.admin-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            adminTabs.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        });
    });

    // Function load danh sách
    function loadList(listId, storageKey) {
        const list = document.querySelector(`#${listId} ul`);
        if (!list) return;
        
        const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];
        list.innerHTML = '';
        data.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = JSON.stringify(item);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Xóa';
            deleteBtn.onclick = () => {
                data.splice(index, 1);
                sessionStorage.setItem(storageKey, JSON.stringify(data));
                loadList(listId, storageKey);
            };
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    }

    // Quản lý kết quả
    const ketquaForm = document.getElementById('ketqua-form');
    if (ketquaForm) {
        ketquaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const ngay = document.getElementById('ngay-xo').value;
            const mien = document.getElementById('mien-admin').value;
            const tinh = document.getElementById('tinh-admin').value;
            const giaiDB = document.getElementById('giai-dac-biet').value;
            const data = JSON.parse(sessionStorage.getItem('ketqua')) || [];
            data.push({ ngay, mien, tinh, giaiDB });
            sessionStorage.setItem('ketqua', JSON.stringify(data));
            loadList('ketqua-list', 'ketqua');
            e.target.reset();
        });
        loadList('ketqua-list', 'ketqua');
    }

    // Quản lý tin tức
    const tintucForm = document.getElementById('tintuc-form');
    if (tintucForm) {
        tintucForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const tieuDe = document.getElementById('tieu-de').value;
            const noiDung = document.getElementById('noi-dung-tin').value;
            const loai = document.getElementById('loai-tin').value;
            const data = JSON.parse(sessionStorage.getItem('tintuc')) || [];
            data.push({ tieuDe, noiDung, loai });
            sessionStorage.setItem('tintuc', JSON.stringify(data));
            loadList('tintuc-list', 'tintuc');
            e.target.reset();
        });
        loadList('tintuc-list', 'tintuc');
    }

    // Quản lý người dùng
    const users = [
        { email: 'user1@example.com', role: 'user' }, 
        { email: 'admin@example.com', role: 'admin' }
    ];
    sessionStorage.setItem('nguoidung', JSON.stringify(users));
    loadList('nguoidung-list', 'nguoidung');

    // Quản lý vé số
    loadList('veso-list', 'lotteryHistory');
}
// Code để highlight tab active dựa trên trang hiện tại
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});