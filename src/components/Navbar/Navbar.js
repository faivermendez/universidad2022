import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import logo2 from '../../images/logo2.png';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    Img,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
            
                <Nav>
                    <NavbarContainer>
                        <img src={logo2} width="80px" />
                        <NavLogo to="/">
                       
                       UNIVERSIDAD <br></br>
                       AUTÓNOMA DE NEIVA
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                        

                        <Menu onClick={handleClick} click={click}>
                            
                            
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/profesor">COMUNIDAD</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/horario">HORARIOS</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/recipe">REGISTRAR</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/entra">
                                        <Button primary>ENTRAR</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/entra">
                                        <Button primary bigFont onClick={closeMenu}>ENTRAR</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>

                </Nav>
            
        </div>
    )
}

export default Navbar;
