import { FC } from 'react';
import './styles.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const FloatActionButton: FC<ButtonProps> = (props): JSX.Element => {
  const {children, ...rest} = props;

  return (
    <button {...rest} >
      <div className="floating-container">
        <div className="floating-button">
          +
        {children}
        </div>
      </div>
    </button>
  );
};

export default FloatActionButton;
