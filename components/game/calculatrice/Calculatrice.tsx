import { touches } from '@/data/touches'
import { SetStateAction } from 'react'
import { ToucheCalc } from './ToucheCalc'

export function Calculatrice({
  setResult,
}: {
  setResult: (value: SetStateAction<string>) => void
}) {
  return (
    <div className="w-72 h-72 bg-blue-500">
      <h1 className="text-center my-4">calculatrice</h1>
      <div className="my-3 w-4/5 flex flex-row">
        <div className="flex flex-row flex-wrap justify-center gap-3">
          {touches.map((content) => (
            <ToucheCalc
              setResult={setResult}
              key={`calctouche${content}`}
              touche={content}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <ToucheCalc setResult={setResult} touche="<" />
          <ToucheCalc setResult={setResult} touche="Eff" />
          <ToucheCalc setResult={setResult} touche=">" />
          <ToucheCalc setResult={setResult} touche="Ok" />
        </div>
      </div>
    </div>
  )
}
