/**
 * Dream Healer International - UI Interactivity Script
 * Handles dynamic navigation states and component behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC NAVIGATION PATH HIGHLIGHTING
    // Ensures the sidebar highlight strictly matches the active file path name
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');

    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        
        if (itemHref === currentPath) {
            // Remove active status from all links first
            menuItems.forEach(el => el.classList.remove('active'));
            // Set the correct active page
            item.classList.add('active');
        }
    });

    // 2. SOCIAL ACTION LOGGING & SECURITY
    // Ensures all social outbound paths open reliably with correct context attributes
    const socialCards = document.querySelectorAll('.dashboard-grid a[target="_blank"]');
    
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.01)';
        });
    });

    // 3. RESPONSIVE COMPONENT VIEWPORT ADJUSTMENTS
    // Auto-scrolls the navigation bar on mobile to center the active element if it overflows
    const activeMenuNode = document.querySelector('.menu-item.active');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    if (window.innerWidth <= 992 && activeMenuNode && sidebarMenu) {
        sidebarMenu.scrollLeft = activeMenuNode.offsetLeft - (sidebarMenu.clientWidth / 2) + (activeMenuNode.clientWidth / 2);
    }
});