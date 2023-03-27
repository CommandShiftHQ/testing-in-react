import React from "@testing-library/react";
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
});
