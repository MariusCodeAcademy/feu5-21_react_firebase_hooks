import { useEffect, useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';

function ProfilePage() {
  // kas yra siuo metu prisijunges
  const { user } = useAuthCtx();
  console.log('user ===', user);
  // paimti email user.email is kontext
  // paimti displayName user.displayName is kontext
  const userName = user?.displayName;
  const [newName, setNewName] = useState(user?.displayName || '');
  // atnaujinti varda po prisiloginimo
  useEffect(() => {
    console.log('useEffect newName ===');
    setNewName(userName);
  }, [userName]);

  function updateUserProfile() {
    updateProfile(auth.currentUser, {
      displayName: newName,
    })
      .then(() => {
        // Profile updated!
        toast.success('Updated');
        // ...
      })
      .catch((error) => {
        // An error occurred
        toast.error('Failed');
        // ...
      });
  }

  return (
    <div className="container">
      <h1> {user?.displayName} Profile Page </h1>
      <p>You are logged in as: {user?.email}</p>

      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Change your display name
        </label>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          className="form-control"
          id="displayName"
          placeholder="enter your display name"
        />
      </div>
      <button onClick={updateUserProfile} className="btn btn-primary">
        Change
      </button>
    </div>
  );
}

export default ProfilePage;
