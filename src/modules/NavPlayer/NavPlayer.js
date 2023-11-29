import { usePlayerContext } from '@/context/PlayerContext'
import './NavPlayer.css'

const NavPlayer = () => {
  const {indexTrack, setIndexTrack, playListLen} = usePlayerContext();
  const nextTrack = ()=>{
    indexTrack < playListLen ? setIndexTrack(indexTrack+1):setIndexTrack(0);
    console.log(playListLen,indexTrack);
  }
  return (
    <div id="navigation">
      <div id="prev">
        <img src="./assets/icons/step-backward-solid.svg" alt="" />
      </div>
      <div id="play-pause">
        <img src="./assets/icons/play-circle-solid.svg" alt="" />
      </div>
      <div id="next" onClick={nextTrack}>
        <img src="./assets/icons/step-forward-solid.svg" alt="" />
      </div>
      <div id="shuffle">
        <img src="./assets/icons/shuffle-solid.svg" alt="" />
      </div>
    </div>
  )
}

export default NavPlayer