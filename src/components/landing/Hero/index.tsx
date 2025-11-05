import { motion, type Variants } from 'framer-motion'
import Translate from '@docusaurus/Translate'
import HeroSvg from './img/hero_main.svg'
import { MovingButton } from '../../magicui/moving-border'
import styles from './styles.module.css'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 100, delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 30 },
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={styles.hero_text}
        >
          <Translate id="homepage.hero.greet">你好，我是</Translate>{' '}
          <span className={styles.name}>EL233</span>
          <span className="ml-1">🥸</span>
        </motion.h1>
        
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="max-lg:px-4"
        >
          <Translate id="homepage.hero.text">欢迎来到我的小站😈</Translate>
        </motion.p>
        
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mt-4 flex gap-2"
        >
          <MovingButton
            borderRadius="1.25rem"
            className={`relative z-10 flex items-center rounded-2xl bg-background/70 backdrop-blur px-5 py-3 text-center text-sm font-medium ${styles['button-glow']}`}
          >
            <a 
              href="/blog/about/" 
              className="font-medium text-sm no-underline hover:no-underline"
            >
              <Translate id="homepage.hero.introduce">关于我</Translate>
            </a>
          </MovingButton>
        </motion.div>
      </div>
      
      <motion.div className={styles.background}>
        <HeroSvg />
        <div className={styles.circle} />
      </motion.div>
    </motion.div>
  )
}