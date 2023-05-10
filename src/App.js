import React from 'react';
import { Banner } from './Components/Banner';
import { Main } from './Components/Main';
import { Table } from './Components/Table';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Banner />
            <Main />
            <Table />
        </div>
    );
}

export default App;
