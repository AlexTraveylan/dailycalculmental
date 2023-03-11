import { Score, Session } from '@/models/session'
import { fakeQuestions } from './fakequestions'

const fakeScores: Score[] = [
  {
    id: 1,
    isSucces: false,
    created_at: new Date().getTime(),
    time: 10000,
  },
  {
    id: 2,
    isSucces: false,
    created_at: new Date().getTime(),
    time: 10000,
  },
  {
    id: 3,
    isSucces: false,
    created_at: new Date().getTime(),
    time: 10000,
  },
  {
    id: 4,
    isSucces: false,
    created_at: new Date().getTime(),
    time: 10000,
  },
  {
    id: 5,
    isSucces: false,
    created_at: new Date().getTime(),
    time: 10000,
  },
]

export const fakeSession: Session = {
  session_id: 'abc123',
  current_question: 1,
  score: fakeScores,
  questions: fakeQuestions,
}
