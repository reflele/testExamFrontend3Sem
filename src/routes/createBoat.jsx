import React, {useState} from 'react';
import "../createBoat.css"
import apiFacade from "../apiFacade";

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
        apiFacade.createBoat(name,brand,make,image);
    }

    return (
        <div>
            <h1>Create boat</h1>

            <div className="boatInputContainer">
                <div className="boatInputs">
                    <input onChange={nameChange} id="boatname" type="text" placeholder="Enter name" />
                    <input onChange={brandChange} id="boatbrand" type="text" placeholder="Enter brand" />
                    <input onChange={makeChange} id="boatmake" type="text" placeholder="Enter make" />
                    <input onChange={imageChange} id="boatimage" type="text" placeholder="Enter image" />
                </div>
            </div>

            <div className="boatBtnContainer">
                <button onClick={clickHandler} className="btn btn-secondary">Create boat</button>
            </div>

        </div>
    );
};


export default CreateBoat;