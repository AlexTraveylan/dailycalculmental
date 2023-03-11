import { fakeRanking } from '@/data/fakeranking'

export function Ranking() {
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl mb-3">Classement</h1>
      <ul className="text-center">
        {fakeRanking.map(({ id, name }) => {
          return (
            <li className="mb-1" key={id}>
              #{id} : {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
