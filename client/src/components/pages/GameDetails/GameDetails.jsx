import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { z } from 'zod';
import { motion } from 'framer-motion';

import { useFetchGetData } from '../../../hooks/useFetchData';

import {
    BackBtnIcon,
    BackBtnHoverIcon,
    PrevImgInMediaLibraryIcon,
    PrevImgInMediaLibraryHoverIcon,
    NextImgInMediaLibraryIcon,
    NextImgInMediaLibraryHoverIcon,
} from '../../../assets/svgIcons';
import ValidatedComponent from '../../../utils/validateComponentProps';
import NoImgAvailable from '../../../assets/img/prj/no_image_found.png';

import PageLayout from '../../layout/PageLayout/PageLayout';

import pageBaseStyles from '../../../styles/modules/basePageStyles.module.scss';
import './GameDetails.scss';

const gameDetailsSchema = z.object({});

import gameDetailsData from '../../../../details.json';
import gameDetailsImgData from '../../../../details_img.json';

const GameDetails = () => {
    const location = useLocation();
    const locationStates = location.state;

    const [navigatePrevPageBtnHover, setNavigatePrevPageBtnHover] = useState(false);

    const [carouselBtnLeftBtnHover, setCarouselBtnLeftBtnHover] = useState(false);
    const [carouselBtnRightBtnHover, setCarouselBtnRightBtnHover] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [imgList, setImgList] = useState(null);

    console.log({ imgList });

    console.log({ locationStates });

    useEffect(() => {
        if (gameDetailsImgData !== null) {
            setImgList(gameDetailsImgData.results);
        } else {
            if (locationStates !== null) {
                setImgList(locationStates.gameMediaLibrary);
            }
        }
    }, [gameDetailsData, gameDetailsImgData]);

    const previousCarouselImgClickHandle = () => {
        if (!imgList) return;
        else setCurrentImageIndex(currentImgIndex === 0 ? imgList.length - 1 : currentImgIndex - 1);
    };

    const nextCarouselImgClickHandle = () => {
        if (!imgList) return;
        else setCurrentImageIndex((currentImgIndex + 1) % imgList.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.66, ease: 'easeInOut' }}
        >
            <PageLayout pageType={'normalPage'}>
                <div className="gameDetailsWrapper">
                    <div className="detailsTopWrapper">
                        <Link
                            to={locationStates.fromUrl ? locationStates.fromUrl : '/'}
                            className="navigatePrevPage"
                            onMouseEnter={() => setNavigatePrevPageBtnHover(true)}
                            onMouseLeave={() => setNavigatePrevPageBtnHover(false)}
                        >
                            {navigatePrevPageBtnHover ? (
                                <BackBtnHoverIcon></BackBtnHoverIcon>
                            ) : (
                                <BackBtnIcon></BackBtnIcon>
                            )}
                            Go back
                        </Link>
                        <h1 className="detailsName">{gameDetailsData.name}</h1>
                    </div>

                    <div className="detailsBottomWrapper">
                        <div className="detailsImgCarouselWrapper">
                            {imgList !== null ? (
                                <div className="detailsImgCarousel">
                                    <button
                                        className="carouselBtn carouselBtnLeft"
                                        onMouseEnter={() => setCarouselBtnLeftBtnHover(true)}
                                        onMouseLeave={() => setCarouselBtnLeftBtnHover(false)}
                                        onClick={previousCarouselImgClickHandle}
                                    >
                                        {carouselBtnLeftBtnHover ? (
                                            <PrevImgInMediaLibraryHoverIcon></PrevImgInMediaLibraryHoverIcon>
                                        ) : (
                                            <PrevImgInMediaLibraryIcon></PrevImgInMediaLibraryIcon>
                                        )}
                                    </button>

                                    <div className="detailsImgWrapper">
                                        {imgList.map((item, index) => {
                                            return (
                                                <img
                                                    key={item.id + index}
                                                    className={`gameDetailImg ${currentImgIndex === index ? 'show' : 'hidden'}`}
                                                    src={item.image}
                                                    alt="game image"
                                                />
                                            );
                                        })}
                                    </div>

                                    <button
                                        className="carouselBtn carouselBtnRight"
                                        onMouseEnter={() => setCarouselBtnRightBtnHover(true)}
                                        onMouseLeave={() => setCarouselBtnRightBtnHover(false)}
                                        onClick={nextCarouselImgClickHandle}
                                    >
                                        {carouselBtnRightBtnHover ? (
                                            <NextImgInMediaLibraryHoverIcon></NextImgInMediaLibraryHoverIcon>
                                        ) : (
                                            <NextImgInMediaLibraryIcon></NextImgInMediaLibraryIcon>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="detailsInfoWrapper"></div>
                    </div>
                </div>
            </PageLayout>
        </motion.div>
    );
};

export default ValidatedComponent(GameDetails, gameDetailsSchema);
