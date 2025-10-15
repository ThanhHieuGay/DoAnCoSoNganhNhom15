// navigation.js - Quản lý Navigation & Header cho TẤT CẢ các trang
// File này phải được include ở TẤT CẢ các trang HTML

(function() {
    'use strict';
    
    console.log('🚀 Navigation script initialized');
    
    // ============== 1. HIGHLIGHT ACTIVE TAB ==============
    function highlightActiveTab() {
        const path = window.location.pathname;
        const currentPage = path.split('/').pop() || 'index.html';
        
        console.log('📍 Current page:', currentPage);
        
        const navLinks = document.querySelectorAll('nav ul li a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (!href) return;
            
            const linkPage = href.split('/').pop().split('?')[0].split('#')[0];
            
            // Kiểm tra khớp
            if (linkPage === currentPage) {
                link.classList.add('active');
                console.log('✅ Active tab:', link.textContent.trim());
            }
            
            // Trường hợp đặc biệt: trang chủ
            if ((currentPage === '' || currentPage === 'index.html') && linkPage === 'index.html') {
                link.classList.add('active');
                console.log('✅ Active tab (home):', link.textContent.trim());
            }
        });
    }
    
    // ============== 2. SHRINK HEADER KHI SCROLL ==============
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function handleHeaderShrink() {
        const header = document.getElementById('main-header');
        if (!header) {
            console.warn('⚠️ Header not found');
            return;
        }
        
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(handleHeaderShrink);
            ticking = true;
        }
    }
    
    // ============== 3. KHỞI CHẠY ==============
    function init() {
        console.log('🔧 Initializing navigation...');
        
        // Highlight tab ngay khi load
        highlightActiveTab();
        
        // Thêm scroll listener với throttle
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Kiểm tra header ngay lập tức
        handleHeaderShrink();
        
        console.log('✅ Navigation initialized successfully');
    }
    
    // ============== 4. ĐẢM BẢO CHẠY SAU KHI DOM READY ==============
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM đã sẵn sàng
        init();
    }
    
    // ============== 5. RELOAD KHI CHUYỂN TRANG (SPA-LIKE) ==============
    window.addEventListener('popstate', function() {
        highlightActiveTab();
    });
    
})();