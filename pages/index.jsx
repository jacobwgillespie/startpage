import Head from 'next/head'
import {useCallback, useEffect, useState} from 'react'
import {format} from 'date-fns'

const links = [
  {text: 'GitHub', url: 'https://github.com'},
  {text: 'Feedbin', url: 'https://feedbin.com/'},
  {text: 'AWS', url: 'http://console.aws.amazon.com/console/home'},
]

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
          <div className="grid grid-flow-col gap-8 mt-16 font-semibold">
            {links.map((link) => (
              <a href={link.url} key={link.text}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
