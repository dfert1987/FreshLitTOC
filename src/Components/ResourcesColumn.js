import React from 'react';
import printIcon from '../Assets/Icons/printIcon.svg';
import ebookIcon from '../Assets/Icons/ebookIcon.svg';
import pptIcon from '../Assets/Icons/pptIcon.svg';
import '../Styles/Table.css';

const ResourcesColumn = ({ book }) => {
    const displayResources = () => {
        if (book) {
            return (
                <div className='resources-container resources-col'>
                    <div className='language-section'>
                        <p className='language-header'>English</p>
                        <div className='icons'>
                            <a
                                href={book.DigitalLink_English}
                                title='Digital Link English'>
                                <img src={ebookIcon} alt='English Ebook' />
                            </a>
                            <a
                                href={book.PDFLink_English}
                                title='Printable Link English'>
                                <img src={printIcon} alt='English PDF' />
                            </a>
                            <a
                                href={book.PPTLink_English}
                                title='Slides Link English'>
                                <img src={pptIcon} alt='English PPT' />
                            </a>
                        </div>
                    </div>
                    <div className='language-section'>
                        <p className='language-header'>Spanish</p>
                        <div className='icons'>
                            <a
                                href={book.DigitalLink_Spanish}
                                title='Digital Link Spanish'>
                                <img src={ebookIcon} alt='Spanish Ebook' />
                            </a>
                            <a
                                href={book.PDFLink_Spanish}
                                title='Printable Link Spanish'>
                                <img src={printIcon} alt='Spanish PDF' />
                            </a>
                            <a
                                href={book.PPTLink_Spanish}
                                title='Slides Link Spanish'>
                                <img src={pptIcon} alt='Spanish PPT' />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return <>{displayResources()}</>;
};

export default ResourcesColumn;
