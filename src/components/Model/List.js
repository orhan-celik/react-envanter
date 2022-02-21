import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item'
import { Card } from 'antd';
 
const List = ({title,modeller}) => {
    const data    = modeller
    return (
        
        (
            <div className='flex items-center justify-center my-4 px-4'>
            <div className='w-full'>
                <Card title={title}>
                    {
                        data.length > 0 ? (
                            <div className="card">
                                <div className="card-body">
                                    <div className="w-full flex flex-col list-group list-group-flush">
                                        {data.map((Brand, key) => {
                                            return (
                                                <Item item={Brand} key={key} />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="card-footer text-muted flex pt-3">
                                    <div className=" font-bold mr-1">{data.length}</div> Model
                                </div>
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">Henüz bir model eklenmemiş.</div>
                        )
                    }
                </Card>
            </div>
        </div>
        
    )
    )
}

export default List
