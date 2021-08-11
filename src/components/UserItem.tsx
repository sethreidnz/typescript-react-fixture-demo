import { AccountStatus, User } from "../models";

export type UserItemProps = {
  user: User;
};

export const UserItem = ({
  user: { firstName, lastName, age, accountStatus },
}: UserItemProps) => {
  const renderAccountStatus = () => {
    switch (accountStatus) {
      case AccountStatus.Inactive:
        return <p>This account is inactive</p>;
      case AccountStatus.Disabled:
        return <p>This account is disabled</p>;
      default:
        return null;
    }
  };
  return (
    <>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Age: {age}</p>
      {renderAccountStatus()}
    </>
  );
};
