import { Begin } from '@/components/home/Begin'
import RootLayout from './layout'

export default function Index() {
  return (
    <RootLayout nav="rank">
      <div className="flex flex-row justify-around">
        <Begin />
      </div>
    </RootLayout>
  )
}
