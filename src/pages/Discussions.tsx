import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export function Discussions() {
  const [comments, setComments] = useState([]);

  function deleteComment(id: number) {
    const commentsCopy = comments.filter((comment: any) => comment.id !== id);

    fetch(`http://localhost:2222/comments/${id}`, {
      method: "DELETE",
    });

    setComments(commentsCopy);
  }

  function createComment(comment: any, name: any) {
    let newComment = {
      name: name,
      comment: comment,
    };

    fetch("http://localhost:2222/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((commentFromServer) => {
        setComments([...comments, commentFromServer]);
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
      <h1 className="heading">Add A Comment Below</h1>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createComment(event.target.comment.value, event.target.name.value);
            event.target.reset();
          }}
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Enter you name here" />
            <textarea
              className="form-control status-box"
              placeholder="Enter your comment here..."
              name="comment"
            ></textarea>
          </div>
          <div className="button-group pull-right">
            <button className="btn btn-primary">Post</button>
          </div>
        </form>
        <ul className="posts">
          {comments.map((comment: any) => (
            <div>
              <div className="dialogbox">
                <div className="body">
                  <span className="tip tip-up"></span>
                  <div className="message">
                    <h3>{comment.name}</h3>
                    <span>{comment.comment}</span>
                    <button
                      className="delete"
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
