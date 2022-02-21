import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Add from 'components/Brand/Add'
import List from 'components/Brand/List'
import IsLoading from 'components/IsLoading';
import Title from 'components/Title';
import Message from 'components/Message';
import { getBrandsAsync } from 'redux/brandSlice';

const Index = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.brand.loading);
    const info = useSelector((state) => state.brand.info);

    useEffect(() => {
        dispatch(getBrandsAsync());
    }, [])

    return (
        (


            <>
                <Message data={info} />
                {loading ? <IsLoading /> : (
                    <>
                        <Title title={'Markalar'} />
                        <Add />
                        <List />
                    </>
                )}
            </>
        )
    )
}

export default Index