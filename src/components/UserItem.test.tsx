import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { userFixture } from "../fixtures";
import { UserItem } from "../components";
import { AccountStatus } from "../models";

describe("<UserItem />", () => {
  it("renders active user correctly", async () => {
    // arrange
    var user = userFixture({ accountStatus: AccountStatus.Active });

    // act
    render(<UserItem user={user} />);

    // assert
    const expectedHeading = `${user.firstName} ${user.lastName}`;
    const expectedAge = `Age: ${user.age}`;
    expect(
      screen.getByRole("heading", { name: expectedHeading })
    ).toBeInTheDocument();
    expect(screen.getByText(expectedAge)).toBeInTheDocument();
  });

  it("renders inactive user correctly", async () => {
    // arrange
    var user = userFixture({ accountStatus: AccountStatus.Inactive });

    // act
    render(<UserItem user={user} />);

    // assert
    const expectedHeading = `${user.firstName} ${user.lastName}`;
    const expectedAge = `Age: ${user.age}`;
    expect(
      screen.getByRole("heading", { name: expectedHeading })
    ).toBeInTheDocument();
    expect(screen.getByText(expectedAge)).toBeInTheDocument();
  });

  it("renders disabled user correctly", async () => {
    // arrange
    var user = userFixture({ accountStatus: AccountStatus.Disabled });

    // act
    render(<UserItem user={user} />);

    // assert
    const expectedHeading = `${user.firstName} ${user.lastName}`;
    const expectedAge = `Age: ${user.age}`;
    expect(
      screen.getByRole("heading", { name: expectedHeading })
    ).toBeInTheDocument();
    expect(screen.getByText(expectedAge)).toBeInTheDocument();
    expect(screen.getByText("This account is disabled")).toBeInTheDocument();
  });
});
