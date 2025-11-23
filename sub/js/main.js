// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 关闭移动端菜单
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // 滚动时改变导航栏样式
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 动画观察器 - 当元素进入视口时添加动画类
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.about-card, .brewing-method, .bean-card, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
});

// 添加一些交互功能
function initCoffeeBlogFeatures() {
    // 为难度等级添加颜色类
    const difficultyLevels = document.querySelectorAll('.difficulty-level');
    
    difficultyLevels.forEach(level => {
        if (level.textContent === '简单') {
            level.classList.add('difficulty-easy');
        } else if (level.textContent === '中等') {
            level.classList.add('difficulty-medium');
        } else if (level.textContent === '困难') {
            level.classList.add('difficulty-hard');
        }
    });

    // 为口味标签添加随机动画效果
    const flavorTags = document.querySelectorAll('.flavor');
    
    flavorTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animationDelay = `${index * 0.1}s`;
        }, 500);
    });
}

// 页面加载完成后初始化功能
window.addEventListener('load', initCoffeeBlogFeatures);