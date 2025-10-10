// ======= DỮ LIỆU TIN TỨC =======
const newsData = [
    { 
        id: 1, 
        type: 'hot', 
        title: 'Người trúng Jackpot 92 tỷ đã nhận thưởng', 
        content: 'Khách hàng may mắn ở Hà Nội đã chính thức lĩnh thưởng Vietlott.', 
        date: '2025-10-08',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 2, 
        type: 'hot', 
        title: 'Thống kê những con số thường xuất hiện trong tháng 9', 
        content: 'Tổng hợp từ 30 kỳ quay gần đây, số 88, 68, 86 dẫn đầu.', 
        date: '2025-10-07',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 3, 
        type: 'new', 
        title: 'Miền Nam khai trương thêm 2 đại lý mới', 
        content: 'Người dân có thêm lựa chọn mua vé số tại TP.HCM và Đồng Nai.', 
        date: '2025-10-06',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 4, 
        type: 'hot', 
        title: 'Cặp vợ chồng trúng 45 tỷ từ vé số cào', 
        content: 'Hai vợ chồng ở Đồng Nai mua vé thử may mắn và trúng giải lớn.', 
        date: '2025-10-05',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 5, 
        type: 'new', 
        title: 'Ứng dụng mobile mua vé số chính thức ra mắt', 
        content: 'Giờ đây bạn có thể mua vé số trực tuyến dễ dàng hơn.', 
        date: '2025-10-04',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 6, 
        type: 'popular', 
        title: 'Chương trình khuyến mãi tháng 10', 
        content: 'Mua 5 vé tặng 1 vé, áp dụng từ ngày 1-15/10.', 
        date: '2025-10-03',
        image: '' // Để trống cho bạn thêm sau
    },
    { 
        id: 7, 
        type: 'new', 
        title: 'Hướng dẫn cách chọn số may mắn theo phong thủy', 
        content: 'Các chuyên gia chia sẻ bí quyết chọn số dựa trên ngày sinh và mệnh.', 
        date: '2025-10-02',
        image: ''
    },
    { 
        id: 8, 
        type: 'popular', 
        title: 'Top 10 con số được mua nhiều nhất tuần qua', 
        content: 'Số 88, 68, 86 dẫn đầu danh sách các con số hot.', 
        date: '2025-10-01',
        image: ''
    },
    { 
        id: 9, 
        type: 'new', 
        title: 'Xổ số Miền Bắc có thêm giải Jackpot 2', 
        content: 'Giải thưởng phụ lên đến 10 tỷ đồng mỗi kỳ.', 
        date: '2025-09-30',
        image: ''
    }
];

// ======= FUNCTION RENDER TIN TỨC NỔI BẬT (CHO INDEX) =======
function renderHotNews(containerId = 'hot-news-section', limit = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Lọc tin nổi bật (hot)
    const hotNews = newsData.filter(news => news.type === 'hot').slice(0, limit);

    // Tạo HTML
    const newsHTML = `
        <div class="hot-news-header">
            <h2>🔥 Tin Tức Nổi Bật</h2>
            <a href="news.html" class="view-all-link">Xem tất cả →</a>
        </div>
        <div class="hot-news-grid">
            ${hotNews.map(news => `
                <div class="hot-news-card">
                    <div class="news-image-placeholder">
                        ${news.image ? `<img src="${news.image}" alt="${news.title}">` : ''}
                    </div>
                    <div class="news-badge">HOT</div>
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                    <div class="news-footer">
                        <span class="news-date">📅 ${formatDate(news.date)}</span>
                        <a href="news.html#detail${news.id}" class="read-more">Đọc thêm</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = newsHTML;
}

// ======= FUNCTION RENDER TRANG NEWS.HTML =======
function renderNewsPage() {
    const newsList = document.getElementById('news-list');
    if (!newsList) return;

    const itemsPerPage = 6;
    let currentPage = 1;
    let currentFilter = 'all';

    // Render tin tức theo trang và filter
    function renderNews() {
        // Lọc tin tức theo loại
        let filteredNews = newsData;
        if (currentFilter !== 'all') {
            filteredNews = newsData.filter(news => news.type === currentFilter);
        }

        // Tính toán phân trang
        const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newsToShow = filteredNews.slice(startIndex, endIndex);

        // Hiển thị tin tức
        if (newsToShow.length === 0) {
            newsList.innerHTML = '<p class="empty-cart">Không tìm thấy tin tức nào</p>';
        } else {
            newsList.innerHTML = newsToShow.map(news => `
                <article data-type="${news.type}">
                    <div class="news-image-placeholder">
                        ${news.image ? `<img src="${news.image}" alt="${news.title}">` : ''}
                    </div>
                    <span class="label ${news.type}">${news.type === 'new' ? 'New' : news.type === 'hot' ? 'Hot' : 'Popular'}</span>
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                    <small>📅 ${formatDate(news.date)}</small>
                    <a href="#detail${news.id}">Xem thêm →</a>
                </article>
            `).join('');
        }

        // Cập nhật pagination
        updatePagination(totalPages);
    }

    // Cập nhật nút phân trang
    function updatePagination(totalPages) {
        const paginationDiv = document.querySelector('.pagination');
        let paginationHTML = `<button onclick="changePage('prev')" ${currentPage === 1 ? 'disabled' : ''}>«</button>`;
        
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
        }
        
        paginationHTML += `<button onclick="changePage('next')" ${currentPage === totalPages ? 'disabled' : ''}>»</button>`;
        paginationDiv.innerHTML = paginationHTML;
    }

    // Thay đổi trang
    window.changePage = function(page) {
        let filteredNews = newsData;
        if (currentFilter !== 'all') {
            filteredNews = newsData.filter(news => news.type === currentFilter);
        }
        const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

        if (page === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (page === 'next' && currentPage < totalPages) {
            currentPage++;
        } else if (typeof page === 'number') {
            currentPage = page;
        }

        renderNews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Xử lý tab filter
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.type;
            currentPage = 1; // Reset về trang 1 khi đổi filter
            renderNews();
        });
    });

    // Khởi tạo
    renderNews();
}

// Format ngày
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
}

// Tự động render khi load trang
document.addEventListener('DOMContentLoaded', () => {
    renderHotNews(); // Cho trang index
    renderNewsPage(); // Cho trang news
});