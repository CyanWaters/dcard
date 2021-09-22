import React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";

import { InfiniteScroll } from "../InfiniteScroll";

test("should render well", async () => {
  let renderer;
  await TestRenderer.act(async () => {
    renderer = TestRenderer.create(
      <MemoryRouter>
        <InfiniteScroll />
      </MemoryRouter>
    );
  });
  expect(renderer.toJSON()).toMatchSnapshot();
});
