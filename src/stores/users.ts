import { writable } from 'svelte/store';

export interface User {
  _id: string;
  firstName: string;
  surname: string;
  profilePic: string;
}

export const users = writable<User[]>([]);
export const userId = writable<string | null>(null); 
