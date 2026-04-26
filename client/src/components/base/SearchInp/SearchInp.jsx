import { useState } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { SearchIcon, CrossEmptyIcon, CrossFullIcon } from '../../../assets/svgIcons';

import './SearchInp.scss';

const searchInpSchema = z
    .object({
        isHeaderSearchInp: z.boolean().optional(),
        issearchInpInBrightBg: z.boolean().optional(),
        searchInpPlaceHolder: z.string(),
        searchInpVal: z.string(),
        searchInpOnChangeHandler: z.function(),
        funcChangeSearchInpVal: z.function(),
    })
    .refine(
        (data) => {
            const bothHeaderVarsProvided =
                data.isHeaderSearchInp !== undefined && data.issearchInpInBrightBg !== undefined;
            const neitherHeaderVarsProvided =
                data.isHeaderSearchInp === undefined && data.issearchInpInBrightBg === undefined;
            return bothHeaderVarsProvided || neitherHeaderVarsProvided;
        },
        {
            message: 'isHeaderSearchInp and issearchInpInBrightBg must be provided together or not at all',
        },
    );

const SearchInp = ({
    isHeaderSearchInp,
    issearchInpInBrightBg,
    searchInpPlaceHolder,
    searchInpVal,
    searchInpOnChangeHandler,
    funcChangeSearchInpVal,
}) => {
    const [isSearchBtnHover, setIsSearchBtnHover] = useState(false);
    const [isDeleteInpValBtnHover, setIsDeleteInpValBtnHover] = useState(false);

    return (
        <div
            className={`searchInpWrapper ${isHeaderSearchInp ? 'headerSearchInp' : ''} ${issearchInpInBrightBg ? 'searchInpInBrightBg' : ''}`}
        >
            <input
                type="text"
                className={`searchInp ${isHeaderSearchInp ? 'headerSearchInp' : ''} ${issearchInpInBrightBg ? 'searchInpInBrightBg' : ''}`}
                placeholder={searchInpPlaceHolder}
                value={searchInpVal}
                onChange={(e) => {
                    searchInpOnChangeHandler(e);
                }}
            />
            <button
                className={`clearSearchInpValBtn ${isHeaderSearchInp ? 'headerSearchInp' : ''} ${issearchInpInBrightBg ? 'searchInpInBrightBg' : ''}`}
                onMouseEnter={() => setIsDeleteInpValBtnHover(true)}
                onMouseLeave={() => setIsDeleteInpValBtnHover(false)}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    funcChangeSearchInpVal('');
                }}
            >
                {isDeleteInpValBtnHover ? <CrossFullIcon></CrossFullIcon> : <CrossEmptyIcon></CrossEmptyIcon>}
            </button>
            <button
                className={`searchBtn ${isHeaderSearchInp ? 'headerSearchInp' : ''} ${issearchInpInBrightBg ? 'searchInpInBrightBg' : ''}`}
                onMouseEnter={() => setIsSearchBtnHover(true)}
                onMouseLeave={() => setIsSearchBtnHover(false)}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <SearchIcon></SearchIcon>
            </button>
        </div>
    );
};

export default ValidatedComponent(SearchInp, searchInpSchema);
