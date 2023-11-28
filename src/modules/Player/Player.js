import "./Player.css"
const Player = (props) => {
    return (
        <>
            <div id="container">
                <div id="player">
                    <div id="slider"></div>
                    <div id="navigation">
                        <div id="prev">
                            <img src="./assets/icons/step-backward-solid.svg" alt=""/>
                        </div>
                        <div id="play-pause">
                            <img src="./assets/icons/play-circle-solid.svg" alt=""/>
                        </div>
                        <div id="next">
                            <img src="./assets/icons/step-forward-solid.svg" alt=""/>
                        </div>
                        <div id="shuffle">
                            <img src="./assets/icons/shuffle-solid.svg" alt=""/>
                        </div>
                    </div>
                    <div id="time">
                        <div id="subTime"></div>
                    </div>
                </div>
                <div id="playlist"></div>
            </div>
        </>
    )
}
export default Player