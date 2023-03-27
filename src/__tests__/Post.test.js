import React, { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Post from "../components/Post";

describe("Post", () => {
  const validProps = {
    postData: {
      author: "test author",
      body: "test body",
      date: "test date",
      isPublished: true,
      tags: ["test tag1", "test tag2", "test tag3"],
      title: "test title",
    },
    handleUpvote: jest.fn(),
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert the post author is present", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(screen.getByText("Author: test author")).toBeInTheDocument();
  });

  test("Renders a single button with correct text", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Upvote this");
  });

  test("Tags list renders correct number of items", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );
    const tags = screen.getAllByRole("listitem");

    expect(tags.length).toBe(3);
  });
});
