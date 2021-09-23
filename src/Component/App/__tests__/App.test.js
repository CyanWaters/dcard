import React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "@testing-library/react";
import moxios from "moxios";

import { mockAPIData } from "../__mocks__";
import { App } from "../App";

beforeEach(() => {
  // install the axios mock before each test/describe
  moxios.install();
});

afterEach(() => {
  // uninstall the axios mock after each test/describe
  moxios.uninstall();
});

test("should render well", async () => {
  let renderer;
  await TestRenderer.act(async () => {
    renderer = TestRenderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  expect(renderer.toJSON()).toMatchSnapshot();
});

describe("search functions should be well", () => {
  test("Repo Name was changed", async () => {
    mockAPIData();
    let result;
    await act(async () => {
      result = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    const repoName = "react";

    await act(async () => {
      fireEvent.change(result.getByTestId("repoName"), {
        target: {
          value: repoName,
        },
      });
    });

    const searchInput = result.getByTestId("repoName");
    expect(searchInput.value).toEqual(repoName);
    // const url = `https://api.github.com/search/repositories?q=${repoName}&per_page=30&page=1`;
    // mockAPIData(url);

    // to ensure request call again
    // await act(async () => {
    //   result.rerender();
    // });
    const request = moxios.requests.mostRecent();
    expect(request.url).toEqual(url);
  });
});
