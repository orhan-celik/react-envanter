import React from 'react'
import {MdDangerous} from 'react-icons/md';
import {AiFillCheckCircle , AiFillWarning} from 'react-icons/ai';

const Message = ({data}) => {

    const {color, message, type, show} = data;

    return (

        show ? (
            <div className="flex h-screen items-center justify-center">
                <div className={color+ ' rounded-full flex items-center py-2 px-4 gap-2 h-fit w-fit shadow-2xl text-white'}>
                { (type=='error') ? <MdDangerous size={22} /> : '' }
                { (type=='success') ? <AiFillCheckCircle size={22} /> : '' }
                { (type=='warning') ? <AiFillWarning size={22} /> : '' }
                {message}
                </div>
            </div>
        ) : ''

    )
}

export default Message
