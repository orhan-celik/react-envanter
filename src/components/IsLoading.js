import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const IsLoading = () => {

    return (

        <div className="flex h-screen items-center justify-center">
            <div className='bg-indigo-500 rounded-full flex items-center py-2 px-4 gap-2 h-fit w-fit shadow-2xl text-white'>
                <AiOutlineLoading3Quarters className="rounded-full animate-spin ease duration-300 w-5 h-5" />Yükleniyor...
            </div>
        </div>

    )
}

export default IsLoading
