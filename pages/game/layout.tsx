import { Footer } from '@/components/shared/Footer'
import styles from '@/styles/Home.module.css'

export function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={styles.main_container}>{children}</div>
      <Footer />
    </div>
  )
}
