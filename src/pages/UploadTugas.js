import React, { useEffect, useCallback } from "react";
import { Jumbotron, Button } from "react-bootstrap/";
import { makeStyles } from "@material-ui/core/";
import { useDropzone } from "react-dropzone";

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: "capitalize",
  },
  Jumbotron: {
    margin: "auto 10%",
    backgroundColor: "#e9f2fe",
  },
  tengah: {
    display: "flex",
    alignItems: "center",
  },
  drag: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "2px dashed #eee",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
}));

const Tugas = (props) => {
  console.log("rendr");
  const classes = useStyle();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <React.Fragment>
      <div className={classes.tengah}>
        <Jumbotron className={classes.Jumbotron}>
          <h1 className="text-center">Upload Tugas</h1>
          <p className="text-center">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={classes.drag}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </Jumbotron>
      </div>
    </React.Fragment>
  );
};

export default Tugas;
