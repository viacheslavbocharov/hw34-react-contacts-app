import React from 'react'
import './Modal.css';

export default function Modal({ show, onClose, onConfirm }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
