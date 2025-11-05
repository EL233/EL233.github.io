import React, { JSX } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '../components/landing/Hero';
import Particles from '../components/magicui/particles';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const description = (siteConfig.customFields?.description as string) ?? '';
  
  return (
    <Layout title="EL233" description={description}>
      <div className="relative">
        {/* 粒子效果 - 固定定位覆盖整个视口，但在页脚下方 */}
        <Particles
          className="fixed inset-0 pointer-events-none"
          quantity={120}
          ease={80}
          color="#a7b3ff"
          refresh
        />
        
        <main className="relative min-h-screen">
          <div className="relative min-h-[calc(100vh-60px)]">
            <Hero />
            <div
              className="absolute inset-0 -z-50 bg-grid-slate-50 
                         [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.3))] 
                         dark:bg-grid-slate-700/25 
                         dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),
                         rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: '10px 10px' }}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}