import TaskItem from "./TaskItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("TaskItem", () => {
  it("with title", () => {
    render(<TaskItem title={"Lorem"} />);

    expect(screen.getByRole("list-item__title")).toBeInTheDocument();
    expect(screen.getByText("Lorem")).toBeInTheDocument();

    expect(screen.queryByText("00:00:00")).not.toBeInTheDocument();
  });

  it("with time", () => {
    render(<TaskItem time={"00:00:00"} />);

    expect(screen.getByRole("list-item__time")).toBeInTheDocument();
    expect(screen.getByText("00:00:00")).toBeInTheDocument();

    expect(screen.queryByText("Lorem")).not.toBeInTheDocument();
  });
});
