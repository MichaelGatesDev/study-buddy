export interface User {
  id: number;
  schoolID: number;
  email: string;
  passwordHash: string;
  passwordSalt: string;
  preferredName: string;
  displayName: string;
}
