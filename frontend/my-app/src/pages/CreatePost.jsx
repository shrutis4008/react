import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";

const CreatePost = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <Row>
          {/* <Form.Label column="sm" lg={2}>
          Title
        </Form.Label> */}
          <Col>
            <Form.Control
              className="input"
              size="sm"
              type="text"
              placeholder="Title"
            />
          </Col>
        </Row>
        <br></br>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="toolbar">
        <div className="item">
          <h1>Publish</h1>
          {/* <span>
          <b>Status:</b>Draft
         </span>

         <span>
          <b>Visibility:</b>Public
         </span> */}
          <div className="m-3">
            <label className="mx-3">Add image here: </label>
            <input className="d-none" type="file" />
            <Button variant="outline-dark" size="sm">
              Upload
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
