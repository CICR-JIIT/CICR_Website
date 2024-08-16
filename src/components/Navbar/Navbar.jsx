import cicr from '../../assets/cicr.png'
import './Navbar.css'


const  Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                    <a href="" className='logo-a'><img className='logo' src={cicr} alt="CICR Logo" /> </a>
                    <div className='links'>
                        <a className='linkItem' href="/" target="_blank">About Us</a>
                        <a className='linkItem' href="/Events" target="_blank">Events</a>
                        <a className='linkItem' href="/Gallery" target="_blank">Gallery</a>
                        <a className='linkItem' href="/Team" target="_blank">Team</a>
                        <a className='linkItem' href="/contact-us" target="_blank">Contact Us</a>
                    </div>
            </nav>
        </header>
    )
}

export default Navbar