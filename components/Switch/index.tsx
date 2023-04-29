"use client"
import Icon from "../Icon"

const SwitchThemeColor = () => {

  return (
    <div className="cmp-switch">
      <input className="cmp-switch__input peer/switch" type="checkbox" id="switchThemeColor" />
      <label className="cmp-swith__label flex w-16 h-8 items-center justify-between cursor-pointer bg-primary rounded-xl" htmlFor="switchThemeColor">  
        <Icon name="moon" weight="fill" className="peer-checked/switch:opacity-0" />
        <Icon name="sun" weight="fill" />
        <span className="cmp-switch__slider hidden w-6 h-6 bg-surface rounded-full"></span>
      </label>
    </div>
  )
}

export default SwitchThemeColor