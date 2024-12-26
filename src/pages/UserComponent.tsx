import {useState} from "react";

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
    //let userUnSorted= tabUsers;
    // hook useState
    const [userUnSorted, setUserSorted]=useState(tabUsers)
    const [alphabetOrder, setAlphabetOrder]=useState(1) // valeur de l'ordre definir positivement par defaut


    // ==============================function to sort by man or women==============================//
         const sortBy= (field: string,value:string)=>
         {
             console.log(field);
                 let  result= userUnSorted.sort((firstUser: User, secondUser:User)=>{
                 const fieldInFirstUser = firstUser[field as keyof User] || "";
                 const fieldInSecondUser = secondUser[field as keyof User] || "";

                    console.log("========================================")
                    console.log(fieldInFirstUser,fieldInSecondUser,field)
                    console.log("========================================")

                 let order= 1;
                    if(value === "male" || value==="-1"){
                        order = -1;
                    }
                    let sortResult=0;

                     if(fieldInFirstUser > fieldInSecondUser){
                         sortResult = 1;
                     }
                     if(fieldInFirstUser < fieldInSecondUser){
                         sortResult = -1;
                     }
                     return sortResult * order;
                });
             setUserSorted([...result])
    }

    // ==============================function to sort alphabetically==============================//
    const sortByAlphabeticLetter= ()=>
    {
        let  result= userUnSorted.sort((firstUser: User, secondUser:User)=>{

            const fieldInFirstUser = firstUser.firstName;
            const fieldInSecondUser = secondUser.firstName;

            const order = alphabetOrder === 1 ? -1 :1
            console.log(order)
            setAlphabetOrder(order);

            let sortResult=0;

            if(fieldInFirstUser > fieldInSecondUser){
                sortResult = 1;
            }
            if(fieldInFirstUser < fieldInSecondUser){
                sortResult = -1;
            }
            return sortResult * order;
        });
        // console.log(...result)
        setUserSorted([...result])
    }

    // recuperer le champs de trie
    //destruturer les prop
    //const usersFromTab= props.tabUsers;
    //const { tabUsers } = props;
    return(
        <section >
            <div className="flex justify-end my-2 gap-2 items-center">
                <span>Trier par</span>

                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md py-1 px-2 text-xs"
                        onClick={()=>sortBy("gender","male")}>Hommes
                </button>

                <button type="button" className="border border-gray-100 bg-gray-50 rounded-md py-1 px-2 text-xs"
                        onClick={()=>sortBy("gender","female")}>Femmes
                </button>

                <button type="button" className="border border-pink-700 bg-cyan-500 rounded-md py-1 px-2 text-xs"
                onClick={()=>sortByAlphabeticLetter()}>
                    DE A-Z / Z-A
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 ">
            {userUnSorted.map(({id,gender,firstName,lastName,phone,email="indisponible"}:User)=>(
                <article className=" text-base rounded-lg bg-gray-400 border border-pink-800 p-1.5" key={id}>
                    <h3 className="text-xl">
                         {firstName}
                         {lastName}
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