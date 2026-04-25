import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './MainBtn.scss';

const mainBtnSchema = z.object({
    btnClassName: z.string().optional(),
    btnOnClickHandler: z.function(),
    children: z.unknown().optional(),
});

const MainBtn = ({ btnClassName, btnOnClickHandler, children }) => {
    return (
        <button
            className={`mainBtn ${btnClassName}`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                btnOnClickHandler();
            }}
        >
            {children}
        </button>
    );
};

export default ValidatedComponent(MainBtn, mainBtnSchema);
