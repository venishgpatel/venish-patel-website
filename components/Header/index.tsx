import SwitchThemeColor from "@/components/Switch"
import Navigation from "@/components/Navigation"

const Header = () => {
  return (
    <header className="cmp-header flex">
      <div className="logo">WANICE</div>
      <Navigation></Navigation>
      <SwitchThemeColor />
    </header>
  )
}
export default Header