import {OutlineButton} from '../../Globalstyles';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    Imgq,
    Imgs,
    WorCardTi,
    WorksCardTitle,
    MenuItem,
    MenuIcon,
    MenuLink,
    WorksCardText

    
    
   
  



} from './Horarios.style';
import P1 from '../../images/foto.jpg';
import P2 from '../../images/foto2.jpg';
import P3 from '../../images/foto3.jpg';
import P12 from '../../images/foto12.jpg';
import LH from '../../images/LH.jpg';


const Horarios = () => {
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
        <WorksContent>
        <WorksContainer> 
            <WorCardTi> 
            
                
            <Imgs src={LH}/>
                 HORARIOS </WorCardTi>
            <Imgq src={P12}/> </WorksContainer>
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">PRIMERO(101) </MenuLink>
                                
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">PRIMERO (102)</MenuLink>
                               
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">PRIMERO (103)</MenuLink>
                                
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        


        <WorksContent>
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">SEGUNDO(201) </MenuLink>
                                
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">SEGUNDO (202)</MenuLink>
                               
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">SEGUNDO (203)</MenuLink>
                                
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        


        <WorksContent>
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">TERCERO (301) </MenuLink>
                                
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">TERCERO (302)</MenuLink>
                               
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">TERCERO (303)</MenuLink>
                                
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        


        <WorksContent>
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">CUARTO(401) </MenuLink>
                                
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">CUARTO (402)</MenuLink>
                               
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">CUARTO(403)</MenuLink>
                                
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        

        <WorksContent>
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">QUINTO(501) </MenuLink>
                                
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">QUINTO (502)</MenuLink>
                               
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="hoja">QUINTO (503)</MenuLink>
                                
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        
       
        
                
    </div>
    );
}

export default Horarios;
