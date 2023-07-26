import React, { useEffect, useState } from "react";

function Note(props) {
  const [compressedImage, setCompressedImage] = useState(null);

  useEffect(() => {
    if (props.image) {
      const img = new Image();
      img.src = props.image;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxImageWidth = 200; // Set your desired max width here
        const maxImageHeight = 200; // Set your desired max height here
        let width = img.width;
        let height = img.height;

        if (width > maxImageWidth) {
          height *= maxImageWidth / width;
          width = maxImageWidth;
        }

        if (height > maxImageHeight) {
          width *= maxImageHeight / height;
          height = maxImageHeight;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        setCompressedImage(canvas.toDataURL("image/jpeg"));
      };
    }
  }, [props.image]);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {compressedImage && <img src={compressedImage} alt="Note Image" />}
      <button
        onClick={handleClick}
        style={{ boxShadow: "none" }} // Remove the shadow behind the delete button
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
