import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useVideoBgChange } from '../../../hooks/useVideoBgChange';

import PageLayout from '../../layout/PageLayout/PageLayout';

import './ErrorPage.scss';

const ErrorPage = () => {
    const { bgVideo, isBgVideoBright, bgPosterImg, changeBgVideo } = useVideoBgChange();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.66, ease: 'easeInOut' }}
        >
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
        </motion.div>
    );
};

export default ErrorPage;
