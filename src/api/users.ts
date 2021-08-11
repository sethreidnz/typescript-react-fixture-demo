import { User } from "../models";

export async function getUsers() {
  const response = await fetch("/user");
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const user: User[] = await response.json();
  return user;
}
