import React, { useState } from 'react';

const AddPhoto = ({ isOpen, onClose, onAddPhoto }) => {
  const [photoUrl, setPhotoUrl] = useState('');

  const handleAddPhoto = () => {
    onAddPhoto(photoUrl);
    setPhotoUrl('');
    onClose();
  };

  return (
    <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ikelti nuotrauka</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="photo-url">Nuotraukos URL</label>
              <input
                type="text"
                className="form-control"
                id="photo-url"
                placeholder="Įveskite nuotraukos URL"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleAddPhoto}>Prideti</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Atsaukti</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
