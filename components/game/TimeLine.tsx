export function TimeLine({
  pourcent,
  timeLeft,
}: {
  pourcent: number
  timeLeft: number
}) {
  return (
    <div className="w-3/5 bg-gray-400 h-10 relative my-3 rounded-3xl shadow-inner shadow shadow-gray-900 text-center">
      <div
        className="h-10 bg-blue-400 absolute rounded-3xl shadow shadow-gray-900 transition-all duration-1000 ease-linear"
        style={{ width: `${pourcent}%` }}
      ></div>
      <div className="absolute w-full h-10 translate-y-2 text-fuchsia-700 font-semibold">
        {timeLeft}s
      </div>
    </div>
  )
}
