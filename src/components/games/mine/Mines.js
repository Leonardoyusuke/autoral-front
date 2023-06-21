import { useState } from "react";
import { styled } from "styled-components";

export default function Mines() {
  const mock = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, "bomb", "bomb", "bomb", "bomb"
  ];
  const [shuffledMock, setShuffledMock] = useState([]);

  const [bet, setBet] = useState(1);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startGame(event) {
    event.preventDefault();
    const shuffledArray = shuffle(mock);
    setShuffledMock(shuffledArray);
    console.log(shuffledArray);
  }

  function turnCard(m) {
    console.log(m)
    if(m=="bomb"){
        lose()
    }
  }
  function lose(){
    console.log("perdeu")
    setShuffledMock([])
  }

  function stop(event) {
    setShuffledMock([])
    console.log(bet)
  }
  

  return (
    <Container>
      <Game>
        {shuffledMock.map((m) => (
          <div onClick={() => turnCard(m)} key={m}>
            {m}
          </div>
        ))}
      </Game>
      <Footer>
        <form onSubmit={startGame}>
          <input
            type="number"
            onChange={(e) => setBet(e.target.value)}
            min={1}
            placeholder="valor"
          />
          <input
            type="number"
            onChange={(e) => (bombs = parseInt(e.target.value))}
            min={2}
            max={24}
            placeholder="numero de minas"
          />
          <button>Jogar</button>
        </form>
        <button onClick={stop}>parar</button>
      </Footer>
    </Container>
  );
}


const Game = styled.div`
width: 80%;
margin-left: 10%;
display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.1vw;
div{
    margin: 1vw;
    width: 5vw;
    height: 4.8vw;
    background-color: green;
}
`

const Footer = styled.div`
width: 100%;
background-color: black;
height: 15%;
position: absolute;
z-index: 4;
top: 34vw;
`

const Container = styled.div`
position: relative;
height: 100%;
background-color: gray;
width: 100%;

`