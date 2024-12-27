import {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import {DEMAND,} from "../user/users.tsx";

 type DemandObject={
      id:number,
      userId: number,
      title:string,
      body:string
  }

function DemandComponent() {

     const [demandVariable, setDemand ] = useState(DEMAND)

    const getDemandWithAsynAwait = async ()=>{
        const response = await  fetch('https://jsonplaceholder.typicode.com/posts')
        const demandResponse = await  response.json()
        setDemand(demandResponse);
    }

    useEffect(()=>{
        getDemandWithAsynAwait();
    },[]);


    return (
        <div className="grid md:grid-cols-3 gap-4 ">
            {demandVariable.map(({id,userId,title,body}:DemandObject)=>(
                <Link to={`/dashboard/detailsDemand/${id}`}
                      className=" text-base rounded-lg bg-gray-400 border border-pink-800 p-1.5" key={id}>
                    <h3 className="text-xl">
                        {userId}
                        {title}
                    </h3>
                    <p className="text-xs">
                        {body}</p>
                </Link>
            ))}
        </div>
    )
}

export default DemandComponent
