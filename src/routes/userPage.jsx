import React from 'react';
import ApiFacade from "../apiFacade";
import {Link, Outlet} from "react-router-dom";

const UserPage = props => {
    return (
        <div>
            {ApiFacade.getRoles() === "user" ?
                (<div>
                    <h1 className="title">User page</h1>

                        <div className="link-container">
                            <Link to="/allowners">All owners</Link> |{" "}
                            <Link to="/harbourboats">Boats by harbour</Link> |{" "}
                        </div>


                </div>)
                :
                (<h1>You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;