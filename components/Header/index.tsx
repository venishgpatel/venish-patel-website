import SwitchThemeColor from "../Button/Switch"
import Navigation from "@/components/Navigation"

const Header = () => {
  return (
    <header className="cmp-header container flex mt-6">
      <div className="cmp-header__logo font-bold text-3xl">WANICE</div>
      <Navigation></Navigation>
      <SwitchThemeColor />
    </header>
  )
}
export default Header