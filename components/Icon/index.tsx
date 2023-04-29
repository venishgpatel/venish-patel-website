import getIcon from "./getIcon"
import { IconProps, PhospherIconComp } from "./types"

const Icon = ({ name, ...props}: IconProps): JSX.Element | null => {
  if (!name) return null
  const IconComponent: PhospherIconComp | null  = getIcon(name)
  if (!IconComponent) return null
  
  return (
    <IconComponent {...props} />
  )
}

export default Icon