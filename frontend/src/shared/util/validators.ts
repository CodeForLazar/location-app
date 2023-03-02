export const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
export const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
export const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
export const VALIDATOR_TYPE_MIN = 'MIN';
export const VALIDATOR_TYPE_MAX = 'MAX';
export const VALIDATOR_TYPE_EMAIL = 'EMAIL';
export const VALIDATOR_TYPE_FILE = 'FILE';

type Validators = { type: string, value?: string | number };

export const validate = <T extends Validators>(value: string, validators: T[]) => {
  let isValid = true;
  let validator: { type: string, value?: number | string }

  for (validator of validators) {

    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && value >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && value <= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
