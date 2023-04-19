import React from 'react';
import { Link } from 'react-router-dom';

function SingleListPost({ item }) {
  // console.log('item ===', item);
  return (
    <div className="card">
      <img src={item?.image} className="card-img-top w-50" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
        <p className="card-text">{item.body}</p>
        <h3 className="lead">Tags:</h3>
        <div className="d-flex gap-2 mb-3">
          {item?.tags.map((tag) => (
            <span key={tag} className="badge fs-6  bg-info text-dark">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/posts/${item.uid}`} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SingleListPost;
