import { Role } from './role';

/**
 * Represents an application user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {Role} role - The role of the user ("USER" or "ADMIN").
 * @author geozi
 * @version 1
 */
export interface User {
  username: string;
  password: string;
  role: Role;
}
