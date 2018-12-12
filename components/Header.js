import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
    color: purple;
    font-size: 2rem;
    padding: 5px;
    a {
    border: 2px solid black;
    padding: 0.5rem 1rem
    }
`;

const Header = () => (
    <div>
        <div>
            <Logo href='/'>
                <a>Buy Things</a>
            </Logo>
            <Nav />
        </div>
        <div>
            <p>Search</p>
        </div>
        <div>
            <p>Cart</p>
        </div>
    </div>  
);

export default Header;