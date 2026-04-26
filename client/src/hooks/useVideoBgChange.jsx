import { useState, createContext, useContext } from 'react';

import bgVideo1 from '../assets/videos/hollowKnightBg1.webm';
import bgVideo2 from '../assets/videos/hollowKnightBg2.webm';
import bgVideo3 from '../assets/videos/hollowKnightBg3.webm';
import bgVideo4 from '../assets/videos/hollowKnightBg4.webm';
import bgPosterImg from '../assets/img/poster/hollowKnightBgPoster.jpg';

const VideoBgChangeContext = createContext(null);

const bgVideoList = [
    {
        bgVideo: bgVideo1,
        isBgVideoBright: false,
    },
    {
        bgVideo: bgVideo3,
        isBgVideoBright: false,
    },
    {
        bgVideo: bgVideo2,
        isBgVideoBright: true,
    },
    {
        bgVideo: bgVideo4,
        isBgVideoBright: false,
    },
];

const getInitialVideoIndex = () => {
    const savedIndex = sessionStorage.getItem('bgVideoIndex');
    return savedIndex !== null ? parseInt(savedIndex) : 0;
};

export const VideoBgChangeProvider = ({ children }) => {
    const [bgVideoIndex, setBgVideoIndex] = useState(getInitialVideoIndex);

    let bgVideo = bgVideoList[bgVideoIndex].bgVideo;
    let isBgVideoBright = bgVideoList[bgVideoIndex].isBgVideoBright;

    const changeBgVideo = () => {
        setBgVideoIndex((prev) => {
            const nextIndex = prev === bgVideoList.length - 1 ? 0 : prev + 1;
            sessionStorage.setItem('bgVideoIndex', nextIndex);
            return nextIndex;
        });
    };

    return (
        <VideoBgChangeContext.Provider value={{ bgVideo, isBgVideoBright, bgPosterImg, changeBgVideo }}>
            {children}
        </VideoBgChangeContext.Provider>
    );
};

export const useVideoBgChange = () => {
    const context = useContext(VideoBgChangeContext);

    if (!context) {
        throw new Error('useVideoBgChange must be used inside VideoBgChangeProvider');
    }

    return context;
};
