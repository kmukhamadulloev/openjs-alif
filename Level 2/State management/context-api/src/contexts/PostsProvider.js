import React, { useState } from 'react';
import PostsContext from './PostsContext';

const empty = {
    id: 0,
    author: {
        id: 1,
        avatar: 'https://lms.openjs.io/logo_js.svg',
        name: 'OpenJS',
    },
    content: null,
    photo: null,
    hit: false,
    hidden: false,
    likes: 0,
    likedByMe: false,
    tags: [],
    created: 0,
};

export default function PostsProvider(props) {
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
            hidden: false,
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
            hidden: true,
            likes: 10,
            likedByMe: false,
            created: 1603501200,
          },
    ]);
    const [edited, setEdited] = useState();

    const like = (id) => {
        setPosts((prevState) => prevState.map( o => {
            if (o.id !== id) {
                return o;
            }
    
            const likedByMe = !o.likedByMe;
            const likes = likedByMe ? o.likes + 1 : o.likes - 1;
            return {...o, likedByMe, likes};
        }));
    };

    const remove = (id) => {
        setPosts( prevState => prevState.filter( o => o.id !== id));
    };

    const toggleVisibility = (id) => {
        setPosts(prevState => prevState.map( o => {
            if (o.id !== id) {
                return o; 
            }
            const hidden = true;
            return {...o, hidden}
        }));
    };

    const edit = (id) => {
        setPosts(prevState => prevState.map( o => {
            if (o.id !== id) {
                return o; 
            }
            const hidden = false;
            return {...o, hidden}
        }));
    };

    const save = (post) => {
        setPosts(prevState => [{...post}, ...prevState]);
    };

    const cancel = () => {
        setEdited(empty);
    };

    const value = {
        posts,
        like,
        remove,
        toggleVisibility,
        edit,
        save,
        cancel,
        edited,
        setEdited
    };

    return (
        <PostsContext.Provider value={value}>
            {props.children}
        </PostsContext.Provider>
    )
}