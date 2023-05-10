import React from 'react';
import { v2data } from '../Assets/Data/V2';
import printIcon from '../Assets/Icons/printIcon.svg';
import ebookIcon from '../Assets/Icons/ebookIcon.svg';
import pptIcon from '../Assets/Icons/pptIcon.svg';
import '../Styles/Table.css';

export const Table = () => {
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
        </div>
    );
};

export default Table;
