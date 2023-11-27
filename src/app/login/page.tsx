import Button from '@/components/button';
import styles from './login.module.scss';

const LoginPage = () => {
  return (
    <Button
      id='login-button'
      color='orange'
      customClasses={styles['form__button']}
    />
  );
};

export default LoginPage;
