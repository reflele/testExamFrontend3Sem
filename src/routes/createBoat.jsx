import React, {useState} from 'react';
import "../createBoat.css"

const CreateBoat = props => {


    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [make, setMake] = useState();
    const [image, setImage] = useState();


    const nameChange = (event) => {
        setName(event.target.value);
    }

    const brandChange = (event) => {
        setBrand(event.target.value);
    }

    const makeChange = (event) => {
        setMake(event.target.value);
    }

    const imageChange = (event) => {
        setImage(event.target.value);
    }


    const clickHandler = () => {

    }

    return (
        <div>
            <h1>Create boat</h1>

            <div className="boatInputContainer">
                <div className="boatInputs">
                    <input onChange={nameChange} id="boatname" type="text" value="Enter name" />
                    <input onChange={brandChange} id="boatbrand" type="text" value="Enter brand" />
                    <input onChange={makeChange} id="boatmake" type="text" value="Enter make" />
                    <input onChange={imageChange} id="boatimage" type="text" value="Enter image" />
                </div>
            </div>

            <div className="boatBtnContainer">
                <button className="btn btn-secondary">Create boat</button>
            </div>

        </div>
    );
};


export default CreateBoat;