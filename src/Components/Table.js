import React, { useEffect, useState } from 'react';
import { v2data } from '../Assets/Data/V2';
import '../Styles/Table.css';

export const Table = () => {
    const data = v2data;
    // ***** change this to switch between data sets

    const [titles, setTitles] = useState();
    const [genres, setGenres] = useState();
    const [authors, setAuthors] = useState();
    const [lexiles, setLexiles] = useState();
    const [synops, setSynops] = useState();

    useEffect(() => {
        let justTitles = data.map((item) => item.Title);
        setTitles(justTitles);

        let justGenres = data.map((item) => item.Genre);
        setGenres(justGenres);

        let justAuthors = data.map((item) => item.Author);
        setAuthors(justAuthors);

        let justLexiles = data.map((item) => item.Lexile);
        setLexiles(justLexiles);

        let justSynops = data.map((item) => item.Synopsis);
        setSynops(justSynops);
    }, [data]);

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
            <div className='table-body lex-col'></div>
        </div>
    );
};

export default Table;
