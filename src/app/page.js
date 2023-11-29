"use client";
/* start with other url and port :
npx next dev -H 192.168.1.145 -p 8000 */
import Menu from '@/modules/Menu/Menu'
import io from 'socket.io-client'
import { useRef, useState } from 'react'
import Player from '@/modules/Player/Player';
import Library from '@/modules/Library/Library';
import { PlayerContextProvider } from '@/context/PlayerContext';
import { usePlayerContext } from '@/context/PlayerContext';
import fs from 'fs';
// utilisation de swr pour fetcher
//import useSWR from 'swr'; //npm i swr
//const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Home() {
  const [singleRouter, setSingleRouter] = useState({
    "displayPlayer": true,
    "displayLibrary": false
  })
  const { playList, setPlayList, indexTrack, setCurrentTrack, setPlayListLen, setPlayerReady, playerReady } = usePlayerContext()
  const loadPlaylist = async () => {
    const json = await fs.readFile(process.cwd() + '/data/playlist/like.json', 'utf8');
    console.log(json);
    // import playList
    setPlayList({ ...json });
    // def currentTrack
    setCurrentTrack({ ...playList[indexTrack] });
    setPlayListLen(playList.length);
    setPlayerReady(true);
  }
  loadPlaylist();
  /* // url pas bonne voir le system api du routeur
  fetch('/api/playlist/like.json')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      // import playList
      setPlayList({ ...json });
      // def currentTrack
      setCurrentTrack({ ...playList[indexTrack] });
      setPlayListLen(playList.length);
      setPlayerReady(true);
    })
 */
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
        {singleRouter.displayPlayer && playerReady ?
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
