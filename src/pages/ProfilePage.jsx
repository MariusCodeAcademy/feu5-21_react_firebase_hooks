function ProfilePage() {
  // kas yra siuo metu prisijunges
  // paimti email user.email is kontext
  // paimti displayName user.displayName is kontext
  return (
    <div className="container">
      <h1> displayName Profile Page </h1>
      <p>You are logged in as: email</p>

      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">
          Change your display name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          placeholder="enter your display name"
        />
      </div>
      <button className="btn btn-primary">Change</button>
    </div>
  );
}

export default ProfilePage;
