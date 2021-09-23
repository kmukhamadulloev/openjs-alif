import React from 'react';
import Tags from '../Tags/Tags';

function Post({post, setPosts}) {
    const { author } = post;
    const { photo } = post;

    const handleClick = () => {
        setPosts(post.id);
    }

    return (
        <article>
            <header>
                <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name} />
                <h5>{ author.name }</h5>
                <button onClick={handleClick} >удалить</button>
                <div>{ post.created }</div>
                { post.hit && <span>HIT</span> }
            </header>
            <div>
                <div className="Post-content">{ post.content ? post.content : null }</div>
                {photo && <img src={ photo.url } alt={ photo.alt } className="Post-photo"/>}
            </div>
            <footer>
                <span className="Post-likes">
                    <img src={ post.likedByMe ? 
                    'https://lms.openjs.io/liked.svg' : 
                    'https://lms.openjs.io/unliked.svg' }
                    alt="likes" 
                    width="20" 
                    height="20" 
                    />
                    <span className="Post-likes-count">{ post.likes }</span>
                    {post.tags && <Tags tags={ post.tags } />}
                </span>
            </footer>
        </article>
    )
}

export default Post;
