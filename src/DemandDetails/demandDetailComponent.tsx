import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

    type DemandObject={
        idd:number,
        userIdd: number,
        titled:string,
        bodyd:string
    }

 function DemandDetailComponent() {
        let {id} = useParams();

        const [demandVariable, setDemand]= useState<DemandObject>()

        const getOneDemand= async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const demand = await response.json();
            setDemand(demand)
        };

        useEffect(()=>{
            getOneDemand()
        },[])

        return (
            <article>
                <div  className="flex">
                    <div className="">
                        <h3 className="text-xl">
                            {demandVariable?.idd}
                            {demandVariable?.userIdd}
                        </h3>
                        <p className="text-xl">{demandVariable?.bodyd}
                        </p>
                        <p className="text-xs">
                            {demandVariable?.titled}</p>
                    </div>
                </div>

               <pre>{JSON.stringify(demandVariable,null,1)}</pre>

            </article>
        )
}

export default DemandDetailComponent
