import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  color?: 'blue' | 'orange';
  customClasses?: string;
  id: string;
}

const Button = ({ color = 'blue', customClasses }: ButtonProps) => {
  return (
    <button
      className={classNames(
        customClasses,
        styles['button'],
        styles[`button--${color}`]
      )}
    >
      Button
    </button>
  );
};

export default Button;
