import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useModal } from '../../helpers/useModal';
import { ModalComponent } from '../Modal/Modal';
import MapComponent from './ModalMap';
import { nanoid } from 'nanoid';
import { ref, set } from 'firebase/database';
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

export const FormCreateUnt = () => {
  const { isOpen, toggleModal } = useModal();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [from, setFrom] = useState({
    city: '',
    country: '',
    region: '',
  });

  const initialValues = {
    price: '',
    name: '',
    modelName: '',
  };

  const handelSubmitForm = values => {
    const id = nanoid();

    if (lat === 0 || lng === 0) {
      alert('7890');
    }

    set(ref(database, `advertisement/${id}`), {
      minimal_price_UAH: Number(values.price),
      name: values.name,
      model_name: values.modelName,
      lat,
      lng,
      images:
        'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
      city: from.city,
      country: from.country,
      region: from.region,
      rating: 0,
      id,
    });
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
