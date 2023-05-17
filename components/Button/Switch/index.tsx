"use client"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const SwitchColorTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDarkTheme = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <Switch
      checked={isDarkTheme}
      onChange={() => resolvedTheme === 'dark'? setTheme('light'): setTheme('dark')}
      className='bg-primary w-14 h-7 inline-flex items-center rounded-full'
    >
      <span className={`cmp-switch__slider ${isDarkTheme ? 'translate-x-8' : 'translate-x-1'} inline-block w-5 h-5 bg-surface rounded-full transition duration-500`}></span>
    </Switch>
  )
}

export default SwitchColorTheme