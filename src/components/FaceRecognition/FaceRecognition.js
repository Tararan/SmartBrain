import React from 'react';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="FaceRecognition">
            <div className="container">
                <div className="FaceRecognition__img">
                    <img id='inputImage' src={imageUrl} className={imageUrl? "": "hidden"} alt="people"/>
                    
                    <div className="FaceRecognition__bounding-box" 
                        style={
                        { top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }
                        }>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;