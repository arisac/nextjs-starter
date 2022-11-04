import Link from 'next/link'

export const SkipLink = ({ href = '#main', text = 'skip' }) => {
  return (
    <Link
      href={href}
      className="fixed top-0 left-0 right-0 z-[1] mx-3 translate-y-[-100%] rounded-xl bg-slate-200 p-2 text-center transition-all duration-300 focus:translate-y-[50%] dark:bg-slate-700 md:mx-6"
    >
      {text}
    </Link>
  )
}
