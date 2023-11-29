import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks';
import { Container, Name, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Name>Welcome {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </Container>
  );
}
