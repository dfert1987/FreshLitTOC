import React from 'react';
import printIcon from '../Assets/Icons/printIcon.svg';
import ebookIcon from '../Assets/Icons/ebookIcon.svg';
import pptIcon from '../Assets/Icons/pptIcon.svg';
import '../Styles/Main.css';

export const Main = () => {
    return (
        <div className='main-container all-columns col-14'>
            <div className='paragraph col-8'>
                <h1 className='intro-text'>
                    Assign these diverse and engaging stories with accompanying
                    lessons, all available in both English and Spanish for a
                    variety of purposes:
                </h1>

                <ul className='intro-bullets'>
                    <li>
                        <h2>
                            Providing instruction and practice with key ELA
                            skills
                        </h2>
                    </li>
                    <li>
                        <h2>
                            Supplementing the content of <i>Into Literature</i>{' '}
                            units
                        </h2>
                    </li>
                    <li>
                        <h2>
                            Meeting students at their current or stretch Lexile
                            levels
                        </h2>
                    </li>
                    <li>
                        <h2>
                            Ensuring equity for students whose home language in
                            Spanish
                        </h2>
                    </li>
                    <li>
                        <h2>
                            Giving students independent reading opportunities
                        </h2>
                    </li>
                </ul>
            </div>
            <div className='key-container col-right'>
                <div className='key'>
                    <h3 className='key-header'>Key to Icons</h3>
                    <div className='key-main'>
                        <span className='key-item'>
                            <img
                                src={ebookIcon}
                                alt='ebook Icon'
                                className='key-icon'
                            />
                            <h4 className='key-text'>Online</h4>
                        </span>
                        <span className='key-item'>
                            <img
                                src={printIcon}
                                alt='Printable Icon'
                                className='key-icon'
                            />
                            <h4 className='key-text'>Printable</h4>
                        </span>
                        <span className='key-item'>
                            <img
                                src={pptIcon}
                                alt='Lesson Slides Icon'
                                className='key-icon'
                            />
                            <h4 className='key-text last'>Lesson Slides</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
