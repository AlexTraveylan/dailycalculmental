import Image from 'next/image'
import Link from 'next/link'

export function HeaderApp({ nav }: { nav: string }) {
  return (
    <header className="fixed h-[100px] w-screen flex flex-row justify-between items-center">
      <div className="ml-3">
        <Image width={45} height={30} src="thirteen.svg" alt="logo de versel" />
      </div>
      <Link href={nav}>
        <div className="mr-3">
          {!(nav === 'rank') ? (
            <svg
              className="text-rose-700 hover:text-rose-500 hover:scale-105"
              width="56"
              height="56"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m17.25 6.75-10.5 10.5"></path>
              <path d="m6.75 6.75 10.5 10.5"></path>
            </svg>
          ) : (
            <svg
              className="text-purple-500 hover:text-purple-400 hover:scale-105"
              width="56"
              height="56"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 6.75H7.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H15"></path>
              <path d="M14 8.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Z"></path>
              <path d="M9.75 12.25h4.5"></path>
              <path d="M9.75 15.25h4.5"></path>
            </svg>
          )}
        </div>
      </Link>
    </header>
  )
}
