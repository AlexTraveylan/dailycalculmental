import { Question } from '@/models/question'

export function QuestionContainer({
  question,
  result,
}: {
  question: Question
  result: string
}) {
  return (
    <div>
      <h1 className="text-7xl">Question n°{question.id}</h1>
      {/* Enoncé */}
      <p className="text-5xl text-center m-3">
        {question.description}
        {result && ` = ${result}`}
      </p>
    </div>
  )
}
