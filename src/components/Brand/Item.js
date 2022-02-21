import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrandAsync, setSelected, updateBrandAsync } from '../../redux/brandSlice';
import { Popconfirm } from 'antd';

const CategoryItem = ({item}) => {

    const dispatch = useDispatch();

    const selected = useSelector((state) => state.brand.selected);

    const handleDeleteClick = (e) => {

        e.preventDefault();
        dispatch(setSelected([]));
        dispatch(deleteBrandAsync({
            id:item.id
        }))

    }

    const handleChange = (e) => {
        e.preventDefault();
        let newSelected = {
            id      : item.id,
            title   : e.target.value
        };
        dispatch(setSelected(newSelected))
    }

    const handleSelectClick = (e) => {
        e.preventDefault(); 
        dispatch(setSelected(item));
    }

    const handleUpdateClick = (event) => {
        event.preventDefault();
        if(selected.title!=''){

            dispatch(updateBrandAsync(selected))

        }
    }

    return (
        (
            <li className="flex py-1 border-b border-header-border-color border-dashed justify-between">
                {selected.id === item.id ? (
                    <>
                        <div className='w-[85%]'>
                            <input type="text" id={`marka_${item.id}`} className='w-full outline-0 border border-header-border-color rounded-full px-3 h-8' onChange={handleChange} value={selected.title} />
                        </div>
                        <div className='flex gap-2'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-small py-1 px-4 rounded-full cursor-pointer" onClick={handleUpdateClick}>Güncelle</button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-small py-1 px-4 rounded-full cursor-pointer" onClick={ (e) => { e.preventDefault(); dispatch(setSelected([])); }}>İptal</button>
                        </div>
                    </>
                ) : (

                    <>
                        <div>{ item.title }</div>
                        <div className='flex gap-2'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-small py-1 px-4 rounded-full cursor-pointer" onClick={handleSelectClick}>Düzenle</button>
                            <Popconfirm className="bg-red-500 hover:bg-red-700 text-white font-small py-1 px-4 rounded-full cursor-pointer" title="Silmek istediğinize emin misiniz ?" okText="Evet" cancelText="Hayır" onConfirm={handleDeleteClick}>
                            Sil
                            </Popconfirm>
                        </div>
                    </>
                )}
            </li>
        )
    )
}

export default CategoryItem
