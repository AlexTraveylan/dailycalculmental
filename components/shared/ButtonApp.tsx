export function ButtonApp({ title }: { title: string }) {
  return (
    <>
      <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow-indigo-500/50 transition ease-in-out duration-75 hover:bg-indigo-400 hover:scale-110 active:bg-indigo-600 active:shadow-inner">
        {title}
      </button>
    </>
  )
}
