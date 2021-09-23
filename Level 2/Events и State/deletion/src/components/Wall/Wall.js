import React, {useState} from 'react';
import Post from '../Post/Post';

function Wall() {
    const [posts, setPosts] = useState([
        {
            id: 1, 
            author: {
              id: 1,
              avatar: 'https://lms.openjs.io/logo_js.svg',
              name: 'OpenJS',
            },
            content: 'Ну как, вы справились с домашкой?',
            photo: {
                url: 'https://lms.openjs.io/openjs.jpg',
                alt: 'openjs logo',
            },
            hit: true,
            likes: 222,
            likedByMe: true,
            tags: ['deadline', 'homework'],
            created: 1603501200,
        },
        {
            id: 2, 
            author: {
              id: 2,
              avatar: 'https://lms.openjs.io/logo_js.svg',
              name: 'OpenJS',
            },
            content: null,
            photo: {
                url: 'https://lms.openjs.io/openjs.jpg',
                alt: 'openjs logo',
            },
            hit: true,
            likes: 10,
            likedByMe: true,
            created: 1603501200,
        },
    ]);

    const handlePostRemove = (id) => {
        setPosts((prevState) => prevState.filter(i => i.id !== id));
    }

    const handlePostHide = (id) => {
        console.log('Fuck you!');
    }

    return (
        <div>
            { posts.map( i => <Post key={i.id} post={i} setPosts={handlePostRemove} onHide={handlePostHide} />) }
        </div>
    )
}

export default Wall;
