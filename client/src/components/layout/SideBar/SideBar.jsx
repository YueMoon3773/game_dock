import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { z } from 'zod';

import {
    YourFavGamesIcon,
    Last30DaysIcon,
    ThisWeekIcon,
    NextWeekIcon,
    BestOfYearIcon,
    PopularInYearIcon,
    AllTimeTopIcon,
    PcIcon,
    PlayStationIcon,
    XBoxIcon,
    NintendoIcon,
    IosIcon,
    AndroidIcon,
    ActionIcon,
    StrategyIcon,
    RpgIcon,
    ShooterIcon,
    AdventureIcon,
    PuzzleIcon,
    RacingIcon,
    SportIcon,
    ShowAllButtonIcon,
} from '../../../assets/svgIcons';

import './SideBar.scss';

const SideBar = () => {
    const [isPlatformsShowAll, setIsPlatformsShowAll] = useState(false);
    const [isGenresShowAll, setIsGenresShowAll] = useState(false);

    return (
        <aside className="sideBar">
            {/* <section className="sideBarSection">
                <h1 className="sideBarSectionHeading">Your games</h1>
                <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                    <div className="sideBarIconWrapper">
                        <YourFavGamesIcon iconClassName={'sideBarIcon'}></YourFavGamesIcon>
                    </div>
                    <span></span>
                </NavLink>
            </section> */}

            {/* NEW RELEASE SECTION  */}
            <section className="sideBarSection">
                <h1 className="sideBarSectionHeading">New releases</h1>

                <div className="sideBarSectionContent">
                    <NavLink to="/games" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <Last30DaysIcon iconClassName={'sideBarIcon'}></Last30DaysIcon>
                        </div>
                        <span>Last 30 days</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <ThisWeekIcon iconClassName={'sideBarIcon'}></ThisWeekIcon>
                        </div>
                        <span>This week</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <NextWeekIcon iconClassName={'sideBarIcon'}></NextWeekIcon>
                        </div>
                        <span>Next week</span>
                    </NavLink>
                </div>
            </section>

            {/* TOP GAMES SECTION  */}
            <section className="sideBarSection">
                <h1 className="sideBarSectionHeading">Top</h1>

                <div className="sideBarSectionContent">
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <BestOfYearIcon iconClassName={'sideBarIcon'}></BestOfYearIcon>
                        </div>
                        <span>Best of the year</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <PopularInYearIcon iconClassName={'sideBarIcon'}></PopularInYearIcon>
                        </div>
                        <span>Popular in 2025</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <AllTimeTopIcon iconClassName={'sideBarIcon'}></AllTimeTopIcon>
                        </div>
                        <span>All time top 250</span>
                    </NavLink>
                </div>
            </section>

            {/* PLATFORMS SECTION */}
            <section className="sideBarSection">
                <h1 className="sideBarSectionHeading">Platforms</h1>

                <div className="sideBarSectionContent">
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <PcIcon iconClassName={'sideBarIcon'}></PcIcon>
                        </div>
                        <span>PC</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <PlayStationIcon iconClassName={'sideBarIcon'}></PlayStationIcon>
                        </div>
                        <span>PlayStation</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <XBoxIcon iconClassName={'sideBarIcon'}></XBoxIcon>
                        </div>
                        <span>Xbox One</span>
                    </NavLink>

                    {isPlatformsShowAll && (
                        <>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <AndroidIcon iconClassName={'sideBarIcon'}></AndroidIcon>
                                </div>
                                <span>Android</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <IosIcon iconClassName={'sideBarIcon'}></IosIcon>
                                </div>
                                <span>iOS</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <NintendoIcon iconClassName={'sideBarIcon'}></NintendoIcon>
                                </div>
                                <span>Nintendo Switch</span>
                            </NavLink>
                        </>
                    )}

                    <button
                        className="showHideSideBarSectionBtn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsPlatformsShowAll((prev) => !prev);
                        }}
                    >
                        <div className={`sideBarIconWrapper ${isPlatformsShowAll ? 'rotateIcon' : ''}`}>
                            <ShowAllButtonIcon iconClassName={'sideBarShowHideIcon'}></ShowAllButtonIcon>
                            {/* <ShowAllButtonIcon></ShowAllButtonIcon> */}
                        </div>
                        <span>{isPlatformsShowAll ? 'Show less' : 'Show all'}</span>
                    </button>
                </div>
            </section>

            {/* GENRES SECTION */}
            <section className="sideBarSection">
                <h1 className="sideBarSectionHeading">Genres</h1>

                <div className="sideBarSectionContent">
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            {/* <ActionIcon iconClassName={'sideBarIcon'}></ActionIcon> */}
                            <ActionIcon iconClassName={'sideBarFilledIcon'}></ActionIcon>
                        </div>
                        <span>Action</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <StrategyIcon iconClassName={'sideBarIcon'}></StrategyIcon>
                        </div>
                        <span>Strategy</span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                        <div className="sideBarIconWrapper">
                            <RpgIcon iconClassName={'sideBarIcon'}></RpgIcon>
                        </div>
                        <span>RPG</span>
                    </NavLink>

                    {isGenresShowAll && (
                        <>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <ShooterIcon iconClassName={'sideBarIcon'}></ShooterIcon>
                                </div>
                                <span>Shooter</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <AdventureIcon iconClassName={'sideBarIcon'}></AdventureIcon>
                                </div>
                                <span>Adventure</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <PuzzleIcon iconClassName={'sideBarIcon'}></PuzzleIcon>
                                </div>
                                <span>Puzzle</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <RacingIcon iconClassName={'sideBarIcon'}></RacingIcon>
                                </div>
                                <span>Racing</span>
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `sideBarLink ${isActive ? 'active' : ''}`}>
                                <div className="sideBarIconWrapper">
                                    <SportIcon iconClassName={'sideBarIcon'}></SportIcon>
                                </div>
                                <span>Sports</span>
                            </NavLink>
                        </>
                    )}

                    <button
                        className="showHideSideBarSectionBtn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsGenresShowAll((prev) => !prev);
                        }}
                    >
                        <div className={`sideBarIconWrapper ${isGenresShowAll ? 'rotateIcon' : ''}`}>
                            <ShowAllButtonIcon iconClassName={'sideBarShowHideIcon'}></ShowAllButtonIcon>
                            {/* <ShowAllButtonIcon></ShowAllButtonIcon> */}
                        </div>
                        <span>{isGenresShowAll ? 'Show less' : 'Show all'}</span>
                    </button>
                </div>
            </section>
        </aside>
    );
};

export default SideBar;
