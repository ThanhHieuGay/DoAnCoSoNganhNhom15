// ======= NEWS DETAIL JAVASCRIPT - PHẦN 1 =======

// Dữ liệu chi tiết đầy đủ cho từng tin tức
const newsDetailData = {
    1: {
        id: 1,
        type: 'hot',
        title: 'Người trúng Jackpot 92 tỷ đã nhận thưởng',
        summary: 'Sau nhiều ngày chờ đợi, người chơi may mắn đã chính thức đến trụ sở Vietlott tại Hà Nội để nhận giải thưởng Jackpot trị giá 92 tỷ đồng. Đây là một trong những giải thưởng lớn nhất trong năm 2025.',
        content: `
            <p>Vào sáng ngày 8/10/2025, ông Nguyễn Văn A (tên đã được thay đổi theo yêu cầu) đã có mặt tại trụ sở chính của Vietlott tại Hà Nội để nhận giải thưởng Jackpot trị giá 92 tỷ đồng. Đây là giải thưởng lớn thứ 5 được trao trong năm nay.</p>

            <h2>Hành trình đến với giải thưởng</h2>
            <p>Ông A chia sẻ rằng ông đã chơi xổ số được hơn 10 năm nhưng chưa bao giờ nghĩ mình sẽ trúng giải lớn như vậy. Vé số may mắn được mua tại một đại lý ở quận Đống Đa, Hà Nội vào ngày 1/10/2025.</p>

            <p>"Khi biết tin trúng giải, tôi vừa vui vừa bất ngờ. Đêm đó tôi không ngủ được vì cứ nghĩ đây là giấc mơ. Sáng hôm sau, tôi kiểm tra lại nhiều lần và đến đại lý để xác nhận", ông A kể lại.</p>

            <h2>Kế hoạch sử dụng tiền thưởng</h2>
            <p>Khi được hỏi về kế hoạch sử dụng số tiền lớn này, ông A cho biết:</p>
            
            <blockquote>
                "Tôi sẽ dành một phần để trả nợ, một phần để đầu tư kinh doanh nhỏ, và phần còn lại sẽ gửi tiết kiệm cho con cái. Tôi cũng sẽ dành một số tiền để làm từ thiện, giúp đỡ những hoàn cảnh khó khăn."
            </blockquote>

            <h3>Những con số may mắn</h3>
            <p>Vé số trúng giải có dãy số: <strong>12-25-33-41-58-68</strong>. Đại diện Vietlott cho biết đây là dãy số được nhiều người chơi trong cả nước và đã mang lại may mắn cho ông A.</p>

            <h2>Quy trình nhận thưởng</h2>
            <p>Theo quy định của Vietlott, người trúng giải có thời hạn 60 ngày kể từ ngày quay số để đến nhận thưởng. Các bước cụ thể bao gồm:</p>

            <ul>
                <li>Mang theo vé số gốc và CMND/CCCD</li>
                <li>Điền đầy đủ thông tin vào phiếu yêu cầu nhận thưởng</li>
                <li>Xác thực vé số qua hệ thống máy tính</li>
                <li>Nhận tiền sau khi trừ thuế thu nhập cá nhân 10%</li>
                <li>Ký xác nhận và hoàn tất thủ tục</li>
            </ul>

            <h2>Lời khuyên từ Vietlott</h2>
            <p>Đại diện Vietlott khuyên những người trúng giải lớn nên:</p>

            <ol>
                <li>Giữ bình tĩnh và không công khai thông tin cá nhân</li>
                <li>Tham khảo ý kiến chuyên gia tài chính trước khi đầu tư</li>
                <li>Lập kế hoạch chi tiêu hợp lý và dài hạn</li>
                <li>Cân nhắc các khoản đóng góp xã hội</li>
                <li>Bảo mật thông tin tài khoản ngân hàng</li>
            </ol>

            <h2>Thống kê giải thưởng lớn năm 2025</h2>
            <p>Đến nay, năm 2025 đã có 5 người trúng giải Jackpot với tổng giá trị hơn 400 tỷ đồng. Trong đó, giải lớn nhất là 112 tỷ đồng được trao vào tháng 6, và giải nhỏ nhất là 45 tỷ đồng.</p>

            <h3>Cơ hội trúng thưởng</h3>
            <p>Theo thống kê, xác suất trúng Jackpot Power 6/55 là 1/50.063.860. Tuy nhiên, với hàng triệu người chơi mỗi kỳ, luôn có những may mắn tới với ai đó.</p>

            <p>Chuyên gia khuyên người chơi nên chơi có trách nhiệm, chỉ dành số tiền dư để mua vé số và không nên coi đây là phương thức kiếm tiền chính.</p>

            <h2>Phản ứng của cộng đồng</h2>
            <p>Tin tức về người trúng giải 92 tỷ đã tạo nên làn sóng bàn tán sôi nổi trên mạng xã hội. Nhiều người gửi lời chúc mừng và hy vọng mình cũng sẽ may mắn như vậy.</p>

            <p>Một số người chơi cũ chia sẻ kinh nghiệm và cách chọn số của mình, tạo nên không khí sôi động trong cộng đồng yêu thích xổ số.</p>
        `,
        date: '2025-10-08',
        author: 'Nguyễn Văn B',
        category: 'Trúng thưởng',
        views: 15420,
        image: 'Images/images.jpg', // Để trống cho bạn thêm sau
        tags: ['Jackpot', 'Trúng lớn', 'Vietlott', 'Hà Nội', 'Power 6/55']
    },
    
    2: {
        id: 2,
        type: 'hot',
        title: 'Thống kê những con số thường xuất hiện trong tháng 9',
        summary: 'Phân tích dữ liệu từ 30 kỳ quay số trong tháng 9/2025 cho thấy một số con số xuất hiện với tần suất đặc biệt cao, mang đến cơ hội cho người chơi trong tháng 10.',
        content: `
            <p>Qua việc phân tích kỹ lưỡng dữ liệu từ 30 kỳ quay số trong tháng 9/2025, chúng tôi đã thống kê được những con số có tần suất xuất hiện cao nhất, giúp người chơi có thêm thông tin tham khảo khi chọn số.</p>

            <h2>Top 10 con số xuất hiện nhiều nhất</h2>
            <p>Dưới đây là danh sách 10 con số được quay ra nhiều nhất trong tháng 9:</p>

            <ol>
                <li><strong>Số 88</strong> - Xuất hiện 18 lần (60% các kỳ)</li>
                <li><strong>Số 68</strong> - Xuất hiện 17 lần (56.7% các kỳ)</li>
                <li><strong>Số 86</strong> - Xuất hiện 16 lần (53.3% các kỳ)</li>
                <li><strong>Số 28</strong> - Xuất hiện 15 lần (50% các kỳ)</li>
                <li><strong>Số 38</strong> - Xuất hiện 14 lần (46.7% các kỳ)</li>
                <li><strong>Số 48</strong> - Xuất hiện 14 lần (46.7% các kỳ)</li>
                <li><strong>Số 18</strong> - Xuất hiện 13 lần (43.3% các kỳ)</li>
                <li><strong>Số 58</strong> - Xuất hiện 13 lần (43.3% các kỳ)</li>
                <li><strong>Số 08</strong> - Xuất hiện 12 lần (40% các kỳ)</li>
                <li><strong>Số 78</strong> - Xuất hiện 12 lần (40% các kỳ)</li>
            </ol>

            <h2>Phân tích chi tiết</h2>
            
            <h3>Nhóm số có đuôi 8</h3>
            <p>Đáng chú ý, có tới 7/10 số trong top đều có đuôi là 8. Đây là một xu hướng rất rõ ràng trong tháng 9, cho thấy đuôi 8 đang trong chu kỳ "nóng".</p>

            <blockquote>
                "Các con số có đuôi 8 luôn được người Việt yêu thích vì ý nghĩa phong thủy. Tuy nhiên, việc xuất hiện dày đặc như vậy cũng cho thấy có sự ngẫu nhiên thú vị trong tháng 9" - Chuyên gia thống kê Trần Văn C
            </blockquote>

            <h3>Cặp số xuất hiện cùng nhau</h3>
            <p>Phân tích sâu hơn, chúng tôi phát hiện một số cặp số thường xuất hiện cùng nhau:</p>

            <ul>
                <li>Cặp 88-68: Xuất hiện cùng nhau 9 lần</li>
                <li>Cặp 28-38: Xuất hiện cùng nhau 8 lần</li>
                <li>Cặp 18-58: Xuất hiện cùng nhau 7 lần</li>
                <li>Cặp 48-78: Xuất hiện cùng nhau 6 lần</li>
            </ul>

            <h2>Những con số "lạnh" trong tháng 9</h2>
            <p>Ngược lại, một số con số xuất hiện rất ít trong tháng vừa qua:</p>

            <ul>
                <li><strong>Số 03</strong> - Chỉ xuất hiện 2 lần</li>
                <li><strong>Số 13</strong> - Chỉ xuất hiện 2 lần</li>
                <li><strong>Số 23</strong> - Chỉ xuất hiện 3 lần</li>
                <li><strong>Số 53</strong> - Chỉ xuất hiện 3 lần</li>
            </ul>

            <h2>So sánh với tháng 8</h2>
            <p>Khi so sánh với tháng 8, chúng ta thấy có sự thay đổi rõ rệt:</p>

            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 12px;">Số</th>
                        <th style="border: 1px solid #ddd; padding: 12px;">Tháng 8</th>
                        <th style="border: 1px solid #ddd; padding: 12px;">Tháng 9</th>
                        <th style="border: 1px solid #ddd; padding: 12px;">Thay đổi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">88</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">12 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">18 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px; color: green;">+6</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">68</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">10 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">17 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px; color: green;">+7</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">86</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">14 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">16 lần</td>
                        <td style="border: 1px solid #ddd; padding: 8px; color: green;">+2</td>
                    </tr>
                </tbody>
            </table>

            <h2>Dự đoán cho tháng 10</h2>
            <p>Dựa trên xu hướng, chúng tôi nhận thấy:</p>

            <ul>
                <li>Nhóm số có đuôi 8 có thể tiếp tục duy trì sự "nóng" trong nửa đầu tháng 10</li>
                <li>Các số "lạnh" như 03, 13, 23 có khả năng xuất hiện nhiều hơn (theo quy luật cân bằng)</li>
                <li>Cặp số 88-68 vẫn đáng chú ý trong các lần chọn số</li>
            </ul>

            <h3>Lời khuyên từ chuyên gia</h3>
            <blockquote>
                "Thống kê chỉ là tham khảo, không đảm bảo chắc chắn. Người chơi nên kết hợp nhiều phương pháp: thống kê, phong thủy, và cảm giác cá nhân. Quan trọng nhất là chơi có trách nhiệm và trong khả năng tài chính của mình."
            </blockquote>

            <h2>Phương pháp thống kê</h2>
            <p>Chúng tôi sử dụng dữ liệu chính thức từ Vietlott và các đài xổ số miền Nam, Trung, Bắc. Tất cả số liệu được kiểm tra chéo và xác thực từ nhiều nguồn đáng tin cậy.</p>

            <p>Người chơi có thể tham khảo thống kê này nhưng nên nhớ rằng xổ số là trò chơi may rủi, không có công thức chắc chắn nào.</p>
        `,
        date: '2025-10-07',
        author: 'Trần Thị D',
        category: 'Thống kê',
        views: 12350,
        image: 'Images/images.jpg',
        tags: ['Thống kê', 'Tháng 9', 'Con số hot', 'Phân tích', 'Dự đoán']
    }
};

// ======= NEWS DETAIL JAVASCRIPT - PHẦN 2 (TIẾP TỤC) =======

// Thêm các tin tức còn lại vào newsDetailData
newsDetailData[3] = {
    id: 3,
    type: 'new',
    title: 'Miền Nam khai trương thêm 2 đại lý mới',
    summary: 'Hệ thống đại lý xổ số tại TP.HCM và Đồng Nai mở rộng mạng lưới với 2 điểm bán mới, phục vụ tốt hơn nhu cầu của người dân.',
    content: `
        <p>Sáng ngày 6/10/2025, hai đại lý xổ số kiến thiết mới đã chính thức khai trương tại TP.HCM và Đồng Nai, đánh dấu bước phát triển mới trong việc mở rộng mạng lưới phân phối.</p>

        <h2>Địa điểm và thông tin</h2>
        
        <h3>Đại lý TP. Hồ Chí Minh</h3>
        <ul>
            <li><strong>Địa chỉ:</strong> 456 Đường Nguyễn Văn Linh, Quận 7</li>
            <li><strong>Giờ mở cửa:</strong> 7:00 - 21:00 (tất cả các ngày)</li>
            <li><strong>Dịch vụ:</strong> Bán vé số truyền thống, Vietlott, vé cào</li>
            <li><strong>Tiện ích:</strong> Máy lạnh, WiFi miễn phí, khu vực chờ thoải mái</li>
        </ul>

        <h3>Đại lý Đồng Nai</h3>
        <ul>
            <li><strong>Địa chỉ:</strong> 789 Phạm Văn Thuận, TP. Biên Hòa</li>
            <li><strong>Giờ mở cửa:</strong> 6:30 - 21:30 (tất cả các ngày)</li>
            <li><strong>Dịch vụ:</strong> Bán vé số các miền, Vietlott, tra cứu kết quả</li>
            <li><strong>Tiện ích:</strong> Bãi đậu xe rộng, hệ thống thanh toán đa dạng</li>
        </ul>

        <h2>Ưu đãi khai trương</h2>
        <p>Trong tuần lễ khai trương (6/10 - 13/10), cả hai đại lý đều có chương trình ưu đãi đặc biệt:</p>

        <ul>
            <li>Giảm 5% cho tất cả vé Vietlott</li>
            <li>Mua 10 vé số truyền thống tặng 1 vé</li>
            <li>Quà tặng may mắn cho 100 khách hàng đầu tiên mỗi ngày</li>
            <li>Tặng voucher 50,000đ cho khách mua từ 500,000đ</li>
        </ul>

        <h2>Tầm quan trọng của mở rộng mạng lưới</h2>
        <p>Ông Phạm Văn E, Giám đốc khu vực miền Nam chia sẻ: "Việc mở thêm các đại lý mới giúp người dân dễ dàng tiếp cận với dịch vụ xổ số hợp pháp, minh bạch hơn. Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng."</p>

        <h2>Kế hoạch mở rộng</h2>
        <p>Theo kế hoạch, trong quý 4/2025, sẽ có thêm 5 đại lý được khai trương tại các tỉnh Bình Dương, Long An, Tây Ninh, Bà Rịa - Vũng Tàu và Cần Thơ.</p>
    `,
    date: '2025-10-06',
    author: 'Lê Văn F',
    category: 'Tin tức',
    views: 8520,
    image: 'Images/images.jpg',
    tags: ['Đại lý mới', 'TP.HCM', 'Đồng Nai', 'Khai trương', 'Ưu đãi']
};

// ======= FUNCTION RENDER CHI TIẾT TIN TỨC =======
function renderNewsDetail() {
    // Lấy ID từ URL hash (ví dụ: #detail1)
    const hash = window.location.hash;
    const newsId = hash.replace('#detail', '');
    
    const newsDetail = newsDetailData[newsId];
    const contentContainer = document.getElementById('news-detail-content');
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    
    if (!newsDetail) {
        contentContainer.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h2 style="color: #999;">Không tìm thấy bài viết</h2>
                <p style="color: #666; margin: 20px 0;">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <a href="news.html" class="back-to-list">← Quay lại danh sách tin tức</a>
            </div>
        `;
        return;
    }

    // Cập nhật breadcrumb
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = newsDetail.title;
    }

    // Cập nhật title trang
    document.title = `${newsDetail.title} - Xổ Số Kiến Thiết`;

    // Render nội dung chi tiết
    const badgeText = newsDetail.type === 'hot' ? 'HOT' : newsDetail.type === 'new' ? 'NEW' : 'POPULAR';
    
    contentContainer.innerHTML = `
        <a href="news.html" class="back-to-list">← Quay lại danh sách</a>
        
        <span class="detail-badge">${badgeText}</span>
        
        <h1 class="detail-title">${newsDetail.title}</h1>
        
        <div class="detail-meta">
            <div class="meta-item">
                <span>📅</span> ${formatDate(newsDetail.date)}
            </div>
            <div class="meta-item">
                <span>✍️</span> ${newsDetail.author}
            </div>
            <div class="meta-item">
                <span>📁</span> ${newsDetail.category}
            </div>
            <div class="meta-item">
                <span>👁️</span> ${newsDetail.views.toLocaleString('vi-VN')} lượt xem
            </div>
        </div>
        
        <div class="detail-featured-image">
            ${newsDetail.image ? `<img src="${newsDetail.image}" alt="${newsDetail.title}">` : ''}
        </div>
        
        <div class="detail-summary">
            ${newsDetail.summary}
        </div>
        
        <div class="detail-body">
            ${newsDetail.content}
        </div>
        
        <div class="detail-tags">
            ${newsDetail.tags.map(tag => `<a href="news.html" class="tag">#${tag}</a>`).join('')}
        </div>
        
        <div class="detail-share">
            <h4>📤 Chia sẻ bài viết</h4>
            <div class="share-buttons">
                <button class="share-btn facebook" onclick="shareToFacebook()">
                    📘 Facebook
                </button>
                <button class="share-btn twitter" onclick="shareToTwitter()">
                    🐦 Twitter
                </button>
                <button class="share-btn copy" onclick="copyLink()">
                    🔗 Copy Link
                </button>
            </div>
        </div>
    `;

    // Render tin liên quan và nổi bật
    renderRelatedNews(newsDetail.type, newsId);
    renderTrendingNews(newsId);
}

// ======= RENDER TIN LIÊN QUAN =======
function renderRelatedNews(type, currentId) {
    const container = document.getElementById('related-news-list');
    if (!container) return;

    // Lấy 4 tin cùng loại, khác ID hiện tại
    const relatedNews = Object.values(newsDetailData)
        .filter(news => news.type === type && news.id != currentId)
        .slice(0, 4);

    if (relatedNews.length === 0) {
        // Nếu không có tin cùng loại, lấy tin khác
        const otherNews = Object.values(newsDetailData)
            .filter(news => news.id != currentId)
            .slice(0, 4);
        renderSidebarNews(container, otherNews);
    } else {
        renderSidebarNews(container, relatedNews);
    }
}

// ======= RENDER TIN NỔI BẬT =======
function renderTrendingNews(currentId) {
    const container = document.getElementById('trending-news-list');
    if (!container) return;

    // Lấy 4 tin có lượt xem cao nhất, khác ID hiện tại
    const trendingNews = Object.values(newsDetailData)
        .filter(news => news.id != currentId)
        .sort((a, b) => b.views - a.views)
        .slice(0, 4);

    renderSidebarNews(container, trendingNews);
}

// ======= RENDER SIDEBAR NEWS ITEM =======
function renderSidebarNews(container, newsList) {
    container.innerHTML = newsList.map(news => `
        <div class="sidebar-news-item">
            <div class="sidebar-news-thumb">
                ${news.image ? `<img src="${news.image}" alt="${news.title}">` : ''}
            </div>
            <div class="sidebar-news-info">
                <h4><a href="#detail${news.id}" onclick="renderNewsDetail()">${news.title}</a></h4>
                <span class="sidebar-news-date">📅 ${formatDate(news.date)}</span>
            </div>
        </div>
    `).join('');
}

// ======= SHARE FUNCTIONS =======
function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.querySelector('.detail-title').textContent);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function copyLink() {
    const url = window.location.href;
    
    // Tạo element tạm để copy
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Hiển thị thông báo
    alert('✅ Đã copy link bài viết!');
}

// ======= FORMAT DATE =======
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
}

// ======= XỬ LÝ KHI HASH THAY ĐỔI =======
window.addEventListener('hashchange', renderNewsDetail);

// ======= TỰ ĐỘNG RENDER KHI LOAD TRANG =======
document.addEventListener('DOMContentLoaded', renderNewsDetail);

// ======= BỔ SUNG 6 TIN TỨC CÒN LẠI (ID: 4-9) =======
// Thêm vào cuối file news_detail.js hiện tại, trước các function

newsDetailData[4] = {
    id: 4,
    type: 'hot',
    title: 'Cặp vợ chồng trúng 45 tỷ từ vé số cào',
    summary: 'Hai vợ chồng ở Đồng Nai may mắn trúng giải 45 tỷ đồng từ vé số cào, quyết định dùng tiền xây nhà và làm từ thiện.',
    content: `
        <p>Chiều ngày 5/10/2025, cặp vợ chồng anh Trần Văn G và chị Nguyễn Thị H (Đồng Nai) đã đến trụ sở Vietlott để nhận giải thưởng 45 tỷ từ vé số cào.</p>

        <h2>Câu chuyện trúng giải</h2>
        <p>Anh G kể: "Tôi mua 5 vé cào trong cửa hàng tạp hóa gần nhà. Vé thứ 3 là vé trúng 45 tỷ. Lúc đầu tôi không tin, phải kiểm tra lại nhiều lần."</p>

        <blockquote>"Đây là món quà từ trời ban tặng. Chúng tôi sẽ sử dụng có trách nhiệm" - Chị H chia sẻ</blockquote>

        <h2>Kế hoạch sử dụng tiền</h2>
        <ul>
            <li>Xây nhà mới cho gia đình (10 tỷ)</li>
            <li>Trả nợ ngân hàng (5 tỷ)</li>
            <li>Gửi tiết kiệm cho con (15 tỷ)</li>
            <li>Đầu tư kinh doanh (10 tỷ)</li>
            <li>Làm từ thiện (5 tỷ)</li>
        </ul>

        <h2>Về vé số cào</h2>
        <p>Vé số cào là hình thức xổ số tức thời, người chơi cào lớp phủ để biết kết quả ngay. Giải thưởng từ vài chục nghìn đến hàng chục tỷ đồng.</p>

        <h3>Xác suất trúng giải</h3>
        <p>Theo Vietlott, xác suất trúng giải cao nhất vé cào khoảng 1/1.000.000. Tuy nhiên, mỗi ngày vẫn có người may mắn.</p>

        <h2>Lời khuyên mua vé cào</h2>
        <ol>
            <li>Chỉ mua ở đại lý chính thức</li>
            <li>Kiểm tra hạn sử dụng</li>
            <li>Cào cẩn thận tránh rách</li>
            <li>Bảo quản vé tốt nếu trúng</li>
            <li>Đến nhận thưởng trong 60 ngày</li>
        </ol>

        <p>Chúc mừng cặp vợ chồng may mắn và hy vọng họ sẽ sử dụng số tiền một cách hiệu quả cho tương lai gia đình.</p>
    `,
    date: '2025-10-05',
    author: 'Phạm Thị K',
    category: 'Trúng thưởng',
    views: 18750,
    image: 'Images/images.jpg',
    tags: ['Vé cào', 'Trúng lớn', 'Đồng Nai', '45 tỷ', 'Vợ chồng']
};

newsDetailData[5] = {
    id: 5,
    type: 'new',
    title: 'Ứng dụng mobile mua vé số chính thức ra mắt',
    summary: 'Ứng dụng mua vé số trực tuyến mới với giao diện thân thiện và nhiều tính năng tiện lợi đã chính thức ra mắt người dùng.',
    content: `
        <p>Ngày 4/10/2025, Vietlott chính thức ra mắt ứng dụng mobile "Vé Số Online" trên cả iOS và Android.</p>

        <h2>Tính năng nổi bật</h2>
        <ul>
            <li>✅ Mua vé số trực tuyến 24/7</li>
            <li>✅ Tra cứu kết quả tức thì</li>
            <li>✅ Thông báo trúng thưởng tự động</li>
            <li>✅ Lưu dãy số yêu thích</li>
            <li>✅ Thống kê số hot/lạnh</li>
            <li>✅ Thanh toán đa dạng (ATM, ví điện tử)</li>
            <li>✅ Nhận thưởng trực tiếp vào tài khoản</li>
        </ul>

        <h2>Hướng dẫn sử dụng</h2>
        <h3>Bước 1: Tải ứng dụng</h3>
        <p>Truy cập App Store (iOS) hoặc Google Play (Android), tìm kiếm "Vé Số Online" và tải về.</p>

        <h3>Bước 2: Đăng ký tài khoản</h3>
        <p>Nhập số điện thoại, email và xác thực OTP.</p>

        <h3>Bước 3: Nạp tiền</h3>
        <p>Nạp tiền qua ngân hàng hoặc ví điện tử (tối thiểu 50,000đ).</p>

        <h3>Bước 4: Mua vé</h3>
        <p>Chọn loại vé, chọn số hoặc để hệ thống chọn ngẫu nhiên, thanh toán.</p>

        <h2>Ưu đãi ra mắt</h2>
        <ul>
            <li>Tặng 100,000đ cho 10,000 người dùng đầu tiên</li>
            <li>Giảm 10% phí giao dịch trong tháng đầu</li>
            <li>Hoàn 5% cho đơn từ 500,000đ</li>
        </ul>

        <h2>Bảo mật và an toàn</h2>
        <p>Ứng dụng sử dụng công nghệ mã hóa SSL 256-bit, đảm bảo mọi giao dịch an toàn tuyệt đối.</p>

        <blockquote>"Chúng tôi cam kết mang đến trải nghiệm mua vé số hiện đại, tiện lợi và minh bạch nhất" - Đại diện Vietlott</blockquote>

        <p>Hãy tải ngay ứng dụng để trải nghiệm cách mua vé số hiện đại và nhận nhiều ưu đãi hấp dẫn!</p>
    `,
    date: '2025-10-04',
    author: 'Hoàng Văn M',
    category: 'Công nghệ',
    views: 9840,
    image: 'Images/images.jpg',
    tags: ['App mobile', 'Mua vé online', 'Công nghệ', 'Tiện lợi']
};

newsDetailData[6] = {
    id: 6,
    type: 'popular',
    title: 'Chương trình khuyến mãi tháng 10',
    summary: 'Mua 5 vé tặng 1 vé, chương trình áp dụng từ 1-15/10 tại tất cả đại lý trên toàn quốc.',
    content: `
        <p>Nhân dịp tháng 10, Vietlott triển khai chương trình khuyến mãi "Mua 5 tặng 1" hấp dẫn cho khách hàng.</p>

        <h2>Chi tiết chương trình</h2>
        <ul>
            <li><strong>Thời gian:</strong> 01/10 - 15/10/2025</li>
            <li><strong>Địa điểm:</strong> Tất cả đại lý trên toàn quốc</li>
            <li><strong>Sản phẩm:</strong> Vé Vietlott Power 6/55, Mega 6/45</li>
            <li><strong>Điều kiện:</strong> Mua 5 vé cùng loại, tặng 1 vé</li>
        </ul>

        <h2>Cách thức tham gia</h2>
        <ol>
            <li>Đến đại lý Vietlott</li>
            <li>Mua 5 vé cùng loại (Power hoặc Mega)</li>
            <li>Nhận ngay 1 vé miễn phí</li>
            <li>Vé tặng có thể trúng giải bình thường</li>
        </ol>

        <h2>Ưu đãi kèm theo</h2>
        <p>Khách hàng mua theo chương trình còn được:</p>
        <ul>
            <li>Tích điểm thành viên x2</li>
            <li>Tham gia rút thăm may mắn cuối tháng</li>
            <li>Nhận voucher giảm giá lần mua tiếp theo</li>
        </ul>

        <h2>Giải thưởng rút thăm may mắn</h2>
        <p>Ngày 20/10, Vietlott sẽ rút thăm từ khách hàng tham gia chương trình:</p>
        <ul>
            <li>1 giải Nhất: 50 triệu đồng</li>
            <li>2 giải Nhì: 20 triệu đồng</li>
            <li>5 giải Ba: 10 triệu đồng</li>
            <li>20 giải Khuyến khích: 2 triệu đồng</li>
        </ul>

        <blockquote>"Đây là món quà tri ân khách hàng trung thành của Vietlott" - Phát ngôn viên công ty</blockquote>

        <h2>Lưu ý khi tham gia</h2>
        <p>Giữ hóa đơn mua hàng để tham gia rút thăm. Kết quả sẽ công bố trên website và fanpage chính thức.</p>

        <p>Đừng bỏ lỡ cơ hội nhận ưu đãi và tham gia rút thăm may mắn trong tháng 10 này!</p>
    `,
    date: '2025-10-03',
    author: 'Vũ Thị N',
    category: 'Khuyến mãi',
    views: 11200,
    image: 'Images/images.jpg',
    tags: ['Khuyến mãi', 'Tháng 10', 'Mua 5 tặng 1', 'Ưu đãi']
};

newsDetailData[7] = {
    id: 7,
    type: 'new',
    title: 'Hướng dẫn cách chọn số may mắn theo phong thủy',
    summary: 'Các chuyên gia phong thủy chia sẻ bí quyết chọn số dựa trên ngày sinh, tuổi và mệnh để tăng vận may.',
    content: `
        <p>Nhiều người tin rằng chọn số theo phong thủy có thể mang lại may mắn. Dưới đây là hướng dẫn từ chuyên gia.</p>

        <h2>Chọn số theo ngày sinh</h2>
        <p>Lấy các chữ số trong ngày sinh làm gốc. Ví dụ: sinh ngày 15/08/1990 → các số: 1, 5, 8, 9, 0.</p>

        <h3>Cách kết hợp</h3>
        <ul>
            <li>Số thuận: 15, 18, 19, 50, 58, 59, 80, 89, 90</li>
            <li>Số nghịch: 51, 81, 91, 05, 85, 95, 08, 98, 09</li>
            <li>Số lặp: 11, 55, 88, 99, 00</li>
        </ul>

        <h2>Chọn số theo mệnh</h2>
        <h3>Kim (1960, 1961, 1968, 1969, 1976, 1977...)</h3>
        <p>Số may mắn: 4, 9, 49, 94, 14, 19</p>

        <h3>Mộc (1962, 1963, 1970, 1971, 1978, 1979...)</h3>
        <p>Số may mắn: 3, 8, 38, 83, 13, 18</p>

        <h3>Thủy (1966, 1967, 1974, 1975, 1982, 1983...)</h3>
        <p>Số may mắn: 1, 6, 16, 61, 11, 66</p>

        <h3>Hỏa (1964, 1965, 1972, 1973, 1980, 1981...)</h3>
        <p>Số may mắn: 2, 7, 27, 72, 22, 77</p>

        <h3>Thổ (1968, 1969, 1976, 1977, 1984, 1985...)</h3>
        <p>Số may mắn: 5, 0, 50, 05, 55, 00</p>

        <h2>Chọn số theo giấc mơ</h2>
        <p>Một số người tin vào việc chọn số dựa trên giấc mơ:</p>
        <ul>
            <li>Mơ thấy nước: 1, 6</li>
            <li>Mơ thấy lửa: 2, 7</li>
            <li>Mơ thấy cây cối: 3, 8</li>
            <li>Mơ thấy kim loại: 4, 9</li>
            <li>Mơ thấy đất đá: 5, 0</li>
        </ul>

        <h2>Bí quyết chọn số hiệu quả</h2>
        <ol>
            <li>Kết hợp số theo mệnh và ngày sinh</li>
            <li>Chọn các số có ý nghĩa đặc biệt với bản thân</li>
            <li>Tham khảo thống kê số hot/lạnh</li>
            <li>Tin tưởng vào trực giác của mình</li>
            <li>Chơi đều đặn với bộ số cố định</li>
        </ol>

        <h2>Lưu ý quan trọng</h2>
        <blockquote>Phong thủy chỉ là niềm tin tâm linh, không đảm bảo trúng số. Hãy chơi có trách nhiệm và trong khả năng của mình.</blockquote>

        <p>Xổ số là trò chơi may rủi, không có công thức chắc chắn. Phong thủy chỉ là yếu tố tinh thần giúp bạn tự tin hơn khi chọn số.</p>
    `,
    date: '2025-10-02',
    author: 'Thầy Nguyễn Văn P',
    category: 'Hướng dẫn',
    views: 14580,
    image: 'Images/images.jpg',
    tags: ['Phong thủy', 'Chọn số', 'May mắn', 'Hướng dẫn', 'Mệnh']
};

newsDetailData[8] = {
    id: 8,
    type: 'popular',
    title: 'Top 10 con số được mua nhiều nhất tuần qua',
    summary: 'Thống kê cho thấy số 88, 68, 86 là những con số được người chơi lựa chọn nhiều nhất trong tuần vừa qua.',
    content: `
        <p>Dữ liệu từ hệ thống Vietlott tuần 23-29/09 cho thấy xu hướng chọn số của người chơi.</p>

        <h2>Top 10 số được mua nhiều nhất</h2>
        <ol>
            <li><strong>Số 88</strong> - 45,230 lượt chọn</li>
            <li><strong>Số 68</strong> - 42,150 lượt chọn</li>
            <li><strong>Số 86</strong> - 39,870 lượt chọn</li>
            <li><strong>Số 18</strong> - 35,640 lượt chọn</li>
            <li><strong>Số 28</strong> - 33,920 lượt chọn</li>
            <li><strong>Số 38</strong> - 31,550 lượt chọn</li>
            <li><strong>Số 58</strong> - 29,780 lượt chọn</li>
            <li><strong>Số 08</strong> - 27,640 lượt chọn</li>
            <li><strong>Số 78</strong> - 26,340 lượt chọn</li>
            <li><strong>Số 48</strong> - 24,890 lượt chọn</li>
        </ol>

        <h2>Phân tích xu hướng</h2>
        <p>Tương tự như thống kê kết quả quay số, các con số có đuôi 8 vẫn chiếm ưu thế tuyệt đối trong lựa chọn của người chơi.</p>

        <h3>Lý do đuôi 8 được ưa chuộng</h3>
        <ul>
            <li>Ý nghĩa phong thủy: Số 8 tượng trưng cho phát tài, may mắn</li>
            <li>Âm thanh: "Tám" phát âm giống "Phát" (phát tài)</li>
            <li>Tâm lý: Người Việt thích số có ý nghĩa tốt</li>
            <li>Xu hướng: Nhiều người thắng có số 8</li>
        </ul>

        <h2>So sánh với kết quả thực tế</h2>
        <p>Thú vị là danh sách số được mua nhiều phần lớn trùng khớp với danh sách số xuất hiện nhiều trong kết quả. Điều này cho thấy:</p>

        <blockquote>"Có thể có mối liên hệ tâm lý giữa sự lựa chọn của đông đảo người chơi và kết quả may mắn" - Chuyên gia phân tích</blockquote>

        <h2>Các số ít được chọn</h2>
        <p>Ngược lại, một số con số rất ít người chọn:</p>
        <ul>
            <li>Số 13 - Chỉ 3,450 lượt (bị xem là số xui)</li>
            <li>Số 04 - 4,230 lượt (âm thanh giống "tử")</li>
            <li>Số 53 - 5,680 lượt</li>
        </ul>

        <h2>Lời khuyên cho người chơi</h2>
        <ol>
            <li>Đừng chỉ chọn số phổ biến, cạnh tranh cao</li>
            <li>Các số ít người chọn nếu trúng sẽ ít chia giải</li>
            <li>Kết hợp giữa số hot và số lạnh</li>
            <li>Chọn số có ý nghĩa với bản thân</li>
            <li>Chơi đều đặn với chiến lược riêng</li>
        </ol>

        <h2>Thống kê theo miền</h2>
        <p>Miền Nam và Miền Bắc đều ưa chuộng số 88, trong khi Miền Trung thích số 68 hơn.</p>

        <p>Dù số nào được chọn nhiều hay ít, xác suất trúng vẫn như nhau. Hãy chọn số mà bạn cảm thấy may mắn nhất!</p>
    `,
    date: '2025-10-01',
    author: 'Lê Thị Q',
    category: 'Thống kê',
    views: 16420,
    image: 'Images/images.jpg',
    tags: ['Thống kê', 'Số hot', 'Xu hướng', 'Người chơi', 'Lựa chọn']
};

newsDetailData[9] = {
    id: 9,
    type: 'new',
    title: 'Xổ số Miền Bắc có thêm giải Jackpot 2',
    summary: 'Giải thưởng phụ lên đến 10 tỷ đồng mỗi kỳ, mang đến thêm cơ hội trúng lớn cho người chơi miền Bắc.',
    content: `
        <p>Từ ngày 1/10/2025, xổ số Miền Bắc chính thức áp dụng thêm giải Jackpot 2 với giá trị 10 tỷ đồng mỗi kỳ.</p>

        <h2>Thông tin giải Jackpot 2</h2>
        <ul>
            <li><strong>Giá trị:</strong> 10 tỷ đồng (có thể tích lũy nếu không ai trúng)</li>
            <li><strong>Điều kiện:</strong> Trúng 5/6 số trong dãy số Jackpot chính</li>
            <li><strong>Tần suất:</strong> Mỗi kỳ quay số (3 lần/tuần)</li>
            <li><strong>Khu vực:</strong> Áp dụng cho xổ số Miền Bắc</li>
        </ul>

        <h2>Cách thức tham gia</h2>
        <p>Người chơi không cần mua vé riêng cho Jackpot 2. Khi mua vé xổ số Miền Bắc thông thường, tự động được tham gia cả 2 giải:</p>

        <ol>
            <li>Jackpot 1 (chính): Trúng 6/6 số</li>
            <li>Jackpot 2 (phụ): Trúng 5/6 số</li>
        </ol>

        <h2>Cơ hội trúng thưởng tăng lên</h2>
        <p>Theo đại diện Vietlott:</p>

        <blockquote>"Với Jackpot 2, người chơi có thêm 1 cơ hội trúng giải lớn. Xác suất trúng Jackpot 2 cao hơn nhiều so với Jackpot 1"</blockquote>

        <h3>So sánh xác suất</h3>
        <ul>
            <li>Jackpot 1 (6/6 số): 1/50.063.860</li>
            <li>Jackpot 2 (5/6 số): 1/211.915</li>
        </ul>

        <h2>Tích lũy giải thưởng</h2>
        <p>Nếu không có người trúng Jackpot 2 trong kỳ quay, giải thưởng sẽ được cộng dồn vào kỳ tiếp theo, tối đa 30 tỷ đồng.</p>

        <h2>Phản ứng từ người chơi</h2>
        <p>Anh Nguyễn Văn R (Hà Nội) chia sẻ: "Đây là tin vui lớn. Tôi chơi xổ số đã lâu và Jackpot 2 cho thêm hy vọng trúng giải cao."</p>

        <h2>Lịch quay số Miền Bắc</h2>
        <p>Xổ số Miền Bắc quay 3 lần/tuần:</p>
        <ul>
            <li>Thứ 2</li>
            <li>Thứ 4</li>
            <li>Thứ 6</li>
        </ul>

        <h2>Quy định nhận thưởng</h2>
        <p>Tương tự Jackpot 1:</p>
        <ol>
            <li>Thời hạn: 60 ngày kể từ ngày quay số</li>
            <li>Địa điểm: Trụ sở Vietlott Hà Nội</li>
            <li>Thuế: 10% thu nhập cá nhân</li>
            <li>Giấy tờ: CMND/CCCD + vé gốc</li>
        </ol>

        <p>Chương trình mới này hứa hẹn sẽ thu hút thêm nhiều người chơi xổ số Miền Bắc. Chúc may mắn!</p>
    `,
    date: '2025-09-30',
    author: 'Đỗ Văn S',
    category: 'Tin tức',
    views: 13670,
    image: 'Images/images.jpg',
    tags: ['Miền Bắc', 'Jackpot 2', 'Giải mới', 'Cơ hội', '10 tỷ']
};