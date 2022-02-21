import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addModelAsync } from '../../redux/modelSlice';
import { Card, Modal, Alert } from 'antd';

import { useFormik } from 'formik';
import validationSchema from './validation'

const Add = ({markalar}) => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.model.result);
    
    const initialValues = {
        title : '',
        brand : 0
    };

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            let promise = dispatch(addModelAsync(values))
            promise.then((res) => {
                if(res.payload.responseData.result == 'success'){
                    resetForm();
                }
            });
        }
    });

    return (
        <>
            <div className='flex items-center justify-center my-4 px-4'>
                <div className='w-full shadow-lg'>
                    <Card title="Yeni Ekle">
                        <div className='flex flex-row'>
                            <form onSubmit={handleSubmit} className='flex flex-col w-full'>

                                <div className='flex w-full'>
                                    <div className='flex flex-col w-1/2'>
                                        <div className='flex gap-4 justify-items-center'>
                                            <label htmlFor="brand" className='font-bold'>Marka</label>
                                            <div className='flex flex-col flex-1'>

                                                <select 
                                                name="brand" 
                                                id="brand"
                                                value={values.brand}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${(result!=null && result.invalid.brand) || (errors.brand && touched.brand) ? `border-red-500` : null}`}
                                                >
                                                    <option value={0}>Seçiniz !!!</option>
                                                    {markalar.map((item) => (
                                                        <option value={item.id} key={item.id}>{item.title}</option>
                                                    ))}
                                                </select>

                                                {errors.brand && touched.brand ? (
                                                    <div className='text-xs text-red-500 text-bold'>{errors.brand}</div>
                                                ) : null}

                                                {result!=null && result.invalid.brand ? (
                                                    <div className='text-xs text-red-500 text-bold'>{result.invalid.brand}</div>
                                                ) : null}

                                            </div>

                                        </div>

                                    </div>


                                    <div className='flex flex-col w-1/2'>
                                        <div className='flex gap-4 justify-items-center'>
                                            <label htmlFor="title" className='font-bold'>Model</label>
                                            <div className='flex flex-col flex-1'>
                                                <input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${(result!=null && result.invalid.title) || (errors.title && touched.title) ? `border-red-500` : null}`}
                                                />

                                                {errors.title && touched.title ? (
                                                    <div className='text-xs text-red-500 text-bold'>{errors.title}</div>
                                                ) : null}

                                                {result!=null && result.invalid.title ? (
                                                    <div className='text-xs text-red-500 text-bold'>{result.invalid.title}</div>
                                                ) : null}

                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className='flex w-full'>
                                    <div className='flex flex-row'>
                                        <button type="submit" className='bg-sky-600 hover:bg-sky-700 text-white py-1 px-4 ml-2 rounded-full cursor-pointer'>Ekle</button>
                                    </div>
                                    <div className='flex flex-col'></div>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Add