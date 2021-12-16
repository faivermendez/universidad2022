import {
    WelcomeContainer, 
    WelcomeContent,
    WelcomeImg, 
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    WorksContainer,
    WorCardTitle,
    WorksContent,
    Imgw,
    Img
} from './Welcome.styles';
import logo1 from '../../images/logo1.png';
import TI from '../../images/TI.jpg';
import P12 from '../../images/foto12.jpg';
const Welcome = () => {
    return (
        <div>
            
            <WelcomeContainer>

            
                <WelcomeContent>
                    <WelcomeImg>
                        <Img src={TI} alt="TI"/>
                    </WelcomeImg>
                    <WelcomeContentText>
                    <Imgw src={logo1}/> 
                        <WelcomeContentTitle>γεια σας</WelcomeContentTitle>
                        <WelcomeText>
                        bienvenidos, ante  la Asociación Nacional de Escuelas Particulares
                         nos alegra darle la bienvenida a nuestra alma mater y con ella asegurarle que juntos cumpliremos 
                         todos tus suseños de lograr ser la mejor version de ti mismo.
                        </WelcomeText>
                        <WelcomeText>
                          
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>
                

            </WelcomeContainer>
        
        </div>
    )
}

export default Welcome;
