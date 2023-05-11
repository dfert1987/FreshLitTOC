import React, { useEffect, useState } from 'react';
import BookColumn from './BookColumn';
import { v2data } from '../Assets/Data/V2';
import '../Styles/Table.css';

export const Table = () => {
    const data = v2data;
    // ***** change this to switch between data sets

    const getAllRows = () => {
        if (data) {
            return data.map((row, i) => (
                <div className='table-row all-columns col-7' key={i}>
                    <BookColumn book={row} />
                </div>
            ));
        }
    };

    return (
        <div className='table-container all-columns col-14'>
            <div className='table-headers all-columns col-7'>
                <div className='lexile-header lex-col'>
                    <h5 className='header lex'>Lexile</h5>
                </div>
                <div className='skills-header skills-col'>
                    <h5 className='header skills'>Key Skills</h5>
                </div>
                <div className='connections-header connections-col'>
                    <h5 className='header connections'>
                        Connections to <i>Into Literature</i>{' '}
                    </h5>
                </div>
                <div className='resources-header resources-col'>
                    <h5 className='header resources'>Resources</h5>
                </div>
            </div>
            <div className='table-body all-columns col-7'>
                {getAllRows()}
                {/* <BookColumn data={data} /> */}
            </div>
        </div>
    );
};

export default Table;
