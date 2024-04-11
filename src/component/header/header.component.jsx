import {ReactComponent as Logo} from'../../assets/crown.svg'
import './header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to ="/">
           <Logo className='logo' />
        </Link>

        <Link className='options' to= '/shop'>
            SHOPS
        </Link>

        <Link className='options' to= '/shop'>
            CONTACTS
        </Link>
    </div>
)

export default Header