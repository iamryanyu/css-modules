import Button from '@/components/button';
import styles from './order.module.scss';

const OrderPage = () => {
  return (
    <Button
      id='order-button'
      color='blue'
      customClasses={styles['form__button']}
    />
  );
};

export default OrderPage;
