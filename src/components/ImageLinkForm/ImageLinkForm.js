import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className="ImageLinkForm">
            <div className="container">
                <p className="ImageLinkForm__title">
                    {'This magic Brain wil detect faces in your pictures. Give it a try'}
                </p>
                <div className="ImageLinkForm__input">
                    <input type="text" onChange={ onInputChange }/>
                    <button onClick= { onSubmit }>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;