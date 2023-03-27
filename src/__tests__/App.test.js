import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../components/App";

test("Renders corect title", () => {
  render(<App />);
  const title = screen.getByText("Testing in React", { exact: true });

  expect(title).toBeInTheDocument();
});

test("Renders correctly", () => {
  const rendered = renderer.create(<App />);

  expect(rendered).toMatchSnapshot();
});
