import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    FooterSection,
    FoterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    NavLogo,
    MenuIcon,
    WorksCardContent,
    Imgw,
    WorksCard,
    FoterContainer,
    FooterLabel

} from './Footer.styles';
import logo from '../../images/logo.png';
import LN from '../../images/LN.png';
import LNC from '../../images/LNC.png';
import LR from '../../images/LR.jpg';
import LM from '../../images/LM.png';
import LH from '../../images/LH.jpg';
import LE from '../../images/LE.png';
import LD from '../../images/LH.jpg';
import LP from '../../images/LP.png';

const Footer = () => {
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
             <FoterSection>
             <FoterContainer>
            <WorksCardContent>

                
            <WorksCard>
                <NavLogo to="/">
                <Imgw src={logo}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>



                <WorksCard>
                <NavLogo to="noticia">
                <Imgw src={LN}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>


                 <WorksCard>
                <NavLogo to="profesor">
                <Imgw src={LNC}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>




                 <WorksCard>
                <NavLogo to="recipe">
                <Imgw src={LR}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>


                 <WorksCard>
                <NavLogo to="directiva">
                <Imgw src={LM}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>


                 <WorksCard>
                <NavLogo to="horario">
                <Imgw src={LH}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>


                 <WorksCard>
                <NavLogo to="entra">
                <Imgw src={LE}/>
                
                 </NavLogo>
                 <MenuIcon onClick={handleClick}>
                     {click ? <BiX/> : <BiMenu/>}
                 </MenuIcon>
                 </WorksCard>

              

                


                 
                 
                 </WorksCardContent>
                 </FoterContainer>
                 </FoterSection>

            <FooterSection>
                
                <FooterContainer>
                
                    <FooterNewsletter>
                    <FooterNewsletterTitle></FooterNewsletterTitle>
                        <FooterNewsletterTitle>UNIVERSIDAD AUTÓNOMA DE NEIVA</FooterNewsletterTitle>
                      
                        <FooterNewsletterText>CALLE 12 No. 22-41</FooterNewsletterText>
                       
                    </FooterNewsletter>   
                    <FooterLinkContainer>
                        
                    </FooterLinkContainer>
                    Cada día más cerca de tus sueños
                    
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}

export default Footer;
