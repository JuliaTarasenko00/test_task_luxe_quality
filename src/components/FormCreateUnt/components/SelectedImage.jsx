import PropTypes from 'prop-types';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../config/firebase-config';
import { useEffect } from 'react';
import { DeleteButtonImg, InputSelectImg } from '../FormCreateUnt.styled';
import { toast } from 'react-toastify';
import { styleToastify } from '../../toastify';

export const SelectedImage = ({ selectedImage, setSelectedImage, setPath }) => {
  const storageRef = ref(storage, `${selectedImage?.name}`);

  useEffect(() => {
    if (!selectedImage) return;

    const uploadTask = uploadBytesResumable(storageRef, selectedImage);

    uploadTask.on(
      'state_changed',
      snapshot => {
        return toast.success('Успішно завантаженно', styleToastify);
      },
      error => {
        toast.error('Упсс щось пішло не так спробуйте ще раз', styleToastify);
        console.log('error: ', error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        return setPath(downloadURL);
      }
    );

    // eslint-disable-next-line
  }, [selectedImage]);

  const handleDelete = async () => {
    try {
      await deleteObject(storageRef);
      setSelectedImage(null);
    } catch (error) {
      console.log('Error deleting image: ', error);
      toast.error('Упсс щось пішло не так спробуйте ще раз', styleToastify);
    }
  };

  return (
    <div>
      <h3>Завантажте зображення технічного засобу.</h3>
      {selectedImage && (
        <div>
          <img
            alt="Зображення технічного засобу"
            width={'250px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <DeleteButtonImg onClick={handleDelete}>Видалити</DeleteButtonImg>
        </div>
      )}
      <InputSelectImg
        type="file"
        name="myImage"
        onChange={event => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

SelectedImage.propTypes = {
  selectedImage: PropTypes.object,
  setSelectedImage: PropTypes.func.isRequired,
  setPath: PropTypes.func.isRequired,
};
