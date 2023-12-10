import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageDropZone.css";

function ImageDropZone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="drop-zone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drop Images Here</p>}
    </div>
  );
}

export default ImageDropZone;
