import React from 'react';
import { Link } from "react-router-dom";

import { BsArrowLeftShort } from 'react-icons/bs';

const Title = ({title}) => {
    return (
        <>
            <div className='flex flex-row justify-between items-center bg-gray-200 p-2 border-b border-header-border-color shadow-sm sticky top-0 z-10'>
                <div className='text-lg'>{title}</div>
                <div className='flex flex-row items-center'><BsArrowLeftShort size={24} /> <div className='text-sm'>Geri</div></div>
            </div>
        </>
    );
}

export default Title

