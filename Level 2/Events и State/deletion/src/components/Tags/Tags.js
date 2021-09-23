import React from 'react';

function Tags({tags}) {
    return (
        <div>
            теги: {tags.map( o => <button key={o}>#{o}</button>)}
        </div>
    )
}

export default Tags;
