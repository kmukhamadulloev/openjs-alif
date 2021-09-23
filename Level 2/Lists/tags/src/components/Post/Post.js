import React from 'react';
import './Post.css';

function Post(props) {
    return (
        <article>
            <header>
                <img src={props.post.author.avatar} class="Post-avatar" width="50" height="50" alt={props.post.author.name} />
                <h5>{props.post.author.name}</h5>
                <div>{props.post.created}</div>
                { props.post.hit ? <span>HIT</span> : null }
            </header>
            <div>
                <div class="Post-content">{props.post.content}</div>
                <img src={props.post.photo} alt="photo" class="Post-photo" />
            </div>
            <footer>
                <span class="Post-likes">
                    <img src={ props.post.likedByMe ? "https://lms.openjs.io/liked.svg" : "https://lms.openjs.io/unliked.svg" } width="20" height="20" />
                    <span class="Post-likes-count">{props.post.likes}</span>
                </span>
            </footer>
        </article>
    )
}

export default Post
