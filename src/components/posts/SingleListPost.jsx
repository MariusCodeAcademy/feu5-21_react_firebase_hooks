import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthProvider';

function SingleListPost({ item }) {
  const { user } = useAuthCtx();
  // console.log('item ===', item);
  return (
    <div className="card">
      <img src={item?.image} className="card-img-top w-50" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
        <p className="card-text">{item.body}</p>
        <p className="card-text">{item.date}</p>
        <h3 className="lead">Tags:</h3>
        <div className="d-flex gap-2 mb-3">
          {item?.tags.map((tag) => (
            <span key={tag} className="badge fs-6  bg-info text-dark">
              {tag}
            </span>
          ))}
        </div>
        {/* rodyti delete mygtuka tik autoriui */}
        {user.uid === item.userUid && (
          <button className="btn btn-danger">Delete</button>
        )}
        <Link to={`/posts/${item.uid}`} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SingleListPost;
