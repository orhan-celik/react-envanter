import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Add from 'components/Category/Add'
import List from 'components/Category/List'
import IsLoading from 'components/IsLoading';
import Title from 'components/Title';
import { getCategoriesAsync } from 'redux/categorySlice';


const Index = () => {
    
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.category.loading);

    useEffect(() => {
        dispatch(getCategoriesAsync());
    }, [])

    return (
        (
            <>
                {loading ? <IsLoading /> : (
                        <>
                            <Title title={'Kategoriler'} />
                            <Add />
                            <List />
                        </>
                    ) }
            </>
        )
    )
}

export default Index