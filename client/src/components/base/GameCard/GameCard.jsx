import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { format } from 'date-fns';

import {
    PcIcon,
    PlayStationIcon,
    XBoxIcon,
    NintendoIcon,
    AndroidIcon,
    IosIcon,
    MacOsIcon,
    LinuxIcon,
    AmigaIcon,
    AtariIcon,
    SegaIcon,
    ThreeDOIcon,
    WebPlatformIcon,
    YourFavGamesIcon,
    StarIcon,
} from '../../../assets/svgIcons';
import helperFunctions from '../../../utils/helper';
import ValidatedComponent from '../../../utils/validateComponentProps';

import './GameCard.scss';

const gameCardSchema = z
    .object({
        isGameCardLoading: z.boolean().optional(),
        gameCardId: z.number().nullable().optional(),
        gameCardSingleMediaDisplay: z.string().nullable().optional(),
        gameCardMediaLibrary: z.array(z.looseObject({})).nullable().optional(),
        gameCardPlatforms: z.array(z.looseObject({})).nullable().optional(),
        gameCardName: z.string().nullable().optional(),
        gameCardReleaseDate: z.string().nullable().optional(),
        gameCardGenres: z.array(z.looseObject({})).nullable().optional(),
        gameCardRating: z.number().nullable().optional(),
        gameCardStores: z.array(z.looseObject({})).nullable().optional(),
    })
    .refine(
        (props) => {
            if (
                props.isGameCardLoading === false &&
                (props.gameCardId === undefined ||
                    props.gameCardSingleMediaDisplay === undefined ||
                    props.gameCardMediaLibrary === undefined ||
                    props.gameCardPlatforms === undefined ||
                    props.gameCardName === undefined ||
                    props.gameCardReleaseDate === undefined ||
                    props.gameCardGenres === undefined ||
                    props.gameCardRating === undefined ||
                    props.gameCardStores === undefined)
            ) {
                return false;
            } else return true;
        },
        {
            message:
                'gameCardId,gameCardSingleMediaDisplay,gameCardMediaLibrary,gameCardPlatforms, gameCardPlatformsParents, gameCardName,gameCardReleaseDate,gameCardGenres,gameCardRating, gameCardStores must be provided in case isGameCardLoading === false',
        },
    );

const helper = helperFunctions();

const gameCard = ({
    isGameCardLoading,
    gameCardId,
    gameCardSingleMediaDisplay,
    gameCardMediaLibrary,
    gameCardPlatforms,
    gameCardName,
    gameCardReleaseDate,
    gameCardGenres,
    gameCardRating,
    gameCardStores,
}) => {
    const [isCardHover, setIsCardHover] = useState(false);
    const gameCardHoverTimer = useRef(null);

    const platformIcons = helper.svgPlatformsSelection(gameCardPlatforms);
    const releaseDate = format(gameCardReleaseDate, 'MMM d, yyyy');

    // console.log({ gameCardName });
    // console.log({ platformIcons });
    // console.log({ gameCardPlatforms });
    // console.log({ releaseDate });

    return (
        <div
            className={`gameCard ${isCardHover ? 'cardHovering' : ''}`}
            onMouseEnter={() => {
                gameCardHoverTimer.current = setTimeout(() => {
                    setIsCardHover(true);
                }, 260);
            }}
            onMouseLeave={() => {
                clearTimeout(gameCardHoverTimer.current);
                setIsCardHover(false);
            }}
        >
            <div className="gameCardMedia">
                {/* {gameCardSingleMediaDisplay !== null && (
                )} */}
                <div className={`cardMediaWrapper ${gameCardSingleMediaDisplay !== null ? 'mediaDisplayed' : ''}`}>
                    {isCardHover ? (
                        <div className="cardMediaLibrary"></div>
                    ) : (
                        <>
                            {gameCardSingleMediaDisplay !== null && (
                                <img src={gameCardSingleMediaDisplay} alt="game image" />
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="gameCardInfo">
                <div className="platformsWrapper">
                    {platformIcons !== null && (
                        <>
                            {platformIcons.map((icon, index) => {
                                if (icon === 'pc') return <PcIcon></PcIcon>;
                                else if (icon === 'xbox') return <XBoxIcon></XBoxIcon>;
                                else if (icon === 'playstation') return <PlayStationIcon></PlayStationIcon>;
                                else if (icon === 'nintendo') return <NintendoIcon></NintendoIcon>;
                                else if (icon === 'sega') return <SegaIcon></SegaIcon>;
                                else if (icon === 'ios') return <IosIcon></IosIcon>;
                                else if (icon === 'android') return <AndroidIcon></AndroidIcon>;
                                else if (icon === 'macos') return <MacOsIcon></MacOsIcon>;
                                else if (icon === 'linux') return <LinuxIcon></LinuxIcon>;
                                else if (icon === 'amiga') return <AmigaIcon></AmigaIcon>;
                                else if (icon === '3do') return <ThreeDOIcon></ThreeDOIcon>;
                                else if (icon === 'web') return <WebPlatformIcon></WebPlatformIcon>;
                                else if (icon === 'atari') return <AtariIcon></AtariIcon>;
                            })}
                        </>
                    )}
                </div>
                <Link className="gameName" to="/">
                    {gameCardName}
                </Link>
                <div className="gamePricesAndLike">
                    <div className="pricesWrapper">
                        <span className="discountPrice">$60.00</span>
                        <span className="oldPrice">$60.00</span>
                    </div>

                    {isCardHover && (
                        <button className="gameLikeBtn">
                            <YourFavGamesIcon></YourFavGamesIcon>
                        </button>
                    )}
                </div>

                {isCardHover && (
                    <>
                        <ul className="gameDetailInfoWrapper">
                            <li className="detailInfoItem">
                                <p className="detailInfoTitle">Release date:</p>
                                <div className="detailInfoWrapper">
                                    <span className="detailInfoText">{releaseDate}</span>
                                </div>
                            </li>
                            <li className="detailInfoItem">
                                <p className="detailInfoTitle">Genres:</p>
                                <div className="detailInfoWrapper">
                                    {gameCardGenres !== null ? (
                                        <>
                                            {gameCardGenres.map((genre, index) => {
                                                return (
                                                    <p className="gameInfoLinkWrapper" key={genre.id + index}>
                                                        <Link to={`/`} key={genre.id + index}>
                                                            {genre.name}
                                                        </Link>
                                                        {index === gameCardGenres.length - 1 ? '' : ', '}
                                                    </p>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        'NA'
                                    )}
                                </div>
                            </li>
                            <li className="detailInfoItem">
                                <p className="detailInfoTitle">Rating:</p>
                                <div className="detailInfoWrapper">
                                    <span className="detailInfoText">
                                        <StarIcon></StarIcon>
                                        {gameCardRating}
                                    </span>
                                </div>
                            </li>
                            <li className="detailInfoItem">
                                <p className="detailInfoTitle">Stores:</p>
                                <div className="detailInfoWrapper">
                                    {gameCardStores !== null ? (
                                        <>
                                            {gameCardStores.map((store, index) => {
                                                return (
                                                    <p className="gameInfoLinkWrapper" key={store.store.id + index}>
                                                        <Link to={`/`} key={store.store.id + index}>
                                                            {store.store.name}
                                                        </Link>
                                                        {index === gameCardStores.length - 1 ? '' : ', '}
                                                    </p>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        'NA'
                                    )}
                                </div>
                            </li>
                        </ul>

                        <button className="addToCartBtn">Add to cart</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ValidatedComponent(gameCard, gameCardSchema);
