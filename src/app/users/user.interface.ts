export interface User {
  cell?: string;
  dob: Date;
  email: string;
  gender?: Gender;
  id?: UserId;
  location: Location;
  login?: LoginCredentials;
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat?: string;
  phone: string;
  picture?: Avatars;
  registered?: DateString;
}

export type DateString = string;
export type Gender = 'famale' | 'male';
export interface UserId {
  name: string;
  value: string;
}
export interface Location {
  city: string;
  postcode: number;
  state: string;
  street: string;
}

export interface LoginCredentials {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
}
export interface Avatars {
  large: string;
  medium: string;
  thumbnail: string;
}
