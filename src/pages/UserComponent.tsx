
type User={

    id: string;
    picture: string;
    firstName: string;
    lastName: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
};

type Props={
    tabUsers:User[];
}

function UserComponent(props:Props){
    const usersFromTab= props.tabUsers;
    return(
        <section className="grid">
            {usersFromTab.map((user:User)=>(
                <article className="user">
                    <h3>
                        {user.firstName}
                        {user.lastName}
                    </h3>
                    <p>
                        {user.email}
                        {user.phone}
                    </p>
                </article>
            ))}
        </section>
    )

}
export default UserComponent;