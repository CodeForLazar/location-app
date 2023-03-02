import { ChangeEvent, useState, useEffect } from 'react';
import { validate } from "../../util/validators";

interface props {
  id: string
  element: string
  label: string
  errorText: string
  onInput: (id: string, value: string, isValid: boolean) => void
  validators: { type: string, value?: number }[]
  type?: string
  initValue?: string
  rows?: number
  placeholder?: string
  initIsValid?: boolean
}

const Input = (props: props) => {

  const { validators, onInput, id, } = props;

  const [value, setValue] = useState(props.initValue || "");
  const [onBlure, setOnBlure] = useState(false);

  const isValid = validate(value, validators);

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setOnBlure(true);
  };

  const element = props.element === "input" ? (
    <input
      id={id}
      type={props.type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={props.placeholder}
    />
  ) : (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={props.rows || 3}
    />
  );

  return (
    <div className={`form-control ${!isValid && onBlure && "form-control--invalid"}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!isValid && onBlure && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input