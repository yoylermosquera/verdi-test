import InputBase, { InputProps } from './InputBase';
import InputPassword from './InputPassword';
import InputDate from './InputDate';

function Input(props: InputProps) {
  if (props?.type === 'password') return <InputPassword {...props} />;

  if (props?.type === 'date') return <InputDate {...props} />;

  return <InputBase {...props} />;
}

export default Input;
