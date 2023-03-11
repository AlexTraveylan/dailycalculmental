import { Calculatrice } from '@/components/game/calculatrice/Calculatrice'
import { QuestionContainer } from '@/components/game/QuestionContainer'
import { TimeLine } from '@/components/game/TimeLine'
import { ValidForm } from '@/components/game/ValidForm'
import { Question } from '@/models/question'
import { useEffect, useState } from 'react'
import { GameLayout } from './layout'

export default function Game() {
  const [pourcent, setPourcent] = useState(100)
  const [timeLeft, setTimeLeft] = useState(10)
  const [currentInterval, setCurrentInterval] = useState<Array<NodeJS.Timer>>(
    []
  )
  const [result, setResult] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: 0,
    description: '',
    response: 0,
    type: '',
  })

  async function getQuestion() {
    try {
      const response = await fetch('api/game', { method: 'GET' })
      const question: Question = await response.json()
      setCurrentQuestion(question)
    } catch (error) {
      console.error(error)
    }
  }

  function startCountdown() {
    let remainingSteps = 10
    let remainingTime = 10

    const countdownInterval = setInterval(() => {
      remainingSteps--
      remainingTime--

      const remainingPercentage = (remainingSteps / 10) * 100
      setPourcent(remainingPercentage)
      setTimeLeft(remainingTime)

      if (remainingSteps === 0) {
        clearInterval(countdownInterval)
      }
    }, 1000)

    return countdownInterval
  }

  function resetAllInterval() {
    currentInterval.forEach((intervalId) => clearInterval(intervalId))
    setCurrentInterval([])
    setPourcent(100)
    setTimeLeft(10)
    const intervalId = startCountdown()
    setCurrentInterval((prevIntervalIds) => [...prevIntervalIds, intervalId])
    setResult('')
  }

  useEffect(() => {
    getQuestion()
    const intervalId = startCountdown()
    setCurrentInterval((prevIntervalIds) => [...prevIntervalIds, intervalId])
  }, [])

  return (
    <GameLayout>
      <div className="w-4/5 ml-[10%] bg-red-700">
        {currentQuestion ? (
          <div className="flex flex-col content-center items-center bg-red-900">
            <TimeLine pourcent={pourcent} timeLeft={timeLeft} />
            <QuestionContainer question={currentQuestion} result={result} />
            <Calculatrice setResult={setResult} />
            <ValidForm
              function_for_next_question={getQuestion}
              reset={resetAllInterval}
            />
          </div>
        ) : (
          <div>Erreur</div>
        )}
      </div>
    </GameLayout>
  )
}
