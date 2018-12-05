import React from 'react';

const FaceRecognition = ({imageUrl, box}) => { 
    return (
        <div className="FaceRecognition">
            <div className="container">
                <div className="FaceRecognition__img">
                    <img id='inputImage' src={imageUrl} className={imageUrl? "": "hidden"} alt="people"/>
                    {
                        box.map((face, i) => {
                        return (
                        <div key={i} className='FaceRecognition__bounding-box' 
                        style={{top: face.topRow, left:face.leftCol, bottom: face.bottomRow, right:face.rightCol}}>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;