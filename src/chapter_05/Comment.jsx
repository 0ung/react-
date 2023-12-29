import React from "react";

const styleTest = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styleTest.wrapper}>
      <div style={styleTest.imageContainer}>
        <img
          style={styleTest.image}
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt=""
        />
      </div>

      <div style={styleTest.contentContainer}>
        <span style={styleTest.nameText}>{props.name}</span>
        <span style={styleTest.commentText}>{props.comments}</span>
      </div>
    </div>
  );
}

export default Comment;
