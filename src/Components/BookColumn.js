import React from 'react';
import '../Styles/Table.css';

const BookColumn = ({ book }) => {
    const displayBook = () => {
        if (book) {
            return (
                <div className='book-container lex-col'>
                    <div className='left-side'>
                        <h5 className='title'>{book.Title}</h5>
                        <p className='genre-author'>
                            {book.Genre} {book.Author}
                        </p>
                        <i className='synopsis'>{book.Synopsis}</i>
                    </div>
                    <div className='right-side'>
                        <p className='lexile'>{book.Lexile}</p>
                    </div>
                </div>
            );
        }
    };

    return <>{displayBook()}</>;
};

export default BookColumn;
