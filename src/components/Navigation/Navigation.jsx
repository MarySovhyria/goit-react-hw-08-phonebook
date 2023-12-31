import { useAuth } from '../hooks';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </nav>
  );
};

export default Navigation;
