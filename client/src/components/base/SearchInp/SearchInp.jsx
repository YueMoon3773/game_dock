import { useState } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { SearchIcon, CrossEmptyIcon, CrossFullIcon } from '../../../assets/svgIcons';

import './SearchInp.scss';

const searchInpSchema = z.object({
    isHeaderSearchInp: z.boolean().optional(),
    searchInpPlaceHolder: z.string(),
    searchInpVal: z.string(),
    searchInpOnChangeHandler: z.function(),
    funcChangeSearchInpVal: z.function(),
});

const SearchInp = ({
    isHeaderSearchInp,
    searchInpPlaceHolder,
    searchInpVal,
    searchInpOnChangeHandler,
    funcChangeSearchInpVal,
}) => {
    const [isSearchBtnHover, setIsSearchBtnHover] = useState(false);
    const [isDeleteInpValBtnHover, setIsDeleteInpValBtnHover] = useState(false);

    return (
        <div className={`searchInpWrapper ${isHeaderSearchInp ? 'headerSearchInp' : ''}`}>
            <input
                type="text"
                className={`searchInp ${isHeaderSearchInp ? 'headerSearchInp' : ''}`}
                placeholder={searchInpPlaceHolder}
                value={searchInpVal}
                onChange={(e) => {
                    searchInpOnChangeHandler(e);
                }}
            />
            <button
                className={`clearSearchInpValBtn ${isHeaderSearchInp ? 'headerSearchInp' : ''}`}
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
                className={`searchBtn ${isHeaderSearchInp ? 'headerSearchInp' : ''}`}
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
