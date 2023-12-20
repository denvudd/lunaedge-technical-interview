export enum ValidationError {
  Required = 'This field is required',
  InvalidCharacter = 'This field can only contain letters a-z and A-Z',
  TooShort = "This field can't be shorter than 2 characters",
  TooLong = "This field can't be longer than 30 characters",
}
