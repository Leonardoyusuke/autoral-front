import { styled } from "styled-components"

export default function BlackJack(){
    return(<>
    <GameTitle>Black Jack</GameTitle>
    <ContainerGame>
    </ContainerGame>
    </>)
}
export const GameTitle = styled.div`
display: flex;
left: 50vw;
position: fixed;
top:5vw;

`

export const ContainerGame = styled.div`
background-color:black;
position: fixed;
top: 8vw;
width: 48vw;
height: 40vw;
margin-left: 28vw;

`