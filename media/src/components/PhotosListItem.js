import { GoTrashcan } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [deletePhoto, results] = useRemovePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };
  return (
    <div className="relative m-2">
      <img className="h-20 w-20" src={photo.url} alt="randomPic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" onClick={handleDeletePhoto} />
      </div>
    </div>
  );
}

export default PhotosListItem;
