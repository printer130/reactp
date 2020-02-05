import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const elementCaptured = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]
          // console.log(isIntersecting)
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(elementCaptured.current)
      })
  }, [elementCaptured])

  return [show, elementCaptured]
}
