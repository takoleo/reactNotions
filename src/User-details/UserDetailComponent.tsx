import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

type User={
    id: string;
    picture: string;
    firstName: string;
    lastName: string;
    gender: string;
    company: string;
    email?: string;
    phone: string;
    address: string;
    about: string;
};
function UserDetailComponent() {
    let {id} = useParams();
    const [user, setUser]= useState<User>()
    const getOneUser= async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();
              setUser(user)
    };


/*    {#each people as person}

    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
        <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
        <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">{person.name}</p>
            <p class="text-sm text-slate-500 truncate">{person.email}</p>
        </div>
    </li>

    {/each}*/

    useEffect(()=>{
              getOneUser();
    },[])
    return (
        <article>
            <div  className="flex justify-between">
                <div className="flex py-4 first:pt-0 last:pt-0" >
                    <img className="h-20 w-20 rounded-sm mr-3"  src="https://picsum.photos/200"/>
                    {/*<h3 className="text-xl">
                        {user?.firstName}
                        {user?.lastName}
                    </h3>
                    <p className="text-xl">{user?.gender}
                    </p>*/}
                    <ul>
                        <li className="text-xs">
                            {user?.email}
                        </li>

                        <li className="text-xs">
                            {user?.phone}
                        </li>
                    </ul>
                </div>

                <div >
                  <div  className="  flex  justify-end"> <Link to={`/dashboard/users`} >Afficher la liste</Link></div>
                </div>

            </div>


{/*
           <pre>{JSON.stringify(user,null,2)}</pre>
*/}
        </article>
    )
}

export default UserDetailComponent
