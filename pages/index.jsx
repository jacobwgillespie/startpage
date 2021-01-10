import Head from 'next/head'
import {useCallback, useEffect, useState} from 'react'
import {format} from 'date-fns'
import cx from 'classnames'

const Link = ({className, ...rest}) => <a className={cx('inline-block hover:text-black', className)} {...rest} />

export default function Home() {
  const [currentDay, setCurrentDay] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  const update = useCallback(() => {
    setCurrentDay(format(new Date(), 'd LLLL'))
    setCurrentTime(format(new Date(), 'HH:mm'))
  }, [])

  useEffect(() => {
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono">
      <Head>
        <title>New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center -mt-32">
          <h1 className="font-black text-8xl">{currentTime ? currentTime : <>&nbsp;</>}</h1>
          <h2 className="mt-2 text-xl font-black">{currentDay ? currentDay : <>&nbsp;</>}</h2>
          <div className="grid grid-cols-3 gap-8 mt-16 font-semibold text-center text-gray-300">
            <Link href="https://github.com">GitHub</Link>
            <Link href="https://feedbin.com/">Feedbin</Link>
            <Link href="https://www.theguardian.com/uk">Guardian</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
