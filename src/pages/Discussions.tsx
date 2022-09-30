import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export function Discussions() {
  const [comments, setComments] = useState([]);

  function deletePost(id: number) {
    const commentsCopy = comments.filter((image: any) => image.id !== id);

    fetch(`http://localhost:3001/images/${id}`, {
      method: "DELETE",
    });

    setComments(commentsCopy);
  }

  function createComment(content: string, imageId: number) {
    let newComment = {
      content: content,
      imageId: imageId,
    };

    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((comment) => {
        const imagesCopy = structuredClone(comments);
        const image = imagesCopy.find(
          (image: any) => image.id === comment.imageId
        );
        image.comments.push(comment);

        setComments(imagesCopy);
      });
  }

  useEffect(() => {
    fetch("http://localhost:2222/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => {
        setComments(commentsFromServer);
      });
  }, []);

  return (
    <>
      <Header />
      <h1>FORUM</h1>
      <h2 className="heading">Add A Comment Below</h2>
      <div className="container">
        <form>
          <div className="form-group">
            <textarea
              className="form-control status-box"
              placeholder="Enter your comment here..."
            ></textarea>
          </div>
        </form>
        <div className="button-group pull-right">
          <button className="btn btn-primary">Post</button>
        </div>
        <ul className="posts"></ul>
      </div>
    </>
  );
}
