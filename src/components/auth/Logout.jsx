import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut, loading, error] = useSignOut(auth);

  function logoutFire() {
    signOut();
  }

  return !isLoggedIn ? null : <button onClick={logoutFire}>Logout</button>;
}

export default Logout;
