import { SetStateAction } from 'react'

export function ToucheCalc({
  touche,
  setResult,
}: {
  touche: string
  setResult: (value: SetStateAction<string>) => void
}) {
  return (
    <div>
      <button
        onClick={() => setResult((curr) => curr.concat(touche))}
        className="w-10 h-10 bg-neutral-900"
      >
        {touche}
      </button>
    </div>
  )
}
