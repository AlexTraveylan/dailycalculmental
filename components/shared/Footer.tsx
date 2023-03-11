export function Footer() {
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const formattedDate = `${month
    .toString()
    .padStart(2, '0')} / ${year.toString()}`

  return (
    <footer className="h-[100px] flex flex-col justify-center text-start">
      <div className="px-4">
        <h3>{formattedDate}</h3>
      </div>
      <div className=" flex flex-row items-center justify-between p-4">
        <h3>Version : 0.0.1</h3>
        <h3>Developed by Alex Traveylan</h3>
      </div>
    </footer>
  )
}
