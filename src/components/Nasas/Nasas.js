
import ChickenImg from '../../images/Big-chicken.svg';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {OutlineButton} from '../../Globalstyles';
import {Button} from '../../Globalstyles';
import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Imge,
    MealsContent,
    MealsContentTitle,
    MealsContentText,
    MealsContentItems,
    MealsContentList,
    MealsContentDetails,
    MealsContentIcon,
    MealsContentCategory,
    MealsContentBtn,
   
 
    MenuItemBtn,
    MenuLinkBtn,
    WorksCardText
} from './Nasas.styles';
import NRM5 from '../../images/NRM5.jpeg';
function Nasas() {
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
            <MealsContentTitle> </MealsContentTitle>
            <MealsContentTitle>JOVENES LLEGAN A LA NASA </MealsContentTitle>
           <MealsContent>
           <Imge src={NRM5}/>
                        <MealsContentText>
                        
                        Este número tan amplió de estudiantes elegidos en este programa nunca había ocurrido en ninguna región hasta este 2020, que pese a la pandemia por Covid-19, no fue impedimento para que la Nasa enfocara su atención en los sonorenses.

Bastó una computadora, una entrevista de 40 minutos y un desarrollo del porqué viajar al espacio, para que estos jóvenes talentosos quedaran inscritos en la agencia Espacial Mexicana y Aexa.

Siempre se ha dicho que el cielo es el límite, pero ahorita tenemos otro límite más grande que es el espacio” expresó Francisco Javier Trejo Silva, primer seleccionado en este proyecto.

Francisco Javier Trejo Silva que estudia el tercer semestre de Ingeniería Mecatrónica, fue el primero de los seleccionados quién tras sostener una serie de entrevistas enfocadas en sus conocimientos sobre la industria aeroespacial y proyectos futuros que pudieran realizarse en esta área de 
conocimiento recibió la carta de aceptación al programa.
                        </MealsContentText>
        

                        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/noticia">
                                        <Button primary>MAS NOTICIAS</Button>
                                    </MenuLinkBtn>
                                    
                                ): (
                                    <MenuLinkBtn to="/noticia">
                                        <Button primary bigFont onClick={closeMenu}>MAS NOTICIAS</Button>
                                    </MenuLinkBtn>
                                )
                                }
                                

                                
                            </MenuItemBtn>
                        </MealsContent>       
                  
            
        </div>
    )
}

export default Nasas;
