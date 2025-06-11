import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId} = useParams()
    return (
        <div className="text-white bg-gray-500 text-center py-4">User: {userId}</div>
    )
}

export default User;