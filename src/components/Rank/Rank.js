import React from 'react';

const Rank = ({ name, entries }) => {
    console.log('name');
    console.log({name});
    console.log( 'entries');
    console.log({entries});
    return (
        <div className="Rank">
            <span>{`${name} your current entry count is...`}</span>
            <span>{entries}</span>
        </div>
    )
}

export default Rank;