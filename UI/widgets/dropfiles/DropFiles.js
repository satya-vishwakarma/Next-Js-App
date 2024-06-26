// import node module libraries

import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export const DropFiles = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );

      props.onCallback(acceptedFiles);
    },
  });

  console.log(acceptedFiles, 'ppppppppppppppppp');

  const iconStyle = {
    cursor: 'pointer',
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);

    setFiles(newFiles);
    props.onCallback(newFiles);
  };

  const thumbs = files.map((file, index) => (
    <>
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <Image src={file.preview} style={img} alt={file.name} />
        </div>
      </div>
      <i
        className="fa fa-trash fs-3"
        onClick={() => removeFile(index)}
        style={iconStyle}
      ></i>
    </>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks

      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="text-center">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};
