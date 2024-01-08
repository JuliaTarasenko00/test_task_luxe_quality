import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useModal } from '../../helpers/useModal';
import { nanoid } from 'nanoid';
import { ref, set } from 'firebase/database';
import { ModalComponent } from '../Modal/Modal';
import MapComponent from './components/ModalMap';
import { database } from '../config/firebase-config';
import {
  ButtonSelectMap,
  ButtonSubmit,
  ErrorMessage,
  Form,
  Input,
  TitleLocationTechnical,
  Wrapper,
  WrapperInput,
} from './FormCreateUnt.styled';
import { SelectedImage } from './components/SelectedImage';
import img from '../../assets/img/not-found.jpg';
import { styleToastify } from '../toastify';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'У назві оголошення повинно бути не менше 10 символів')
    .max(50, 'У назві оголошення повинно бути не більше 50 символів')
    .required('Це поле обов’язкове'),
  price: Yup.number().required('Це поле обов’язкове'),
  modelName: Yup.string()
    .min(5, 'У назві модель технічного засобу повинно бути не менше 5 символів')
    .max(
      50,
      'У назві модель технічного засобу повинно бути не більше 50 символів'
    )
    .required('Це поле обов’язкове'),
});

const initialValues = {
  price: '',
  name: '',
  modelName: '',
};

export const FormCreateUnt = ({ setSuccessful }) => {
  const { isOpen, toggleModal } = useModal();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [from, setFrom] = useState({
    city: '',
    country: '',
    region: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [pathImg, setPath] = useState(null);

  const handelSubmitForm = async values => {
    try {
      const id = nanoid();

      if (lat === 0 || lng === 0) {
        toast.error(
          'Виберіть місце розташування технічного засобу!',
          styleToastify
        );
      } else {
        const images = pathImg ? pathImg : img;

        await set(ref(database, `advertisement/${id}`), {
          minimal_price_UAH: Number(values.price),
          name: values.name,
          model_name: values.modelName,
          lat,
          lng,
          images,
          city: from.city,
          country: from.country,
          region: from.region,
          rating: 0,
          id,
        });
        toast.success('Ваше оголошення розміщено', styleToastify);
        setSuccessful(true);
      }
    } catch (error) {
      toast.error('Упсс щось пішло не так спробуйте ще раз', styleToastify);
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handelSubmitForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WrapperInput>
              <Input
                type="text"
                name="name"
                placeholder="Назва оголошення"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <ErrorMessage>* {errors.name}</ErrorMessage>
              ) : null}
            </WrapperInput>
            <WrapperInput>
              <Input
                type="text"
                name="price"
                placeholder="Ціна технічного засобу"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && touched.price ? (
                <ErrorMessage>* {errors.price}</ErrorMessage>
              ) : null}
            </WrapperInput>
            <WrapperInput>
              <Input
                type="text"
                name="modelName"
                placeholder="Модель технічного засобу"
                value={values.modelName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.modelName && touched.modelName ? (
                <ErrorMessage>* {errors.modelName}</ErrorMessage>
              ) : null}
            </WrapperInput>
            <SelectedImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setPath={setPath}
            />
            {lat !== 0 && lng !== 0 && <p>{Object.values(from).join(', ')}</p>}
            <TitleLocationTechnical>
              Місце розташування технічного засобу <span>*</span>
            </TitleLocationTechnical>
            <ButtonSelectMap type="button" onClick={toggleModal}>
              Вибрати на мапі
            </ButtonSelectMap>
            <Wrapper>
              <ButtonSubmit type="submit">Відправити данні</ButtonSubmit>
            </Wrapper>
          </Form>
        )}
      </Formik>
      {isOpen && (
        <ModalComponent onClose={toggleModal}>
          <MapComponent setLat={setLat} setLng={setLng} setFrom={setFrom} />
        </ModalComponent>
      )}
    </>
  );
};

FormCreateUnt.propTypes = {
  setSuccessful: PropTypes.func.isRequired,
};
