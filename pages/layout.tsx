import { CircleBlurCenter, CircleTopLeft } from '@/components/shared/CircleBlur'
import { FollowerMouse } from '@/components/shared/FollowerMouse'
import { Footer } from '@/components/shared/Footer'
import { HeaderApp } from '@/components/shared/HeaderApp'
import styles from '@/styles/Home.module.css'

export default function RootLayout({
  nav,
  children,
}: {
  children: React.ReactNode
  nav: string
}) {
  return (
    <>
      <HeaderApp nav={nav} />
      <CircleTopLeft />
      <CircleBlurCenter />
      <FollowerMouse />
      <div className={styles.main_container}>{children}</div>
      <Footer />
    </>
  )
}
