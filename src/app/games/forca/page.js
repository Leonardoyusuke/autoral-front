'use client'
import BlackJack from "@/components/games/blackjack/BlackJack";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { styled } from "styled-components"

import { useRouter } from 'next/navigation';
import Ranking from "@/components/ranking/Ranking";
import Forca from "@/components/games/forca/Forca";

export default function Home() {
    const router = useRouter();
    const token = localStorage.getItem('token');
    if (!token) router.push('/')


    return (<>
        <Header></Header><Ranking></Ranking><Sidebar></Sidebar>
        <GameTitle> Jogo da forca</GameTitle>
        <ContainerGame><Forca></Forca>
        </ContainerGame>

    </>
    )
}
export const GameTitle = styled.div`
display: flex;
left: 43vw;
font-size: 2vw;
position: fixed;
top:5.5vw;

`
export const ContainerGame = styled.div`
position: fixed;
top: 8vw;
width: 45vw;
height: 40vw;
margin-left: 28vw;

`