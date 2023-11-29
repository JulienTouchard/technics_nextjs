
import { usePlayerContext } from "@/context/PlayerContext"
import InfosPlayer from "../InfosPlayer/InfosPlayer"
import NavPlayer from "../NavPlayer/NavPlayer"
import Slider from "../Slider/Slider"
import Timebar from "../Timebar/Timebar"
import "./Player.css"
const Player = (props) => {
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