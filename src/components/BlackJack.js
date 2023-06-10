import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import {
    GiCardAceSpades,
    GiCard2Spades,
    GiCard3Spades,
    GiCard4Spades,
    GiCard5Spades,
    GiCard6Spades,
    GiCard7Spades,
    GiCard8Spades,
    GiCard9Spades,
    GiCard10Spades,
    GiCardJackSpades,
    GiCardQueenSpades,
    GiCardKingSpades,
    GiCardAceHearts,
    GiCard2Hearts,
    GiCard3Hearts,
    GiCard4Hearts,
    GiCard5Hearts,
    GiCard6Hearts,
    GiCard7Hearts,
    GiCard8Hearts,
    GiCard9Hearts,
    GiCard10Hearts,
    GiCardJackHearts,
    GiCardQueenHearts,
    GiCardKingHearts,
    GiCardAceDiamonds,
    GiCard2Diamonds,
    GiCard3Diamonds,
    GiCard4Diamonds,
    GiCard5Diamonds,
    GiCard6Diamonds,
    GiCard7Diamonds,
    GiCard8Diamonds,
    GiCard9Diamonds,
    GiCard10Diamonds,
    GiCardJackDiamonds,
    GiCardQueenDiamonds,
    GiCardKingDiamonds,
    GiCardAceClubs,
    GiCard2Clubs,
    GiCard3Clubs,
    GiCard4Clubs,
    GiCard5Clubs,
    GiCard6Clubs,
    GiCard7Clubs,
    GiCard8Clubs,
    GiCard9Clubs,
    GiCard10Clubs,
    GiCardJackClubs,
    GiCardQueenClubs,
    GiCardKingClubs
} from "react-icons/gi";

export default function BlackJack() {
    const [showCard, setShowCard] = useState([]);
    const [showDealerCard, setShowDealerCard] = useState([])
    const baralho = [
        { suit: 'Spades', value: 'Ace', icon: <GiCardAceSpades /> },
        { suit: 'Spades', value: '2', icon: <GiCard2Spades /> },
        { suit: 'Spades', value: '3', icon: <GiCard3Spades /> },
        { suit: 'Spades', value: '4', icon: <GiCard4Spades /> },
        { suit: 'Spades', value: '5', icon: <GiCard5Spades /> },
        { suit: 'Spades', value: '6', icon: <GiCard6Spades /> },
        { suit: 'Spades', value: '7', icon: <GiCard7Spades /> },
        { suit: 'Spades', value: '8', icon: <GiCard8Spades /> },
        { suit: 'Spades', value: '9', icon: <GiCard9Spades /> },
        { suit: 'Spades', value: '10', icon: <GiCard10Spades /> },
        { suit: 'Spades', value: 'Jack', icon: <GiCardJackSpades /> },
        { suit: 'Spades', value: 'Queen', icon: <GiCardQueenSpades /> },
        { suit: 'Spades', value: 'King', icon: <GiCardKingSpades /> },
        { suit: 'Hearts', value: 'Ace', icon: <GiCardAceHearts /> },
        { suit: 'Hearts', value: '2', icon: <GiCard2Hearts /> },
        { suit: 'Hearts', value: '3', icon: <GiCard3Hearts /> },
        { suit: 'Hearts', value: '4', icon: <GiCard4Hearts /> },
        { suit: 'Hearts', value: '5', icon: <GiCard5Hearts /> },
        { suit: 'Hearts', value: '6', icon: <GiCard6Hearts /> },
        { suit: 'Hearts', value: '7', icon: <GiCard7Hearts /> },
        { suit: 'Hearts', value: '8', icon: <GiCard8Hearts /> },
        { suit: 'Hearts', value: '9', icon: <GiCard9Hearts /> },
        { suit: 'Hearts', value: '10', icon: <GiCard10Hearts /> },
        { suit: 'Hearts', value: 'Jack', icon: <GiCardJackHearts /> },
        { suit: 'Hearts', value: 'Queen', icon: <GiCardQueenHearts /> },
        { suit: 'Hearts', value: 'King', icon: <GiCardKingHearts /> },
        { suit: 'Diamonds', value: 'Ace', icon: <GiCardAceDiamonds /> },
        { suit: 'Diamonds', value: '2', icon: <GiCard2Diamonds /> },
        { suit: 'Diamonds', value: '3', icon: <GiCard3Diamonds /> },
        { suit: 'Diamonds', value: '4', icon: <GiCard4Diamonds /> },
        { suit: 'Diamonds', value: '5', icon: <GiCard5Diamonds /> },
        { suit: 'Diamonds', value: '6', icon: <GiCard6Diamonds /> },
        { suit: 'Diamonds', value: '7', icon: <GiCard7Diamonds /> },
        { suit: 'Diamonds', value: '8', icon: <GiCard8Diamonds /> },
        { suit: 'Diamonds', value: '9', icon: <GiCard9Diamonds /> },
        { suit: 'Diamonds', value: '10', icon: <GiCard10Diamonds /> },
        { suit: 'Diamonds', value: 'Jack', icon: <GiCardJackDiamonds /> },
        { suit: 'Diamonds', value: 'Queen', icon: <GiCardQueenDiamonds /> },
        { suit: 'Diamonds', value: 'King', icon: <GiCardKingDiamonds /> },
        { suit: 'Clubs', value: 'Ace', icon: <GiCardAceClubs /> },
        { suit: 'Clubs', value: '2', icon: <GiCard2Clubs /> },
        { suit: 'Clubs', value: '3', icon: <GiCard3Clubs /> },
        { suit: 'Clubs', value: '4', icon: <GiCard4Clubs /> },
        { suit: 'Clubs', value: '5', icon: <GiCard5Clubs /> },
        { suit: 'Clubs', value: '6', icon: <GiCard6Clubs /> },
        { suit: 'Clubs', value: '7', icon: <GiCard7Clubs /> },
        { suit: 'Clubs', value: '8', icon: <GiCard8Clubs /> },
        { suit: 'Clubs', value: '9', icon: <GiCard9Clubs /> },
        { suit: 'Clubs', value: '10', icon: <GiCard10Clubs /> },
        { suit: 'Clubs', value: 'Jack', icon: <GiCardJackClubs /> },
        { suit: 'Clubs', value: 'Queen', icon: <GiCardQueenClubs /> },
        { suit: 'Clubs', value: 'King', icon: <GiCardKingClubs /> },
    ];
    const [playerValue, setPlayerValue] = useState(0);
    const [dealerValue, setDealerValue] = useState(0)
    const [playerHaveAce, setPlayerHaveAce] = useState(false);
    const [dealerHaveAce, setDealerHaveAce] = useState(false)
    const [end, setEnd] = useState(false)
    const [stopCards, setStopCards] = useState(false)
    console.log(dealerValue)

    useEffect(() => {
        if (playerValue > 21 || dealerValue == 21) {
            setTimeout(() => {
                alert("Perdeu");
                setEnd(true)
                setStopCards(true)
            }, 100);
        }
        if (playerValue === 21 || dealerValue > 21) {
            setTimeout(() => {
                alert("Ganhou");
                setEnd(true)
                setStopCards(true)
            }, 100);
        }
    }, [playerValue, dealerValue]);

    function selectCard() {
        const indice = Math.floor(Math.random() * baralho.length);
        const carta = baralho[indice];
        if (showDealerCard.length !== 1) {
            const indice = Math.floor(Math.random() * baralho.length);
            const carta = baralho[indice];
            setShowDealerCard([...showDealerCard, carta.icon])
            if (carta.value === "Jack" || carta.value === "Queen" || carta.value === "King") {
                setDealerValue(dealerValue + 10);
            } else if (carta.value === "Ace") {
                if (dealerValue > 10) {
                    setDealerValue(dealerValue + 1);
                    setDealerHaveAce(true);
                } else {
                    setDealerValue(dealerValue + 11);
                    setDealerHaveAce(true);
                }
            } else {
                setDealerValue(dealerValue + parseInt(carta.value));
            }

            baralho.splice(indice, 1);
        }

        setShowCard([...showCard, carta.icon]);

        if (carta.value === "Jack" || carta.value === "Queen" || carta.value === "King") {
            setPlayerValue(playerValue + 10);
        } else if (carta.value === "Ace") {
            if (playerValue > 10) {
                setPlayerValue(playerValue + 1);
                setPlayerHaveAce(true);
            } else {
                setPlayerValue(playerValue + 11);
                setPlayerHaveAce(true);
            }
        } else {
            setPlayerValue(playerValue + parseInt(carta.value));
        }

        baralho.splice(indice, 1);

        return carta;
    }
    function stop() {
        setStopCards(true)
        setEnd(true)
        dealerGame()
    }
    function dealerGame() {
        if (dealerValue < playerValue) {
            const indice = Math.floor(Math.random() * baralho.length);
            const carta = baralho[indice];
            setShowDealerCard([...showDealerCard, carta.icon]);
            console.log(showDealerCard)
            if (carta.value === "Jack" || carta.value === "Queen" || carta.value === "King") {
                setDealerValue(prevDealerValue => prevDealerValue + 10);
            } else if (carta.value === "Ace") {
                if (dealerValue > 10) {
                    setDealerValue(prevDealerValue => prevDealerValue + 1);
                    setDealerHaveAce(true);
                } else {
                    setDealerValue(prevDealerValue => prevDealerValue + 11);
                    setDealerHaveAce(true);
                }
            } else {
                setDealerValue(dealerValue + parseInt(carta.value));
            }

            baralho.splice(indice, 1);
        } else if (dealerValue > playerValue) {
            console.log("SSS")
        }
    }


    function newGame() {
        setShowCard([])
        setPlayerValue(0)
        setPlayerHaveAce(false)
        setStopCards(false)
        setEnd(false)
        setShowDealerCard([])
        setDealerValue(0)
    }


    return (
        <Environment>
            <DealerCards>{showDealerCard.map((s, index) => <div key={index}>{s}</div>)} </DealerCards>
            <Cards>{showCard.map((s, index) => <div key={index}>{s}</div>)}</Cards>

            <Buttons>
                {end ? <button onClick={newGame} >Novo Jogo</button> : <></>}
                {stopCards ? <></> : <button onClick={selectCard}>Carta</button>}
                {end ? <></> : <button onClick={stop} > Parar</button>
                }
            </Buttons>
        </Environment>
    );
}
const DealerCards = styled.div`
display: flex;
justify-content: center;
position: relative;
top: 2vw;
`

const Buttons = styled.div`
position: absolute;
top: 36vw;
left: 1vw;
button{
    border-radius: 5px;
    margin-right: 2vw;
    height: 3vw;
    width: 8vw;
}
`

const Cards = styled.div`
position: relative;
display: flex;
justify-content: center;
position: relative;
top: 14vw;
`

const Environment = styled.div`
position: absolute;
background-color: green;
width: 100%;
height: 100%;
svg{
    width: 10vw;
    height: 10vw;
}

`