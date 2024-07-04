import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddPhoto from '../addPhoto/AddPhoto';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
    setPhotos(savedPhotos);
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddPhoto = (photoUrl) => {
    const newPhotos = [...photos, { url: photoUrl }];
    setPhotos(newPhotos);
    localStorage.setItem('photos', JSON.stringify(newPhotos));
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((photo, idx) => idx !== index);
    setPhotos(updatedPhotos);
    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Holiday Photos</h1>
        <Link to="/" className="btn btn-primary">Atsijungti</Link>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos.map((photo, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={photo.url} className="card-img-top" alt={`Nuotrauka ${index}`} />
              <div className="card-body">
                <button className="btn btn-danger" onClick={() => handleDeletePhoto(index)}>Ištrinti</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="btn btn-primary" onClick={handleOpenModal}>X</button>
      </div>
      <AddPhoto isOpen={isModalOpen} onClose={handleCloseModal} onAddPhoto={handleAddPhoto} />
    </div>
  );
};

export default MainPage;
