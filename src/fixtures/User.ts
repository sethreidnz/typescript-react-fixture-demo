import { define } from "cooky-cutter";
import faker from "faker";
import { AccountStatus, User } from "../models";

export const accountStatusFixture = () => {
  return faker.random.arrayElement(
    Object.getOwnPropertyNames(AccountStatus)
  ) as AccountStatus;
};

export const userFixture = define<User>({
  id: faker.datatype.uuid(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  age: faker.datatype.number({ min: 0, max: 120 }),
  accountStatus: accountStatusFixture(),
});
