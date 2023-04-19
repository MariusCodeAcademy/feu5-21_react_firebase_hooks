import { doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import Loader from '../components/ui/Loader/Loader';
import SinglePost from '../components/posts/SinglePost';

function SinglePostPage() {
  // gauti id to post kuriame esam
  const { postUid } = useParams();
  const docRef = doc(db, 'hookPosts', postUid);
  const [value, loading, error] = useDocument(docRef);
  // parsiusti posta // https://github.com/CSFrequency/react-firebase-hooks/tree/v4.0.2/firestore#usedocument
  console.log('value.data() ===', value?.data());
  const thisPostObj = value?.data();
  console.log('error ===', error);
  return (
    <div className="container">
      <Loader show={loading} />
      <h1 className="display-3 mt-5">{thisPostObj?.title}</h1>
      <p>This is SinglePostPage</p>
      <SinglePost item={thisPostObj} />
    </div>
  );
}

export default SinglePostPage;
