import {format} from 'date-fns'
import {useCallback, useEffect, useState} from 'react'

export function CurrentTime() {
  const [currentDay, setCurrentDay] = useState(() => format(new Date(), 'd LLLL'))
  const [currentTime, setCurrentTime] = useState(() => format(new Date(), 'HH:mm'))

  const update = useCallback(() => {
    setCurrentDay(format(new Date(), 'd LLLL'))
    setCurrentTime(format(new Date(), 'HH:mm'))
  }, [])

  useEffect(() => {
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h1 className="text-8xl font-black" suppressHydrationWarning>{currentTime}</h1>
      <h2 className="mt-2 text-xl font-black" suppressHydrationWarning>{currentDay}</h2>
    </>
  )
}
