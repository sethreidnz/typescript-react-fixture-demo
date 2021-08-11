import { getUsers } from "../api";
import { useQuery } from "react-query";
import { User } from "../models";

export const Home = () => {
  const { data: users, isLoading } = useQuery<User[], Error>(
    ["Users"],
    getUsers
  );
  return isLoading ? (
    <span role="progressbar">Loading</span>
  ) : (
    <div className="App">
      <h1>User List</h1>
      {users?.map(({ firstName, lastName, age }, index) => (
        <li key={index}>
          <h2>
            {firstName} {lastName}
          </h2>
          <p>Age: {age}</p>
        </li>
      ))}
    </div>
  );
};
