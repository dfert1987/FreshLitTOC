import React from 'react';
import '../Styles/Table.css';

const SkillsColumn = ({ book }) => {
    const displaySkills = () => {
        if (book) {
            return (
                <div className='skills-container skills-col'>
                    <ul className='skills'>
                        <li className='skill'>{book.Skill1}</li>
                        <li className='skill'>{book.Skill2}</li>
                    </ul>
                </div>
            );
        }
    };

    return <>{displaySkills()}</>;
};

export default SkillsColumn;
