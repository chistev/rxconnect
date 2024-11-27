import { writable } from 'svelte/store';

export interface User {
  _id: string;
  firstName: string;
  surname: string;
  profilePic: string;
  // online: boolean;
}

export const users = writable<User[]>([]);
