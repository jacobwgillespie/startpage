import Head from 'next/head'
import {useCallback, useEffect, useState} from 'react'

const links = [
  {text: 'Gmail', url: 'https://mail.google.com', color: 'text-red-600'},
  {text: 'GitHub', url: 'https://github.com', color: 'text-black'},
  {text: 'Feedbin', url: 'https://feedbin.com/', color: 'text-green-600'},
  {text: 'Twitch', url: 'https://twitch.tv', color: 'text-purple-600'},
  {text: 'AWS', url: 'http://console.aws.amazon.com/console/home', color: 'text-orange-600'},
]

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const updateTime = useCallback(() => {
    const now = new Date()
    setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
  }, [])

  useEffect(() => {
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono">
      <Head>
        <title>New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center -mt-16 space-y-12">
          <h1 className="font-black text-8xl">{currentTime}</h1>
          <div className="grid grid-flow-col gap-8 font-semibold">
            {links.map((link) => (
              <a href={link.url} className={link.color}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
