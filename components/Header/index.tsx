import Link from 'next/link'
import SwitchColorTheme from '../Button/Switch'
import Navigation from '@/components/Navigation'

const Header = () => {
  return (
    <header className="cmp-header container flex mt-6">
      <div className='cmp-header__logo'>
        <Link href='/' className='link font-bold text-3xl'>
          WANICE
        </Link>
      </div>
      <Navigation></Navigation>
      <SwitchColorTheme />
    </header>
  )
}
export default Header