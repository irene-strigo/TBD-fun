import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormErrorSpan,
  FormFieldLabel,
  FormInput,
  FormSubmitBtn,
  PasswordInputContainer,
  ShowHideIconImg,
  StyledForm,
  ToggleButton,
} from '../components/CommonStyles';

type Inputs = {
  login: string;
  password: string;
};
const RegistrationPage = () => {
  const [inputType, setInputType] = useState('password');
  const [btnLabel, setBtnLabel] = useState(
    <ShowHideIconImg src="/assets/Icons/show-eye.png"></ShowHideIconImg>,
  );
  const [btnDisabled, setBtnDisabled] = useState(true);

  const togglePassInput = () => {
    if (inputType === 'password') {
      setInputType('text');
      setBtnLabel(<ShowHideIconImg src="/assets/Icons/hide-eye.png"></ShowHideIconImg>);
    } else {
      setInputType('password');
      setBtnLabel(<ShowHideIconImg src="/assets/Icons/show-eye.png"></ShowHideIconImg>);
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <PageWrapper>
      <Header />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel>Выберите псевдоним:</FormFieldLabel>

        <FormInput
          {...register('login', {
            required: true,
          })}
        />
        {errors.login && <FormErrorSpan>Это поле обязательно</FormErrorSpan>}
        <FormFieldLabel>Пароль:</FormFieldLabel>
        <PasswordInputContainer>
          <ToggleButton
            disabled={btnDisabled}
            type={'button'}
            onClick={(evt) => {
              evt.preventDefault();
              togglePassInput();
            }}
          >
            {btnLabel}
          </ToggleButton>
          <FormInput
            type={inputType}
            {...register('password', {
              required: true,
              onChange() {
                setBtnDisabled(false);
                console.log('click');
              },
            })}
          />
        </PasswordInputContainer>
        {errors.password && <FormErrorSpan>Это поле обязательно</FormErrorSpan>}
        <FormFieldLabel>Повторите пароль:</FormFieldLabel>
        <PasswordInputContainer>
          <ToggleButton
            disabled={btnDisabled}
            type={'button'}
            onClick={(evt) => {
              evt.preventDefault();
              togglePassInput();
            }}
          >
            {btnLabel}
          </ToggleButton>
          <FormInput
            type={inputType}
            {...register('password', {
              required: true,
              onChange() {
                setBtnDisabled(false);
                console.log('click');
              },
            })}
          />
        </PasswordInputContainer>
        {errors.password && <FormErrorSpan>Это поле обязательно</FormErrorSpan>}

        <FormSubmitBtn type="submit" />
      </StyledForm>
      <Footer />
    </PageWrapper>
  );
};

export default RegistrationPage;
