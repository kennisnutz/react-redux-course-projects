import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import SkeletonLoader from './SkeletingLoader';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

export default function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <SkeletonLoader className="h-10 w-full" times={5} />;
  } else if (error) {
    content = <div>Error Loading albums...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name} </h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
