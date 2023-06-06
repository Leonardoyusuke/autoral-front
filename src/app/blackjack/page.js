'use client'
import BlackJack from "@/components/BlackJack";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home(){
    return (<>
        <Header/>
        <Sidebar/>
        <BlackJack/>
        </>
    )
}