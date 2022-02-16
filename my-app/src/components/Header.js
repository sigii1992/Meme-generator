import logo from '../assets/trollface.png'

const Header = () => {
  return (
    <header className="nav-bar">
      <img src={logo} className="logo" />
      <h2>CREATE YOUR OWN MEME</h2>
    </header>
  )
}

export default Header;