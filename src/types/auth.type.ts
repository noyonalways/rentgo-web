export type TSignUpPayload = {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  address: string;
  phone: string;
  dateOfBirth: string;
};

export type TSignInPayload = {
  email: string;
  password: string;
};

export interface TUpdateProfilePayload {
  name?: string;
  nidOrPassport?: string;
  drivingLicense?: string;
  address?: string;
  phone?: string;
  profileImage?: string;
}
