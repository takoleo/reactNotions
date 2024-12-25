
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

type Props={
    tabUsers: User[];
}

function UserComponent({tabUsers}:Props){
    let userUnSorted= tabUsers;
    const sortBy= (field: string)=> {
        console.log(field);
       userUnSorted= userUnSorted.sort((firstUser: User, secondUser:User)=>{
            const fieldInFirstUser = firstUser[field as keyof User] || "";
            const fieldInSecond = secondUser[field as keyof User] || "";
             if(fieldInFirstUser> fieldInSecond){
                 return 1;
             }
             if(fieldInFirstUser<fieldInSecond){
                 return -1;
             }
             return 0;

        })
    } // recuperer le champs de trie
    //destruturer les prop
    //const usersFromTab= props.tabUsers;
    //const { tabUsers } = props;
    return(
        <section >
            <div className="flex justify-end my-2 gap-2 items-center">
                <span>Trier par</span>
                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md py-1 px-2 text-xs" onClick={()=>sortBy("male")}>Hommes</button>
                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md py-1 px-2 text-xs" onClick={()=>sortBy("female")}>Femmes</button>
            </div>
            <div className="grid md:grid-cols-3 gap-4 ">
            {tabUsers.map(({gender,firstName,lastName,phone,email="indisponible"}:User)=>(
                <article className=" text-base rounded-lg bg-gray-400 border border-pink-800 p-1.5">
                    <h3 className="text-xl">
                         {firstName} {lastName}
                    </h3>
                    <p className="text-xl">{gender}
                        </p>
                    <p className="text-xs">
                        {email}</p>
                    <p className="text-xs">
                        {phone}
                    </p>
                </article>
            ))}
            </div>
        </section>
    )

}
export default UserComponent;