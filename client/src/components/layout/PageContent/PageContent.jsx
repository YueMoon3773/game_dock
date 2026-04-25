import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import SideBar from '../SideBar/SideBar';

import basePageStyles from '../../../styles/modules/basePageStyles.module.scss';
import './PageContent.scss';

const pageContentSchema = z.object({
    pageType: z.string(),
    children: z.unknown().optional(),
});

const PageContent = ({ pageType, children }) => {
    let pageContentClassName;
    switch (pageType) {
        case 'normalPage':
            pageContentClassName = `${basePageStyles.pageBgHasColor} pageContentWrapper normalPage`;
            break;
        case 'introPage':
            pageContentClassName = `${basePageStyles.pageContent} pageContentWrapper introPage`;
            break;
        default:
            pageContentClassName = `${basePageStyles.pageContent} pageContentWrapper`;
    }

    return (
        <div className={pageContentClassName}>
            {pageType === 'normalPage' ? (
                <>
                    <SideBar></SideBar>
                    {children}
                </>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

export default ValidatedComponent(PageContent, pageContentSchema);
