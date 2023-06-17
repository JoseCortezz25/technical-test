import userIcon from '../../assets/user.svg'
import cartIcon from '../../assets/cart.svg'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <input type="text" name="" id="" placeholder="Buscar..." />
      </nav>
      <nav>
        <button>
          <img src={userIcon} alt="" />
          {/* <img src={cartIcon} alt="" /> */}
        </button>
      </nav>
    </header>
  )
}

export { Header }