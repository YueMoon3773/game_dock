import Masonry from 'react-masonry-css';

import { useFetchGetData } from '../../../hooks/useFetchData';

import PageLayout from '../../layout/PageLayout/PageLayout';
import GameCard from '../../base/GameCard/GameCard';

import './ViewGames.scss';

const baseGameApiUrl = import.meta.env.VITE_API_GAMES_URL;
const gameApiUrlKey = import.meta.env.VITE_API_GAMES_URL_KEY;

const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    740: 1,
};

import gamesDataTest from '../../../../data.json';

const ViewGames = () => {
    const gamesData = gamesDataTest.results;
    console.log({ gamesData });

    // const {
    //     data: gamesData,
    //     error: gamesError,
    //     loading: gamesLoading,
    //     refetch: gamesRefetch,
    //     newFetchUrl: gameNewFetchUrl,
    // } = useFetchGetData(`${baseGameApiUrl}/games?key=${gameApiUrlKey}`);

    return (
        <PageLayout pageType="normalPage">
            <section className="filterControllerSection"></section>
            <section className="gamesDisplaySection">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonryGrid"
                    columnClassName="masonryGridColumn"
                >
                    {gamesData.map((item, index) => {
                        return (
                            <GameCard
                                key={item.id}
                                // isGameCardLoading={''}
                                gameCardId={item.id}
                                gameCardSingleMediaDisplay={item.background_image}
                                gameCardMediaLibrary={item.short_screenshots}
                                gameCardPlatforms={item.platforms}
                                gameCardName={item.name}
                                gameCardReleaseDate={item.released}
                                gameCardGenres={item.genres}
                                gameCardRating={item.rating}
                                gameCardStores={item.stores}
                            ></GameCard>
                        );
                    })}
                </Masonry>
            </section>
            <section className="paginationControllerSection"></section>
        </PageLayout>
    );
};

export default ViewGames;
