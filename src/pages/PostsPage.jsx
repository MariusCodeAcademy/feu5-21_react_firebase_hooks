import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import { collection } from 'firebase/firestore';
import Loader from '../components/ui/Loader/Loader';
import NewPostForm from '../components/posts/NewPostForm';

function PostsPage() {
  const postRef = collection(db, 'posts');
  const [realtimePosts, loading, error] = useCollection(postRef);
  console.log('realtimePosts ===', realtimePosts);
  const postsWithUid = realtimePosts?.docs.map((post) => ({
    uid: post.id,
    ...post.data(),
  }));
  console.log('postsWithUid ===', postsWithUid);
  return (
    <div>
      <h1>Posts Page</h1>
      <Loader show={true} />

      <NewPostForm />
    </div>
  );
}
export default PostsPage;
