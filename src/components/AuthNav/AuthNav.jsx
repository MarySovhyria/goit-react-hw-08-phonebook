import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/registration">Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
