import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { array } from "cooky-cutter";
import { userFixture } from "../fixtures";
import { getUsers } from "../api";
import App from "../App";

jest.mock("../api/users");

describe("<Home />", () => {
  let getUsersMock: jest.Mock<any, any>;
  beforeEach(() => {
    getUsersMock = getUsers as jest.Mock<any, any>;
  });
  it("renders users if returned by the api", async () => {
    // arrange
    var getUsersResponse = array(userFixture, 5)();
    getUsersMock.mockResolvedValue(getUsersResponse);

    // act
    render(<App />);

    // assert
    await waitForElementToBeRemoved(screen.getByRole("progressbar"));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "User List"
    );
    const userListItems = screen.getAllByRole("listitem");
    expect(userListItems).toHaveLength(getUsersResponse.length);
    userListItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { firstName, lastName } = getUsersResponse[index];
      const expectedHeading = `${firstName} ${lastName}`;
      expect(
        getByRole("heading", { name: expectedHeading })
      ).toBeInTheDocument();
    });
  });
});
