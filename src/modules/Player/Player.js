
import { usePlayerContext } from "@/context/PlayerContext"
import InfosPlayer from "../InfosPlayer/InfosPlayer"
import NavPlayer from "../NavPlayer/NavPlayer"
import Slider from "../Slider/Slider"
import Timebar from "../Timebar/Timebar"
import "./Player.css"
const Player = (props) => {
const playerContext = usePlayerContext;
  useRef(() => {
    // url a verif
    fetch('@/data/playlist/like.json').then(res => res.json())
      .then((json) => {
        // import playList
        usePlayerContext.setPlayList({ ...json });
        // def currentTrack
        usePlayerContext.setCurrentTrack({ ...usePlayerContext.playList[usePlayerContext.indexTrack] })
      })
  }, [])

    return (
        <>
            <div id="container">
                <div id="player">
                    <Slider></Slider>
                    <Timebar></Timebar>
                    <NavPlayer></NavPlayer>
                    <InfosPlayer></InfosPlayer>
                </div>
            </div>
        </>
    )
}
export default Player