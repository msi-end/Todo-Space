import React from 'react';
import { IoTrashBin } from 'react-icons/io5'


const itemsList = ({ items, clicked, DelList }) => {
    return (
        <>
            {
                items.length ? (
                    <>
                        {items.map((e) => (
                            <div className='main animate__animated animate__bounceInRight' key={e.id} style={(e.click) ? { background: "#d1d1d1", textDecoration: 'line-through' } : null}>
                                <div class="checkbox-wrapper-12">
                                    <div class="cbx">
                                        <input id="cbx-12" type="checkbox" checked={e.click} onClick={() => clicked(e.id)} style={(e.click) ? { backgroundColor: 'red' } : null}/>
                                        <label for="cbx-12"></label>
                                        <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='text'>
                                    <h5 style={(e.click) ? { textDecoration: 'line-through' } : null} >{e.newTitle}</h5>
                                    <span style={(e.click) ? { textDecoration: 'line-through' } : null}>{e.newSubTitle ? e.newSubTitle : '---------'}</span>
                                </div>
                                <span className='del' onClick={() => DelList(e.id)} > <IoTrashBin style={(e.click) ? { fill: 'white' } : null} size={25} /></span>
                            </div>
                        ))}
                    </>
                ) : (
                    <span className='empty'>Empty list</span>
                )

            }
        </>)
}

export default itemsList;