import Title from "./Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Title", () => {
  it("exist on the page", () => {
    render(<Title />);
    expect(screen.getByRole("main-title")).toBeInTheDocument();
  });
});
