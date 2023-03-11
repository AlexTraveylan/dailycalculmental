import { fakeSession } from '@/data/fakeSession'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    if (fakeSession.current_question < fakeSession.questions.length + 1) {
      fakeSession.score[fakeSession.current_question - 1].created_at =
        new Date().getTime()
      res
        .status(200)
        .json(fakeSession.questions[fakeSession.current_question++ - 1])
    } else {
      console.log(fakeSession)
      res
        .status(404)
        .json({ id: -1, type: 'result', description: 'result', response: 0 })
    }
  } else if (req.method == 'POST') {
    const { reponse } = req.body
    if (
      reponse ===
      fakeSession.questions[fakeSession.current_question - 2].response
    ) {
      fakeSession.score[fakeSession.current_question - 2].isSucces = true
      fakeSession.score[fakeSession.current_question - 2].time = Math.min(
        10000,
        new Date().getTime() -
          fakeSession.score[fakeSession.current_question - 2].created_at
      )
      res.status(200).json({ message: 'Bonne réponse' })
    } else {
      res.status(200).json({ message: 'Mauvaise réponse' })
    }
  }
}
