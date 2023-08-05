import React from 'react'

const NewsItem =(props)=> {
    //destructuring
    //getting the value (object) from props and putting it in title and desc
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div>
            <span className="badge rounded-pill bg-dark"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
              }}>
              {source}
            </span>
          </div>
          {/* replace(/\/$/, "") - it is used to remove space from url */}
          <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-100675340,width-1070,height-580,imgsize-8424,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl.replace(/\/$/, "")} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            {/* _blank will help to redirect to next page */}
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
