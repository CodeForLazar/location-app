export const VALIDATOR_TYPE_REQUIRE = { type: 'REQUIRE' }
export const VALIDATOR_TYPE_MINLENGTH = { type: 'MINLENGTH', value: 5 }
export const VALIDATOR_TYPE_MAXLENGTH = { type: 'MAXLENGTH', value: 5 }
export const VALIDATOR_TYPE_MIN = { type: 'MIN', value: 5 }
export const VALIDATOR_TYPE_MAX = { type: 'MAX', value: 5 }
export const VALIDATOR_TYPE_EMAIL = { type: 'EMAIL' }
export const VALIDATOR_TYPE_FILE = { type: 'FILE' }

type Validators = { type: string, value?: string | number };

export const validate = (value: string, validators: Validators[]) => {
  let isValid = true;
  let validator: { type: string, value?: number | string }

  for (validator of validators) {

    if (validator.type === VALIDATOR_TYPE_REQUIRE.type) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH.type) {
      isValid = isValid && value.trim().length >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH.type) {
      isValid = isValid && value.trim().length <= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MIN.type) {
      isValid = isValid && value >= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_MAX.type) {
      isValid = isValid && value <= validator.value!;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL.type) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
