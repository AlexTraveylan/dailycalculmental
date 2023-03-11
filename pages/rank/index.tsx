import { Ranking } from '@/components/home/ranking'
import RootLayout from '../layout'

export default function Index() {
  return (
    <RootLayout nav="/">
      <div className="flex flex-row justify-around">
        <Ranking />
      </div>
    </RootLayout>
  )
}
