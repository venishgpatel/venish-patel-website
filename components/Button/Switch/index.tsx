"use client"
import { Switch } from "@headlessui/react"
import { useState } from "react"

const SwitchThemeColor = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className='bg-primary w-14 h-7 inline-flex items-center rounded-full'
    >
      <span className={`cmp-switch__slider ${enabled ? 'translate-x-8' : 'translate-x-1'} inline-block w-5 h-5 bg-surface rounded-full transition duration-500`}></span>
    </Switch>
  )
}

export default SwitchThemeColor