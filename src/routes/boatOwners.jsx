import React from 'react';
// import PropTypes from 'prop-types';
import apiFacade from "../apiFacade";
import {useEffect, useState} from "react";

const AllBoats = props => {

    const [boatList, setBoatList] = useState([]);
    const [selected, setSelected] = useState();
    const [ownerList, setOwnerList] = useState([]);

    useEffect(() => {

        const fetchBoats = async () => {
            const allBoats = await apiFacade.getAllBoats();

            setBoatList(allBoats);
        }

        fetchBoats();

    }, [])

    useEffect(() => {
        const fetchOwners = async () => {
            const owners = await apiFacade.getOwnersByBoatName(selected);

            setOwnerList(owners)
            if (ownerList.length == 0){

            }
        }

        fetchOwners();
        console.log(ownerList);


    }, [selected])

    const clickHandler = (event) => {
        setSelected(event.target.value);
    }

    return (
        <div>
            <h1>Owners by boat</h1>

            <div>
                <div>
                    <select onClick={clickHandler} name="boats" id="boats">
                        <option selected="true" disabled="disabled">Choose boat:</option>

                        {boatList.map((boat) => {
                                return (
                                    <option value={boat.name}>{boat.name}</option>
                                )
                        })}
                    </select>
                </div>
            </div>

            <br/>
            <br/>

            <div table-container>
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">phone</th>
                        <th scope="col">address</th>
                    </tr>
                    </thead>
                    <tbody>

                    {ownerList.map((owner, index) =>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{owner.name}</td>
                                <td>{owner.phone}</td>
                                <td>{owner.address}</td>
                            </tr>
                        )
                    })}

                    </tbody>


                </table>


            </div>

        </div>
    );
};

// MyComponent.propTypes = {
//
// };

export default AllBoats;
