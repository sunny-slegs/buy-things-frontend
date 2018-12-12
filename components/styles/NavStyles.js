import styled from 'styled-components';

const NavStyles = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: center;
    font-size: 2rem;
    a {
        color: purple;
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        position: relative;
        text-transform: lowercase;
        text-decoration: none;
        font-weight: 900;
        font-size: 1emm;
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 10px;
            padding: 0 10px;
        }
        &:before {
            content: '';
            width: 2px;
            height: 100%;
            left: 0;
            position: absolute;
            background: purple;
            transform: skew(-20deg);
            top: 0;
            bottom: 0;
        }
        &:after {
            height: 2px;
            background: red;
            content: '';
            width: 0;
            position: absolute;
            transform: translateX()(-50%)
;        }
    }
    
`;

export default NavStyles;