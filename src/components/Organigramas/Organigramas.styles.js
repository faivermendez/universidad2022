import styled from 'styled-components';
import {BiCheck} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {Container} from '../../Globalstyles';

export const MealsContainer = styled.section`
display: flex;
align-items: center;
`;

export const MealsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
background-color: #fff;
overflow: hidden;

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}

@media only screen and (min-width:1370px){
    align-items: center;
}
`;

export const MealsImage = styled.div`
width: 100%;
height: 100%;

@media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
}
`;

export const Img = styled.img`
@media only screen and (min-width:1800px){
    width: 900px;
}
@media only screen and (max-width:1400px){
    width: 650px;
}

@media only screen and (max-width:1200px){
    
    width: 500px;
}
@media only screen and (max-width:1000px){
    width: 700px;

    height: 200px;
}
@media only screen and (max-width:700px){
    width: 600px;
}
@media only screen and (max-width:500px){
    width: 400px;
    height: 300px;
}
@media only screen and (max-width:400px){
    width: 350px;
}
`;

export const MealsContent = styled.div`
padding: 0 10rem;
@media only screen and (min-width:1800px){
    margin: 0 1200rem;
}

@media only screen and (max-width: 1300px){
    padding: 2rem 5rem;
}

@media only screen and (max-width: 1000px) {
    text-align: center;
}

@media only screen and (max-width: 500px){
    padding: 2rem;
}

`;

export const MealsContentTitle = styled.h2`
font-size: clamp(2rem, 8vw, 5rem);
margin-bottom: 3rem;
text-align: center;
line-height: 1.2;
`;

export const MealsContentText = styled.p`
font-size: 3rem;
@media only screen and (max-width: 1000px) {
    font-size: 2rem;
}
`;

export const MealsContentItems = styled.div`
display: flex;
margin-bottom: 3rem;
margin-top: 3rem;
@media only screen and (max-width: 1000px) {
    justify-content: center;
}
`;

export const MealsContentList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
&:not(:last-child) {
    margin-right: 10rem;
}
@media only screen and (max-width: 500px){
    &:not(:last-child) {
    margin-right: 3rem;
}
}
`;

export const MealsContentDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const MealsContentIcon = styled(BiCheck)`
font-size: 1.6rem;
color: #E38B06;
margin-right: 1rem;
`;

export const MealsContentCategory = styled.h3`
font-weight: 400;
font-size: 1.8rem;

@media only screen and (max-width:450px){
    font-size: 1.7rem;
}
@media only screen and (max-width:340px){
    font-size: 1.5rem;
}
@media only screen and (max-width:335px){
    font-size: 1.2rem;
}
`;

export const MealsContentBtn = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;

@media only screen and (max-width: 1000px) {
    justify-content: center;
}
`;

export const Imge = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 800px;
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #38B0DE;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #007FFF;
}

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;



export const Imgw = styled.img`
height: 8rem;

`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;
export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;

export const Imgq = styled.img`
height: 4rem;

`;
export const Imgs = styled.img`
height: 8rem;

`;


export const WorCardTi = styled.h3`
font-size: 5rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
color: #333333;

${Container};
`;
