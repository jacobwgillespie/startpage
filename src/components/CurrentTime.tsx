import {format} from 'date-fns'
import {useCallback, useEffect, useState} from 'react'

export function CurrentTime() {
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
    <>
      <h1 className="text-8xl font-black">{currentTime ? currentTime : <>&nbsp;</>}</h1>
      <h2 className="mt-2 text-xl font-black">{currentDay ? currentDay : <>&nbsp;</>}</h2>
    </>
  )
}
