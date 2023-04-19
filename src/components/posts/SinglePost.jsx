import React from 'react';
import { Link } from 'react-router-dom';

function SinglePost({ item }) {
  // console.log('item ===', item);
  return (
    <div className="card shadow-1">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{item?.author}</h6>
        <p className="card-text">{item?.body}</p>
        <div>Tags: {item?.tags}</div>
        <Link to={`/posts/`} className="btn btn-secondary">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default SinglePost;
