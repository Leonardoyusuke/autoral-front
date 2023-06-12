'use client'
import BlackJack from "@/components/BlackJack";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GameEnvirolment from "@/components/GameEnvirolment";
import { useRouter } from 'next/navigation';
import Ranking from "@/components/Ranking";

export default function Home(){
    const router = useRouter();
    const token = localStorage.getItem('token');
    if(!token) router.push('/')
    return (<>
        <Header/>
        <Sidebar/>
        <GameEnvirolment></GameEnvirolment>
        <Ranking/>
        </>
    )
}