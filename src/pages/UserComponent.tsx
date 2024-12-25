
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
    tabUsers:User[];
}

function UserComponent(props:Props){
    //destruturer les prop
    //const usersFromTab= props.tabUsers;
    const { tabUsers } = props;
    return(
        <section className="grid md:grid-cols-3 gap-4 ">
            {tabUsers.map(({firstName,lastName,phone,email="indisponible"}:User)=>(
                <article className=" text-base rounded-lg bg-gray-400 border border-pink-800 p-1.5">
                    <h3 className="text-xl">
                        {firstName} {lastName}
                    </h3>
                    <p className="text-xs">
                        {email}</p>
                    <p className="text-xs">
                        {phone}
                    </p>
                </article>
            ))}
        </section>
    )

}
export default UserComponent;