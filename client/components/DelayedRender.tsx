import { useState, useEffect, ReactNode } from 'react'

function DelayedRender({
  children,
  delay,
}: {
  children: ReactNode
  delay: number
}) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return showContent ? <>{children}</> : null
}

export default DelayedRender
