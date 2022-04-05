import Link from 'next/link';
import classes from './main-header.module.css';
function Header() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            {/* the link which takes us to the HomePage */}
            <Link href="/">Next Events</Link>
        </div>
        <nav className={classes.navigation} >
            <ul className={classes.block} >
                <li  >
                    <Link href="/events" >All Events</Link>
                </li>
                <li className={classes.listItem}>
                    <Link href="/events" >All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default Header;