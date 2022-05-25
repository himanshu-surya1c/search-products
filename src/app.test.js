import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders list of products", () => {
  render(<App />);
  const linkElement = screen.getByText("List Of Products");
  expect(linkElement).toBeInTheDocument();
});
