// import { useState, useEffect } from "react";
// export default function Memoria() {
//     const [qtdeCartas, setQtdeCartas] = useState(0);
//     const [baralho, setBaralho] = useState([]);
//     const [primeiraCarta, setPrimeiraCarta] = useState(null);
//     const [segundaCarta, setSegundaCarta] = useState(null);
//     const [jogadas, setJogadas] = useState(0);
//     const [acertos, setAcertos] = useState(0);
//     const [contador, setContador] = useState(0);
  
  
//     function resetCartas() {
//       setPrimeiraCarta(null);
//       setSegundaCarta(null);
//     }
  
//     function desvirarCartas() {
//       primeiraCarta.classList.remove('virada');
//       segundaCarta.classList.remove('virada');
  
//       resetCartas();
//     }
  
//     // function finalizarJogo() {
//     //   if (acertos === baralho.length) {
//     //     clearInterval(idInterval);
  
//     //     alert(`Jogo Finalizado com ${jogadas} jogas em ${contador} segundos`);
//     //     const continuar = window.confirm("Gostaria de jogar novamente?");
//     //     if (continuar) {
//     //       window.location.reload();
//     //     }
//     //   }
//     // }
  
//     function virarCarta(carta) {
//       if (carta.classList.contains('virada')) {
//         return;
//       }
  
//       if (primeiraCarta !== null && segundaCarta !== null) {
//         return;
//       }
  
//       carta.classList.add('virada');
//       setJogadas((jogadas) => jogadas + 1);
  
//       if (primeiraCarta === null) {
//         setPrimeiraCarta(carta);
//       } else {
//         if (segundaCarta === null) {
//           setSegundaCarta(carta);
  
//           if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
//             resetCartas();
//             setAcertos((acertos) => acertos + 2);
  
//             finalizarJogo();
//           } else {
//             setTimeout(desvirarCartas, 1000);
//           }
//         }
//       }
//     }
  
//     function renderizarBaralho() {
//       const tabuleiro = document.querySelector('.tabuleiro');
  
//       for (let i = 0; i < baralho.length; i++) {
//         let cartaTemplate = `
//           <Carta class="carta" onclick="virarCarta(this)">
//             <Face class='front-face face'>
//               <Img src='imagens/front.png' />
//             </Face>
//             <Face class='back-face face'>
//               <Img src='imagens/${baralho[i]}.gif' />
//             </Face>
//           </Carta>  
//         `;
  
//         tabuleiro.innerHTML += cartaTemplate;
//       }
//     }
  
//     function comparador() {
//       return Math.random() - 0.5;
//     }
  
//     function iniciarJogo() {
//       const novoBaralho = [];
  
//       for (let i = 0; i < qtdeCartas / 2; i++) {
//         let carta = cartas[i];
//         novoBaralho.push(carta);
//         novoBaralho.push(carta);
//       }
  
//       novoBaralho.sort(comparador);
//       setBaralho(novoBaralho);
  
//       renderizarBaralho();
//     }
  
//     function qtdeCartasInvalido(qtde) {
//       return (
//         qtde % 2 !== 0 ||
//         qtde < 4 ||
//         qtde > 14 ||
//         isNaN(qtde)
//       );
//     }
  
//     function perguntarQtdeCartas() {
//       let qtde = Number(prompt('Com quantas cartas você quer jogar?'));
  
//       while (qtdeCartasInvalido(qtde)) {
//         qtde = Number(prompt('Com quantas cartas você quer jogar?'));
//       }
  
//       setQtdeCartas(qtde);
//       iniciarJogo();
//     }
  
//     useEffect(() => {
//       perguntarQtdeCartas();
//     }, []);
  
//     return (
//       <>
//         <Title>Memory Game</Title>
//         <Tabuleiro className="tabuleiro" />
//         <Container>
//         </Container>
//       </>
//     );
//   }