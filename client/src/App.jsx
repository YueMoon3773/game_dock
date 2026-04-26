import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useVideoBgChange } from './hooks/useVideoBgChange';

import { GithubIcon, Last30DaysIcon, PopularInYearIcon, BestOfYearIcon, AllTimeTopIcon } from './assets/svgIcons';
import RawgImg from './assets/img/prj/RAWG.jpg';
import IntroBgVideo1 from './assets/videos/hollowKnightBg1.webm';
import IntroBgVideo2 from './assets/videos/hollowKnightBg2.webm';
import IntroBgVideo3 from './assets/videos/hollowKnightBg3.webm';
import IntroBgVideo4 from './assets/videos/hollowKnightBg4.webm';
import IntroBgImg from './assets/img/poster/hollowKnightBgPoster.jpg';

import PageLayout from './components/layout/PageLayout/PageLayout';
import MainBtn from './components/base/MainBtn/MainBtn';

import './App.scss';

const App = () => {
    const { bgVideo, isBgVideoBright, bgPosterImg, changeBgVideo } = useVideoBgChange();
    // console.log(bgVideo);

    return (
        <PageLayout
            pageType={'introPage'}
            bgVideo={bgVideo}
            bgPosterImg={bgPosterImg}
            isBgVideoBright={isBgVideoBright}
        >
            <div className="introCard introCardLeft">
                <div className="introCardTop">
                    <h1>Gamio</h1>
                    <p>
                        This is not an actual commercial site. Games are not available for purchase. All prices are
                        purely for display to simulate a real game store. Enjoy 😉
                    </p>
                </div>

                <div className="introCardBottom">
                    <Link
                        to="https://github.com/YueMoon3773"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="introPageBtn"
                    >
                        <GithubIcon></GithubIcon>
                        <span>YueMoon</span>
                    </Link>

                    <Link
                        to="https://rawg.io/apidocs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="introPageBtn"
                    >
                        <img src={RawgImg} alt="RAWG image" />
                        <span>RAWG API</span>
                    </Link>
                </div>
            </div>

            <div className="introCard introCardRight">
                <h4>Quick navigation</h4>
                <Link to="/games" className="introPageBtn introQuickNavigationBtn" onClick={changeBgVideo}>
                    <Last30DaysIcon></Last30DaysIcon>
                    <span>Last 30 days</span>
                </Link>

                <Link to="/" className="introPageBtn introQuickNavigationBtn" onClick={changeBgVideo}>
                    <PopularInYearIcon></PopularInYearIcon>
                    <span>Popular in 2025</span>
                </Link>

                <Link to="/" className="introPageBtn introQuickNavigationBtn" onClick={changeBgVideo}>
                    <BestOfYearIcon></BestOfYearIcon>
                    <span>Best of this year</span>
                </Link>

                <Link to="/" className="introPageBtn introQuickNavigationBtn" onClick={changeBgVideo}>
                    <AllTimeTopIcon></AllTimeTopIcon>
                    <span>All time top</span>
                </Link>
            </div>
        </PageLayout>
    );
};

export default App;
