'use client'
import BlackJack from "@/components/BlackJack";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GameEnvirolment from "@/components/GameEnvirolment";

export default function Home(){
    return (<>
        <Header/>
        <Sidebar/>
        <GameEnvirolment></GameEnvirolment>
        </>
    )
}