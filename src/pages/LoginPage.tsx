import React from 'react';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FAIcon } from '../components/AnimatedComponents';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormFieldLabel, FormSubmitBtn, StyledForm } from '../components/CommonStyles';
import Input from '../components/Input';

type Inputs = {
  login: string;
  password: string;
};

const LogInPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  {
    /*
  const [inputType, setInputType] = useState('password');
  
    const [btnLabel, setBtnLabel] = useState('show');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [serverErrorMsg, setServerErrorMsg] = useState('');

    const togglePassInput = () => {
      if (inputType === 'password') {
        setInputType('text');
        setBtnLabel('hide');
      } else {
        setInputType('password');
        setBtnLabel('show');
      }
    };
 */
  }
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div>
          Log In Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
        </div>
      </ContentWrapper>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel>Псевдоним:</FormFieldLabel>
        <Input type={'text'} {...register('login', { required: true })} />
        {errors.login && <span>Это поле обязательно</span>}
        <FormFieldLabel>Пароль:</FormFieldLabel>

        <Input type={'password'} {...register('password', { required: true })} />

        {errors.password && <span>Это поле обязательно</span>}
        <FormSubmitBtn type="submit" />
      </StyledForm>

      <Footer />
    </PageWrapper>
  );
};

export default LogInPage;
