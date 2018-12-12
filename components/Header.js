import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.a`
    color: purple;
    font-size: 2rem;
    border: 2px solid black;
    padding: 5px;
`;

const Header = () => (
    <div>
        <div>
            <Logo>Buy Things</Logo>
        </div>
        <div>
            <p>Search</p>
        </div>
        <div>
            <p>Cart</p>
        </div>
        <Nav />
    </div>  
);

export default Header;