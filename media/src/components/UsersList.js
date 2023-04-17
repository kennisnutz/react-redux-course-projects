import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useThunk from '../hooks/useThunk';
import { fetchUsers, addUser } from '../store';
import SkeletonLoader from './SkeletingLoader';
import UsersListItem from './UsersListItem';
import Button from './Button';

function UsersList() {
  const [doFetchUsers, isLoadingUsers, isLoadingUsersError] =
    useThunk(fetchUsers);

  const [doAddUser, isAddingUser, addIngUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAddUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <SkeletonLoader times={3} className="h-10 w-full" />;
  } else if (isLoadingUsersError) {
    content = <div>Error fetching data</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="text-xl m-2">Users</h1>
        <Button onClick={handleUserAdd} loading={isAddingUser} primary>
          + Add User
        </Button>
        {addIngUserError && 'Error adding user...'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
