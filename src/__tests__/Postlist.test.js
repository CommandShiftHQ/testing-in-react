import React, { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Postlist from "../components/Postlist";

describe("Postlist", () => {
  const validProps = {
    posts: [
      {
        id: 1,
        author: "test author",
        body: "test body",
        date: "test date",
        isPublished: true,
        tags: ["test tag1", "test tag2", "test tag3"],
        title: "test title",
      },
      {
        id: 2,
        author: "test author 2",
        body: "test body 2",
        date: "test date 2",
        isPublished: false,
        tags: ["test tag1-2", "test tag2-2", "test tag3-2"],
        title: "test title 2",
      },
    ],
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(<Postlist posts={validProps.posts} />);

    expect(rendered).toMatchSnapshot();
  });

  test("Last upvoted post is displayed when clicked", async () => {
    render(<Postlist posts={validProps.posts} />);

    const buttons = screen.getAllByRole("button");
    const firstPostUpvote = buttons[0];
    const secondPostUpvote = buttons[1];

    expect(firstPostUpvote).toHaveValue(validProps.posts[0].title);
    expect(secondPostUpvote).toHaveValue(validProps.posts[1].title);

    const lastUpvotedBox = screen.queryByText("Last upvoted post:");

    expect(lastUpvotedBox).toBeNull();

    fireEvent.click(firstPostUpvote);
    let lastUpvoted = await screen.findByText("Last upvoted post: test title");

    expect(lastUpvoted).toBeInTheDocument();

    fireEvent.click(secondPostUpvote);
    lastUpvoted = await screen.findByText("Last upvoted post: test title 2");

    expect(lastUpvoted).toBeInTheDocument();
  });
});
