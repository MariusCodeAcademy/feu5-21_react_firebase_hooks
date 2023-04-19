import { collection, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import SingleListPost from '../components/posts/SingleListPost';
import Loader from '../components/ui/Loader/Loader';

function PostsPage() {
  const [filerVal, setFilerVal] = useState('all');
  // parsiusti postus
  const postCollRef = collection(db, 'hookPosts');

  // const q = query(postCollRef, orderBy('author', 'desc'));
  const q =
    filerVal === 'all'
      ? query(postCollRef)
      : query(postCollRef, where('tags', 'array-contains', filerVal));

  const [value, loading, error] = useCollection(q);
  // console.log('value ===', value);
  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);

  console.log('error ===', error);
  return (
    <div className="container">
      <h1>Post page</h1>
      <p>This is ProfilePage</p>
      <Loader show={loading} />
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('all')}
      >
        all
      </button>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('css')}
      >
        css
      </button>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('boxing')}
      >
        boxing
      </button>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('kazkas')}
      >
        kazkas
      </button>
      <ul className="list-group">
        {value &&
          docsWithUid.map((pObj) => (
            <li className="list-group-item list-group-item-dark" key={pObj.uid}>
              <SingleListPost item={pObj} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostsPage;
