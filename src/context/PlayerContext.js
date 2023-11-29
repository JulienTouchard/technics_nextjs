import { createContext, useContext, useState } from "react";

const PlayerContext = createContext({});

export const PlayerContextProvider = ({ children }) => {
    //state Player
    const [indexTrack, setIndexTrack] = useState(0)
    const [currentTrack, setCurrentTrack] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)
    const [playList, setPlayList] = useState({})
    const [playerReady, setPlayerReady] = useState(false);

    return (
        <PlayerContext.Provider value={{
            indexTrack, setIndexTrack,
            currentTrack, setCurrentTrack,
            isPlaying, setIsPlaying,
            playList, setPlayList,
            playerReady, setPlayerReady,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}
export const usePlayerContext = useContext(PlayerContext); 