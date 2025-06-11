import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/tripathiharsh95').then(response => response.json()).then(data => {setData(data)})
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <img  src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githunInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tripathiharsh95') 
    return response.json()
}