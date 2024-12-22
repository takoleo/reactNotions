type Props={
    firstName:string;
    lastName: string;
    email?:string;
    phone?:number;
    texte:string;
}

function  Message(props:Props){
    return (

     <>
        <p>
            {props.texte} {props.firstName} {props.lastName}
        </p>

        <p>
            {props?.email && <span>{props.email}</span>   }
            {props?.phone ? <span>{props.phone}</span> : null  }
        </p>
     </>
    );

}

export default Message;