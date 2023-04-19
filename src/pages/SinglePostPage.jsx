import { doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';

function SinglePostPage() {
  // gauti id to post kuriame esam
  const { postUid } = useParams();
  const docRef = doc(db, 'posts', postUid);
  const [value, loading, error] = useDocument(docRef);
  // parsiusti posta // https://github.com/CSFrequency/react-firebase-hooks/tree/v4.0.2/firestore#usedocument
  console.log('value.data() ===', value?.data());
  return (
    <div className="container">
      <h1 className="display-3 mt-5">{value?.data().title}</h1>
      <p>This is SinglePostPage</p>
      {/* single post */}
    </div>
  );
}

export default SinglePostPage;
