import { styled } from "styled-components"
import BlackJack from "./BlackJack"

export default function GameEnvirolment(){
    return(<>
    <GameTitle>Game Title</GameTitle>
    <ContainerGame><BlackJack/>
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
position: fixed;
top: 8vw;
width: 48vw;
height: 40vw;
margin-left: 28vw;

`