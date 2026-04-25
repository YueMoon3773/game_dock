import { useState } from 'react';
import { z } from 'zod';

import { useTheme } from '../../../hooks/useTheme';
import ValidatedComponent from '../../../utils/validateComponentProps';

import IntroBgVideo from '../../../assets/videos/hollowKnightBg2.webm';
import IntroBgImg from '../../../assets/img/poster/hollowKnightBgPoster.jpg';

import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';

import basePageStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageLayout.scss';

const pageLayoutSchema = z.object({
    pageType: z.string(),
    children: z.unknown().optional(),
});

const PageLayout = ({ pageType, children }) => {
    const { theme } = useTheme();
    const [isBgVideoReady, setIsBgVideoReady] = useState(false);

    return (
        <div className={`${basePageStyles.page}`} data-theme={theme}>
            {pageType === 'introPage' && (
                <div className="introBgVideoWrapper">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={IntroBgImg}
                        onLoadedData={() => setIsBgVideoReady(true)}
                        className={`bgVideo ${isBgVideoReady ? 'visible' : 'hidden'}`}
                    >
                        <source src={IntroBgVideo} type="video/mp4" />
                    </video>
                </div>
            )}

            <Header pageType={pageType}></Header>
            <PageContent pageType={pageType}>{children}</PageContent>
        </div>
    );
};

export default ValidatedComponent(PageLayout, pageLayoutSchema);
