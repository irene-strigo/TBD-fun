import React, { useRef, useState } from 'react';
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
  passwordRepeate: string;
  confirm: string;
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
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));
  const password = useRef({});
  password.current = watch('password', '');
  return (
    <PageWrapper>
      <Header />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel>Выберите псевдоним:</FormFieldLabel>

        <FormInput
          {...register('login', {
            required: 'это поле обязательно',
          })}
        />
        {errors.login && <FormErrorSpan>{errors.login.message}</FormErrorSpan>}

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
              required: 'это поле обязательно',
              onChange() {
                setBtnDisabled(false);
              },
            })}
          />
        </PasswordInputContainer>
        {errors.password && <FormErrorSpan>{errors.password.message}</FormErrorSpan>}
        <FormFieldLabel>Повторите пароль:</FormFieldLabel>
        <PasswordInputContainer>
          <FormInput
            type={'text'}
            {...register('passwordRepeate', {
              required: 'это поле обязательно',
              onChange() {
                setBtnDisabled(false);
              },
              validate: (value) => value === password.current || 'пароли не совпадают',
            })}
          />
        </PasswordInputContainer>
        {errors.passwordRepeate && <FormErrorSpan>{errors.passwordRepeate.message}</FormErrorSpan>}
        <FormFieldLabel>
          Торжественно обещаю писать только бред и ничего кроме бреда!
        </FormFieldLabel>
        <FormInput
          type={'checkbox'}
          {...register('confirm', {
            required: 'это поле обязательно',
          })}
        />
        {errors.confirm && <FormErrorSpan>{errors.confirm.message}</FormErrorSpan>}
        <FormSubmitBtn type="submit" />
      </StyledForm>
      <Footer />
    </PageWrapper>
  );
};

export default RegistrationPage;
