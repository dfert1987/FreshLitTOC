import React from 'react';
import '../Styles/Table.css';

const ConnectionsColumn = ({ book }) => {
    const displayConnections = () => {
        if (book) {
            return (
                <div className='connections-container connections-col'>
                    <p>
                        Grade {book.Connection1Grade} Unit{' '}
                        {book.Connection1Unit}: {book.Connection1Title}
                    </p>
                    <p>
                        Grade {book.Connection2Grade} Unit{' '}
                        {book.Connection2Unit}: {book.Connection2Title}
                    </p>
                    <p>
                        Grade {book.Connection3Grade} Unit{' '}
                        {book.Connection3Unit}: {book.Connection3Title}
                    </p>
                    {book.Connection4Grade ? (
                        <p>
                            Grade {book.Connection4Grade} Unit{' '}
                            {book.Connection4Unit}: {book.Connection4Title}
                        </p>
                    ) : null}
                </div>
            );
        }
    };

    return <>{displayConnections()}</>;
};

export default ConnectionsColumn;
