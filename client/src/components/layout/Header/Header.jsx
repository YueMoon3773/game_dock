import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import { CartIcon } from '../../../assets/svgIcons';
import LogoImg from '../../../assets/img/LogoImg.png';
import SearchInp from '../../base/SearchInp/SearchInp';

import basePageStyles from '../../../styles/modules/basePageStyles.module.scss';
import './Header.scss';

const headerSchema = z.object({
    pageType: z.string(),
});

const Header = ({ pageType }) => {
    const [searchInpVal, setSearchInpVal] = useState('');

    const searchInpOnChangeHandle = (e) => {
        setSearchInpVal(e.target.value);
    };

    return (
        <header className={`${basePageStyles.pageHeader}`}>
            <Link to="/" className={`headerLogo ${pageType === 'introPage' ? 'introHeader' : ''}`}>
                <img src={LogoImg} alt="" className="headerLogoImg" />
                <span>Gamio</span>
            </Link>

            <SearchInp
                isHeaderSearchInp={true}
                searchInpPlaceHolder={'Search game, genre, ...'}
                searchInpVal={searchInpVal}
                searchInpOnChangeHandler={searchInpOnChangeHandle}
                funcChangeSearchInpVal={setSearchInpVal}
            ></SearchInp>

            <div className="headerControllerWrapper">
                <button className={`cartBtn ${pageType === 'introPage' ? 'introPage' : ''}`}>
                    <CartIcon></CartIcon>
                </button>
            </div>
        </header>
    );
};

export default ValidatedComponent(Header, headerSchema);
