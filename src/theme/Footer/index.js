import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import GithubSvg from '@site/src/img/github-142-svgrepo-com.svg';
import BilibiliSvg from '@site/src/img/bilibili-svgrepo-com.svg';
import NeteaseSvg from '@site/src/img/netease-cloud-music-svgrepo-com.svg';
import EmailSvg from '@site/src/img/email-svgrepo-com.svg';

function Footer() {
  const {footer} = useThemeConfig();
  
  if (!footer) {
    return null;
  }

  const {copyright, style} = footer;

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container">
        {/* 主要内容区：Social 图标 */}
        <div className={styles.footerContent}>
          <div className={styles.customSocial}>
            <div className={styles.socialTitle}>Social</div>
            <div className={styles.socialIcons}>
              <a 
                href="https://github.com/EL233" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="GitHub"
                title="Visit my GitHub"
              >
                <GithubSvg className={styles.socialIcon} />
              </a>
              <a 
                href="https://music.163.com/#/user/home?id=422348875" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="Bilibili"
                title="Visit my Bilibili"
              >
                <BilibiliSvg className={styles.socialIcon} />
              </a>
              <a 
                href="https://space.bilibili.com/38198624" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="NetEase Music"
                title="Visit my NetEase Music"
              >
                <NeteaseSvg className={styles.socialIcon} />
              </a>
              <a 
                href="mailto:p7429189@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.iconLink}
                aria-label="Email"
                title="Send me an Email"
              >
                <EmailSvg className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright 区域：最底部居中 */}
        {copyright && (
          <div className={styles.footerBottom}>
            <div
              className={styles.copyright}
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />
          </div>
        )}
      </div>
    </footer>
  );
}

export default React.memo(Footer);