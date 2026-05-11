import { Link } from 'react-router-dom';

import { useVideoBgChange } from '../../../hooks/useVideoBgChange';

import IntroBgVideo1 from '../../../assets/videos/hollowKnightBg1.webm';
import IntroBgVideo2 from '../../../assets/videos/hollowKnightBg2.webm';
import IntroBgVideo3 from '../../../assets/videos/hollowKnightBg3.webm';
import IntroBgVideo4 from '../../../assets/videos/hollowKnightBg4.webm';
import IntroBgImg from '../../../assets/img/poster/hollowKnightBgPoster.jpg';

import PageLayout from '../../layout/PageLayout/PageLayout';

import './ErrorPage.scss';

const ErrorPage = () => {
    const { bgVideo, isBgVideoBright, bgPosterImg, changeBgVideo } = useVideoBgChange();

    return (
        <PageLayout
            pageType={'errorPage'}
            bgVideo={bgVideo}
            bgPosterImg={bgPosterImg}
            isBgVideoBright={isBgVideoBright}
        >
            <div className="introCard errorPage">
                <div className="introCardTop">
                    <h1>Something isn't working. Please try again later.</h1>
                </div>

                <div className="introCardBottom">
                    <Link to="/" className="introPageBtn" onClick={changeBgVideo}>
                        <span>Go back to Home Page</span>
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;
