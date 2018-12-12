import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/items">
            <a>For Sale</a>
        </Link>
        <Link href="/Register">
            <a>Register</a>
        </Link>
        <Link href="/orders">
            <a>Orders</a>
        </Link>
        <Link href="/account">
            <a>Account</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </NavStyles>
)

export default Nav;