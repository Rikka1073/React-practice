import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("Buttonに文字が表示されること", async () => {
  render(<App />);

  expect(screen.getByText("クリックすると画像が変わるよ")).toBeTruthy();
});
