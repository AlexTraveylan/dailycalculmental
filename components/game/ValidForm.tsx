import Link from 'next/link'
import { ButtonApp } from '../shared/ButtonApp'

export function ValidForm({
  reset,
  function_for_next_question,
}: {
  reset: () => void
  function_for_next_question: () => void
}) {
  function handleClick() {
    reset()
    function_for_next_question()
  }

  return (
    <div className="flex flex-row gap-5 m-3">
      <Link href="/">
        <ButtonApp title="Quitter" />
      </Link>

      <div onClick={() => handleClick()}>
        <ButtonApp title="Suivante" />
      </div>
    </div>
  )
}
