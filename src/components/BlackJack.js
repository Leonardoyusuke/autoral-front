'use client'
import { styled } from "styled-components"

export default function BlackJack() {
    const baralho = [
        { suit: 'Espadas', value: 'Ás' },
        { suit: 'Espadas', value: '2' },
        { suit: 'Espadas', value: '3' },
        { suit: 'Espadas', value: '4' },
        { suit: 'Espadas', value: '5' },
        { suit: 'Espadas', value: '6' },
        { suit: 'Espadas', value: '7' },
        { suit: 'Espadas', value: '8' },
        { suit: 'Espadas', value: '9' },
        { suit: 'Espadas', value: '10' },
        { suit: 'Espadas', value: 'Valete' },
        { suit: 'Espadas', value: 'Dama' },
        { suit: 'Espadas', value: 'Rei' },
        { suit: 'Copas', value: 'Ás' },
        { suit: 'Copas', value: '2' },
        { suit: 'Copas', value: '3' },
        { suit: 'Copas', value: '4' },
        { suit: 'Copas', value: '5' },
        { suit: 'Copas', value: '6' },
        { suit: 'Copas', value: '7' },
        { suit: 'Copas', value: '8' },
        { suit: 'Copas', value: '9' },
        { suit: 'Copas', value: '10' },
        { suit: 'Copas', value: 'Valete' },
        { suit: 'Copas', value: 'Dama' },
        { suit: 'Copas', value: 'Rei' },
        { suit: 'Ouros', value: 'Ás' },
        { suit: 'Ouros', value: '2' },
        { suit: 'Ouros', value: '3' },
        { suit: 'Ouros', value: '4' },
        { suit: 'Ouros', value: '5' },
        { suit: 'Ouros', value: '6' },
        { suit: 'Ouros', value: '7' },
        { suit: 'Ouros', value: '8' },
        { suit: 'Ouros', value: '9' },
        { suit: 'Ouros', value: '10' },
        { suit: 'Ouros', value: 'Valete' },
        { suit: 'Ouros', value: 'Dama' },
        { suit: 'Ouros', value: 'Rei' },
        { suit: 'Paus', value: 'Ás' },
        { suit: 'Paus', value: '2' },
        { suit: 'Paus', value: '3' },
        { suit: 'Paus', value: '4' },
        { suit: 'Paus', value: '5' },
        { suit: 'Paus', value: '6' },
        { suit: 'Paus', value: '7' },
        { suit: 'Paus', value: '8' },
        { suit: 'Paus', value: '9' },
        { suit: 'Paus', value: '10' },
        { suit: 'Paus', value: 'Valete' },
        { suit: 'Paus', value: 'Dama' },
        { suit: 'Paus', value: 'Rei' }
    ]
    const playerHand = []
    let playerValue = 0
    let playerHaveAce = false

    function selecionarCarta() {
        const indice = Math.floor(Math.random() * baralho.length);
        const carta = baralho[indice];
        playerHand.push(carta)
        console.log(carta.value)
        console.log(carta)
        if (carta.value === "Valete" || "Dama" || "Rei") {
            playerValue = playerValue + 10
        } else if (carta.value == "Ás") {
            if (playerValue > 10) {
                playerValue = playerValue + 1
                playerHaveAce = true
            } else {
                playerValue = playerValue + 11
                playerHaveAce = true
            }
        }else{
            playerValue = playerValue + carta.value
        
        }
        console.log(playerValue)
        baralho.splice(indice, 1); // Remover a carta selecionada do baralho
        return carta;
    }

    return (
        <Environment>
            <button onClick={selecionarCarta}></button>

        </Environment>
    )
}

const Environment = styled.div`
background-color: aliceblue;
width: 100%;
height: 100%;

`