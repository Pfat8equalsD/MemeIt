import React, { useState } from 'react';

function Memform() {
  const [background, setBackground] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBackground(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div 
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
      style={{backgroundImage: `url(${background})`, height: '100vh'}}
    >
      <p>Drag and drop an image here to set the background.</p>
    </div>
  );
}


export default Memform;