"use client";
/* start with other url and port :
npx next dev -H 192.168.1.145 -p 8000 */
import Menu from '@/modules/Menu/Menu'
import io from 'socket.io-client'
import { useRef, useState } from 'react'
import Player from '@/modules/Player/Player';
import Library from '@/modules/Library/Library';
import { PlayerContextProvider } from '@/context/PlayerContext';


export default function Home() {
  const [singleRouter, setSingleRouter] = useState({
    "displayPlayer": true,
    "displayLibrary": false
  })

  //gestion menu
  const menuDisplay = (link) => {
    let singleRouterTmp = singleRouter;
    for (let [key, value] of Object.entries(singleRouterTmp)) {
      singleRouterTmp[key] = false;
    }
    singleRouterTmp[link] = true;
    setSingleRouter({ ...singleRouterTmp })
  }

  return (
    <>
      <header>
        <Menu menuDisplay={menuDisplay}></Menu>
      </header>
      <main>
        {singleRouter.displayPlayer ?
          <PlayerContextProvider>
            <Player></Player>
          </PlayerContextProvider>

          : <></>}
        {singleRouter.displayLibrary ? <Library></Library> : <></>}
      </main>
      <footer></footer>
    </>
  )
}
