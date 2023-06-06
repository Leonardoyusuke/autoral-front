'use client'
import { styled } from "styled-components"
import { AiFillHome } from "react-icons/ai";
import { FaGamepad, FaSearch, FaUserFriends, FaCoins } from "react-icons/fa"
import { MdEmojiEvents } from "react-icons/md"
import { RiLogoutBoxLine } from "react-icons/ri"
import { useState } from "react";
import { useRouter } from 'next/navigation';



export default function Header() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("")
    const [iconSearch, setIconSearch] = useState("")
    const imageSrc = localStorage.getItem('img');



    return (<Div father>
        <Div >LOGO
            <Div1>{iconSearch ? <FaSearch /> : <></>}
                <InputHeader onChange={(e) => setSearchText(e.target.value)} placeholder="            Pesquisar no FaceBet" />
            </Div1>
        </Div>
        <Div>
            <HeaderLayout mid>
                <AiFillHome onClick={() => router.push('/dashboard')} />
                <MdEmojiEvents />
                <FaGamepad />
                <FaUserFriends />
            </HeaderLayout>
        </Div>
        <Div right>
            <HeaderLayout >
                <Coins>
                    <FaCoins coins />
                    <p>3000</p>
                </Coins>
                <Img src={imageSrc} />
                <RiLogoutBoxLine logout />
            </HeaderLayout>
        </Div>

    </Div>)
}
const Coins = styled.div`
margin-left:-5vw;
margin-right: 2vw;
background-color: lightgray;
border-radius: 15px;
width: 10vw;
height: 3.5vw;
position: absolute;
box-shadow:0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1) ;
svg{
    margin-top: 0.3vw;
    margin-left: 0.5vw;
};
p{
    position: relative;
    right: -5vw;
    top: -2.4vw;
    z-index: 1;

}
`

export const Img = styled.img`
border-radius: 20px;
height: ${props => props.side?"3vw":"3.5vw"} ;
width: ${props => props.side?"3vw":"3.5vw"};
margin-right: ${props => props.side?"1vw":"4vw"};
margin-left: ${props => props.side?"1vw":"7vw"};
`

const Div1 = styled.div`
position: absolute;
left: 5vw;
width: 18vw;
height: 3vw;
box-sizing: content-box;
svg{
    position:relative;
    left: 2vw;
    top:0.3vw;
}
`

const InputHeader = styled.input`
width: 15vw;
height: 3vw;
border-radius: 15px;
`

const Div = styled.div`
position: ${props => props.father ? "fixed" : ""};
display:flex;
justify-content: ${props => props.father ? "space-between" : ""};
align-items: center;
background-color:white;
width: ${props => props.father ? "100vw" : "19vw"};
height: ${props => props.father ? "5vw" : ""};
box-shadow:${props => props.father ? "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)" : ""}; 
z-index:4 ;
`
const HeaderLayout = styled.div`
display: flex;
justify-content: space-between;
margin-right: ${props => props.right ? "-1vw" : ""};
margin-left: ${props => props.mid? "-2.5vw":"" }  ;
:hover{
        color:#1A73E3;
    }
svg{
    height:3vw;
    width: 3vw;
    margin-right: ${props => props.right ? "2vw" : "4vw"};
}
`