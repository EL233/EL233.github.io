import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  const {navbar} = useThemeConfig();
  const location = useLocation();
  
  // 检测当前页面类型
  const isHomePage = location.pathname === '/';
  const isTagsPage = location.pathname.includes('/tags');
  const isBlogPage = location.pathname.includes('/blog');
  
  // 确保导航项在移动端正确显示
  const enhancedNavbar = {
    ...navbar,
    items: navbar.items.map(item => ({
      ...item,
      // 确保所有导航项在移动端可见
      className: `${item.className || ''} navbar-sidebar__item`,
    }))
  };

  return (
    <>
      <style>
        {`
          /* 确保移动端侧边栏菜单项可见 */
          @media screen and (max-width: 996px) {
            .navbar-sidebar {
              display: flex !important;
              flex-direction: column !important;
              padding-top: 4rem !important;
            }
            
            .navbar-sidebar .navbar-sidebar__item {
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: static !important;
              transform: none !important;
            }
            
            .navbar-sidebar .menu__list {
              display: flex !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
              padding: 1rem !important;
              margin: 0 !important;
            }
            
            .navbar-sidebar .menu__link {
              color: var(--ifm-font-color-base) !important;
              padding: 1rem !important;
              border-radius: 0.5rem !important;
              font-size: 1.1rem !important;
              font-weight: 500 !important;
              display: block !important;
              text-align: left !important;
              transition: all 0.2s ease !important;
            }
            
            .navbar-sidebar .menu__link:hover {
              background: var(--ifm-color-emphasis-200) !important;
              text-decoration: none !important;
            }
            
            .navbar-sidebar .menu__link--active {
              background: var(--ifm-color-primary-lightest) !important;
              color: var(--ifm-color-primary-dark) !important;
              font-weight: 600 !important;
            }
            
            /* 确保头像和logo不会重叠 */
            .navbar-sidebar .navbar__logo {
              position: absolute !important;
              top: 1rem !important;
              left: 1rem !important;
              z-index: 10002 !important;
              max-height: 3rem !important;
            }
            
            .navbar-sidebar__close {
              position: absolute !important;
              top: 1rem !important;
              right: 1rem !important;
              z-index: 10002 !important;
            }
            
            /* 确保明暗模式图标和头像在移动端侧边栏横向排列 */
            .navbar-sidebar__header {
              display: flex !important;
              align-items: center !important;
              justify-content: space-between !important;
              padding: 1rem !important;
              border-bottom: 1px solid var(--ifm-toc-border-color) !important;
            }
            
            .navbar-sidebar__header .navbar-sidebar__close {
              position: static !important;
              order: 3 !important;
            }
            
            .navbar-sidebar__header .navbar__logo {
              position: static !important;
              order: 1 !important;
              margin: 0 !important;
            }
            
            .navbar-sidebar__header .navbar-sidebar__header-right {
              display: flex !important;
              align-items: center !important;
              gap: 0.5rem !important;
              order: 2 !important;
            }
            
            /* 明暗模式图标样式 */
            .navbar-sidebar__header button[aria-label*="mode"],
            .navbar-sidebar__header button[title*="mode"] {
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: 2rem !important;
              height: 2rem !important;
              padding: 0.25rem !important;
              margin: 0 !important;
            }
            
            /* 头像样式 */
            .navbar-sidebar__header .navbar__logo img {
              width: 2rem !important;
              height: 2rem !important;
              object-fit: contain !important;
            }
            
            /* 首页移除backto按键 */
            ${isHomePage ? `
              .navbar-sidebar [data-sidebar-home] .navbar-sidebar__back,
              .navbar-sidebar [data-sidebar-home] .navbar-sidebar__close + * {
                display: none !important;
              }
            ` : ''}
            
            /* Tags页面直接显示主菜单 */
            ${isTagsPage ? `
              .navbar-sidebar .navbar-sidebar__item.menu--show-secondary {
                display: none !important;
              }
              .navbar-sidebar .navbar-sidebar__item.menu--show-primary {
                display: flex !important;
                flex-direction: column !important;
              }
            ` : ''}
            
            /* Blog页面内容区域变暗 */
            ${isBlogPage ? `
              .navbar-sidebar--show .main-wrapper {
                filter: brightness(0.7) !important;
                transition: filter 0.3s ease !important;
              }
            ` : ''}
          }
        `}
      </style>
      <Navbar {...props} />
    </>
  );
}