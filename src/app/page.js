"use client";
import Menu from '@/modules/Menu/Menu'
import { useState } from 'react'
import Player from '@/modules/Player/Player';
import Library from '@/modules/Library/Library';


export default function Home() {
  const [singleRouter, setSingleRouter] = useState({
    "displayPlayer": true,
    "displayLibrary": false
  })
  const [currentTrack,setCurrentTrack] = useState({})
  const menuDisplay = (link) => {
    let singleRouterTmp = singleRouter;
    for (let [key, value] of Object.entries(singleRouterTmp)) {
      singleRouterTmp[key] = false;
    }
    singleRouterTmp[link] = true;
    setSingleRouter({...singleRouterTmp})
  }
  return (
    <>
      <header>
        <Menu menuDisplay={menuDisplay}></Menu>
      </header>
      <main>
        {singleRouter.displayPlayer ? <Player></Player> : <></>}
        {singleRouter.displayLibrary ? <Library></Library> : <></>}
      </main>
      <footer></footer>
    </>
  )
}
