import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorsCard,
    WorksIconContainer,
    Imges,
    Img,
    Imgw,
    WorCardTitle,
    NavLogo,
    MenuIcon,

    WorksCardTitle,
    WorksCardText
} from './works.styles';
import P1 from '../../images/org.jpg';
import LO from '../../images/LO.jpg';
import LC from '../../images/LC.jpg';
import P12 from '../../images/foto12.jpg';
const Works = () => {
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
        <div>SA
            <WorksContent>
            <WorksContainer> 
            <WorCardTitle> 
            
                
            <Imgw src={LC}/>
                 CONOCENOS </WorCardTitle>
            <Img src={P12}/> </WorksContainer>
                <WorksContainer>
                
                    <WorksCardContent>
                        <WorksCard>
                
                            <WorksCardTitle>MISION</WorksCardTitle>
                            <WorksCardText>
                            NUEVA GRANADA tiene como Misión, formar mediante un modelo basado en competencias,
                             a Profesionales Técnicos y Profesionales Técnicos Bachiller, capacita
                             y evalúa con fines de certificación de competencias laborales y servicios 
                            tecnológicos para atender las necesidades del sector productivo del país..
                            </WorksCardText>
                        </WorksCard>

                        <WorsCard>
                        <NavLogo to="/organigrama">
                <Imges src={LO}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                            <WorksCardTitle>ORGANIGRAMA</WorksCardTitle>
                            <WorksCardText>
                
                            </WorksCardText>
                        </WorsCard>
                        
                        <WorksCard>
                           
                            <WorksCardTitle>VISION</WorksCardTitle>
                            <WorksCardText>
                            una Institución líder en la  formación de Profesionales Técnicos y Profesionales
                             Técnicos  Bachiller en México, que cursan programas reconocidos, basados en el 
                             Modelo Dual y que egresan con competencias laborales y valores sociales que les 
                             permiten ser competitivos en el mercado laboral y continuar estudios superiores.. 
                            </WorksCardText>
                        </WorksCard>
                        
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            
        </div>
    )
}

export default Works;
