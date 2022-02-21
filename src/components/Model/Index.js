import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Add from 'components/Model/Add'
import List from 'components/Model/List'
import IsLoading from 'components/IsLoading';
import Title from 'components/Title';
import Message from 'components/Message';
import { getModelsAsync } from 'redux/modelSlice';
import { getBrandsAsync } from 'redux/brandSlice';

const Index = () => {

    const dispatch  = useDispatch();
    const loading   = useSelector((state) => state.model.loading);
    const info      = useSelector((state) => state.model.info);

    useEffect(() => {
        dispatch(getModelsAsync());
        dispatch(getBrandsAsync());
    },[]);

    const modeller  = useSelector((state) => state.model.data);
    const title     = useSelector((state) => state.model.title);
    const markalar  = useSelector((state) => state.brand.data);

    return (
        (
            <>
                <Message data={info} />
                {loading && <IsLoading />}
                <Title title={title} />
                <Add markalar={markalar} />
                <List modeller={modeller} />
            </>
        )
    )
}

export default Index