import { Moon, Sun } from "@phosphor-icons/react"
import { PhospherIconComp } from "./types"

const getIcon = (iconName: string): PhospherIconComp | null => {
  switch (iconName) {
    case "moon":
      return Moon
    case "sun":
      return Sun
    default:
      return null
  }
}

export default getIcon