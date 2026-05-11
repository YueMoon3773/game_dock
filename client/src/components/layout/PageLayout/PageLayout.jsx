import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import ValidatedComponent from '../../../utils/validateComponentProps';

import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';

import basePageStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z
    .object({
        pageType: z.string(),
        bgVideo: z.string().optional(),
        isBgVideoBright: z.boolean().optional(),
        bgPosterImg: z.string().optional(),
        children: z.unknown().optional(),
    })
    .refine(
        (props) => {
            if (props.pageType === 'introPage' || props.pageType === 'errorPage') {
                if (
                    props.bgVideo === undefined ||
                    props.bgPosterImg === undefined ||
                    props.isBgVideoBright === undefined
                ) {
                    return false;
                } else return true;
            } else return true;
        },
        { message: 'bgVideo, isBgVideoBright, bgPosterImg must be provided in pageType = introPage or errorPage' },
    );

const PageLayout = ({ pageType, bgVideo, bgPosterImg, isBgVideoBright, children }) => {
    const { theme } = useTheme();
    const [isBgVideoReady, setIsBgVideoReady] = useState(false);

    let isPageInBrightBg = false;
    if (isBgVideoBright !== undefined) {
        isPageInBrightBg = isBgVideoBright;
    } else {
        isPageInBrightBg = theme === 'light' ? true : false;
    }

    let pageClassName;
    switch (pageType) {
        case 'introPage':
        case 'errorPage':
            pageClassName = `${basePageStyles.page}`;
            break;
        default:
            pageClassName = `${basePageStyles.page} ${basePageStyles.pageBgHasColor}`;
            break;
    }

    return (
        <div className={pageClassName} data-theme={theme}>
            {(pageType === 'introPage' || pageType === 'errorPage') && (
                <div className="introBgVideoWrapper">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={bgPosterImg}
                        onLoadedData={() => setIsBgVideoReady(true)}
                        className={`bgVideo ${isBgVideoReady ? 'visible' : 'hidden'}`}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </div>
            )}

            {pageType === 'introPage' || pageType === 'errorPage' ? (
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.36, ease: 'easeInOut' }}
                >
                    <Header pageType={pageType} isPageInBrightBg={isPageInBrightBg}></Header>
                </motion.div>
            ) : (
                <Header pageType={pageType} isPageInBrightBg={isPageInBrightBg}></Header>
            )}
            <PageContent pageType={pageType}>{children}</PageContent>
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
