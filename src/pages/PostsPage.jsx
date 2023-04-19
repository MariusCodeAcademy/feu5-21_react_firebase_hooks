import { collection, orderBy, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import SingleListPost from '../components/posts/SingleListPost';
import Loader from '../components/ui/Loader/Loader';

function PostsPage() {
  // parsiusti postus
  const postCollRef = collection(db, 'posts');
  const q = query(postCollRef, orderBy('author', 'desc'));
  const [value, loading, error] = useCollection(q);
  // console.log('value ===', value);
  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);
  // console.log('docsWithUid ===', docsWithUid);

  console.log('error ===', error);
  return (
    <div className="container">
      <h1>Post page</h1>
      <p>This is ProfilePage</p>
      <Loader show={loading} />
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
