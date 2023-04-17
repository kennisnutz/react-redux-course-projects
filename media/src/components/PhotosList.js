import PhotosListItem from './PhotosListItem';
import {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} from '../store';
import Button from './Button';
import SkeletonLoader from './SkeletingLoader';

function PhotosList({ album }) {
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <SkeletonLoader className="w-8 h-8" times={5} />;
  } else if (error) {
    content = <div>Error fetching photos..</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-betwen">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>
          {' '}
          + Add Photo
        </Button>
      </div>
      <div className="m-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
