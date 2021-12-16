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
    WorksCardTitle,
    MenuItemBtn,
    MenuLinkBtn,
    WorksCardText

    
   
  



} from './Maestros.style';
import P1 from '../../images/p1.jpg';
import P2 from '../../images/p2.jpg';
import P3 from '../../images/p3.jpg';
import P4 from '../../images/p4.jpg';
import P5 from '../../images/p5.jpg';
import P6 from '../../images/p6.jpg';
import P7 from '../../images/p7.jpg';
import P8 from '../../images/p8.jpg';
import P9 from '../../images/foto9.jpg';
import P10 from '../../images/foto10.jpg';
import P11 from '../../images/foto11.jpg';
import P12 from '../../images/foto12.jpg';

import LN from '../../images/LN.png';
const Maestros = () => {
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
        <RecipeTitle>PROFESORES</RecipeTitle>
            <WorksContainer>
            
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={P1}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle>JHON SOLEDAD</WorksCardTitle>
                        <WorksCardText>
                            Maestro de Fisica.
                            tel:3208628163
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={P2}/>  
                        <WorksCardTitle>SARA ROJAS</WorksCardTitle>
                        <WorksCardText>
                           maestra de quimica.  teL 3208659745
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={P3}/> 
                        <WorksCardTitle>ERIKA GONZALEZ</WorksCardTitle>
                        <WorksCardText>
                           maestra de artes tel:315487526.
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={P4}/> 
                        <WorksCardTitle>MARIO TORREZ</WorksCardTitle>
                        <WorksCardText>
                           maestro de matematicas.
                        </WorksCardText>
                    </WorksCard>
                </WorksCardContent>
            </WorksContainer>
        <WorksContainer>
            
                <WorksCardContent>
                    <WorksCard>
                        <Imge src={P5}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle>SANDRA CUELLAR</WorksCardTitle>
                        <WorksCardText>
                            Maestra de ingles.
                            tel:3208628163
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={P6}/>  
                        <WorksCardTitle>SANTIAGO ROJAS</WorksCardTitle>
                        <WorksCardText>
                           maestro de sociales. 
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={P7}/> 
                        <WorksCardTitle>JUAN PEREZ</WorksCardTitle>
                        <WorksCardText>
                           maestro de biologia.
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={P8}/> 
                        <WorksCardTitle>RODRIGO SANCHEZ</WorksCardTitle>
                        <WorksCardText>
                           maestro de etica.
                        </WorksCardText>
                    </WorksCard>
                </WorksCardContent>
            </WorksContainer>
        </WorksContent>
        <WorksContent>
        <WorksContent>
        </WorksContent>
        </WorksContent>
        <WorksContent>
        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary>VOLVER</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary bigFont onClick={closeMenu}>VOLVER</Button>
                                    </MenuLinkBtn>
                                )
                                }

                                
                            </MenuItemBtn>
                            </WorksContent>
    </div>
    );
}

export default Maestros;
