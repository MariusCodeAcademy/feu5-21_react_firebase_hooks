import { collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';

function ProfilePage() {
  // parsiusti postus
  const postCollRef = collection(db, 'posts');
  const [value, loading, error] = useCollection(postCollRef);
  console.log('value ===', value);
  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);
  console.log('docsWithUid ===', docsWithUid);
  return (
    <div>
      <h1>ProfilePage actually Post page</h1>
      <p>This is ProfilePage</p>
      {loading && <h2>Loading...</h2>}
      <ul>
        {value &&
          docsWithUid.map((pObj) => (
            <li key={pObj.uid}>
              <h2>{pObj.title}</h2>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProfilePage;
