import Link from 'next/link'
import { ButtonApp } from '../shared/ButtonApp'

export function Begin() {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-7xl">Daily calcul mental</h1>
        <Link href="game">
          <ButtonApp title="Commencer" />
        </Link>
      </div>
    </div>
  )
}
