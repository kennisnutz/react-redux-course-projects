import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import useThunk from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);
  const handleDeleteUser = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleDeleteUser} className="mr-3">
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user....</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
