import { useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';

function ProfilePage() {
  // kas yra siuo metu prisijunges
  const { user } = useAuthCtx();
  console.log('user ===', user);
  // paimti email user.email is kontext
  // paimti displayName user.displayName is kontext

  const [newName, setNewName] = useState(user?.displayName);

  function updateUserProfile() {}

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
