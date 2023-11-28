import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  color?: 'blue' | 'orange';
  customClasses?: string;
  id: string;
  children: React.ReactNode[];
  onClick?: () => void;
}

const Button = ({
  id,
  color,
  customClasses,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        customClasses,
        styles['button-blue']
        // styles[`button--${color}`]
      )}
      onClick={onClick}
    >
      <span className='button__content'>
        <svg
          className={styles['button__icon']}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        >
          <path d='m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4' />
        </svg>
        <span>{children}</span>
      </span>
    </button>
  );
};

export default Button;
