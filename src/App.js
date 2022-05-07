import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from '../src/comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal'

function App() {
const [selectedImg, setSelectedImg] = useState(null);
require('dotenv').config()

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      <a class="icon__credit" href="https://www.flaticon.com/free-icons/pets" title="pets icons">Pets icons created by iconixar - Flaticon</a>
    </div>
  );
}

export default App;
