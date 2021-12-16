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
    Imge,
    Imgw,
    Imgr,
    Imgse,
    WorCardTitle,
    WorksCardTitle,
    MenuItem,
    MenuIcon,
    MenuLink,
    WorksCardText

   
} from './Profesores.styles';
import PL1 from '../../images/PL1.jpg';
import PL2 from '../../images/PL2.jpg';
import PL3 from '../../images/PL3.jpg';
import P12 from '../../images/foto12.jpg';
import LNC from '../../images/LNC.png';
import LD from '../../images/LD.png';
import LP from '../../images/LP.png';
import LM from '../../images/LM.png';


const Profesores = () => {
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
            <WorCardTitle> <Imgw src={LNC}/> NUESTRA COMUNIDAD </WorCardTitle>
            <Imgr src={P12}/> </WorksContainer>
        
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="directiva"><Imge src={PL1}/> </MenuLink>
                                <WorksCardTitle><Imgse src={LD}/> DIRECTIVOS</WorksCardTitle>
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="maestro"><Imge src={PL2}/> </MenuLink>
                                <WorksCardTitle><Imgse src={LM}/> PROFESORES</WorksCardTitle>
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="order"><Imge src={PL3}/> </MenuLink>
                                <WorksCardTitle><Imgse src={LP}/> ESTUDIANTES</WorksCardTitle>
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        
       
        
                
    </div>
    );
}

export default Profesores;
