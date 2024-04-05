import React from 'react'

function NewsItem({id,title,content,image,group}) {
    return (
        <div className="newsItemContainer">
            <div className="newsItem__img-container">
                <img src={image} alt={title}/>
            </div>
            <div className="newsItem__text">
                <h6>{group}</h6>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default NewsItem