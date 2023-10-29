import React from "react";
import users from "./users";

function Looping(){
    return(
        <div>
            <div>
                <table className="tables_style">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Location</th>
                            <th>Work</th>
                            <th>car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.location}</td>
                                <td>{user.work}</td>
                                <td>{user.car}</td>
                            </tr>
                        }
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default Looping;