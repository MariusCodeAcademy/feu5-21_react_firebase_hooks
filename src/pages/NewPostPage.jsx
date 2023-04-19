import { addDoc, collection } from '@firebase/firestore';
import NewPostForm from '../components/posts/NewPostForm';
import { db } from '../firebase/firebase';
import { toast } from 'react-hot-toast';

function NewPostPage() {
  //
  function handleNewPost(newPostObj) {
    const hookPostRef = collection(db, 'hookPosts');
    addDoc(hookPostRef, newPostObj).then(() => {
      toast.success('doc created');
    });
  }

  return (
    <div className="container">
      <h1 className="display-3 mt-3">NewPostPage</h1>
      <p>This is NewPostPage</p>
      <NewPostForm onNewPost={handleNewPost} />
    </div>
  );
}

export default NewPostPage;
