export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  accountStatus: AccountStatus;
};

export enum AccountStatus {
  Active = "Active",
  Inactive = "Inactive",
  Disabled = "Disabled",
}
