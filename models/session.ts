import { Question } from './question'

export class Score {
  id!: number
  isSucces!: boolean
  created_at!: number
  time!: number
}

export class Session {
  session_id!: string
  current_question!: number
  score!: Score[]
  questions!: Question[]
}
