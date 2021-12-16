
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
} from './Regresos.style';
import NR1 from '../../images/NR1.jpg';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';
function Regresos() {
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
            <MealsContentTitle>REGRESO A CLASES </MealsContentTitle>
           <MealsContent>
           <Imge src={NR1}/>
                        <MealsContentText>
                        
                        Todo es cuestión de que el comité de salud actualice y cuando diga qué hay condiciones para regresar a clases les avisaremos. Nuestros niños y niñas es lo más preciado que tenemos y será lo último que va a regresar a la nueva normalidad”, indicó
Ante el panorama que muestra la pandemia del covid-19 podría ser el regreso a clases presenciales hasta enero del 2021, de lo que se trata es de reducir al máximo los riesgos para la población.

El Secretario de Educación en Tamaulipas destacó que por el momento no hay planes para el regreso y en caso de algún cambio se dará a conocer en forma oportuna

“Estamos viendo si se regresa con grupos quebrados, con horarios diferidos eso dependerá de las condiciones del covid”, indicó
Aseguró que es mínimo el rezago de los alumnos que no tienen acceso a internet y que no cuentan con un dispositivo para hacerlo “hay algunas zonas de alta marginación donde se presentan estos rezagos”.

En este sentido destacó que será un seis por ciento de la matrícula, por lo que se están buscando alternativas porque no desean que ningún alumno se retrase.

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

export default Regresos;
