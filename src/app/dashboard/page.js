'use client'
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { styled } from "styled-components"
export default function Home() {
  return (<><Header/>
  <Sidebar/>
  <Content>
  </Content>
  </>)
}

const Content = styled.div`
background-color:#F1F2F5;
width: 100vw;
height: 100vw;
margin-top: 5vw;
`