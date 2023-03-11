import { Question } from '@/models/question'

export const fakeQuestions: Question[] = [
  {
    id: 1,
    type: 'calcul',
    description: '5+7',
    response: 12,
  },
  {
    id: 2,
    type: 'calcul',
    description: '13-5',
    response: 8,
  },
  {
    id: 3,
    type: 'calcul',
    description: '12+13',
    response: 25,
  },
  {
    id: 4,
    type: 'calcul',
    description: '7 x 5',
    response: 35,
  },
  {
    id: 5,
    type: 'calcul',
    description: '35 / 7',
    response: 5,
  },
]
