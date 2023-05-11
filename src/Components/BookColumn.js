import React from 'react';
import '../Styles/Table.css';

const BookColumn = ({ book }) => {
    const displayBook = () => {
        if (book) {
            return (
                <div className='book-container lex-col'>
                    <div className='left-side'>
                        <h5 className='title'>{book.Title}</h5>
                    </div>
                </div>
            );
        }
    };

    return <>{displayBook()}</>;
};

export default BookColumn;
