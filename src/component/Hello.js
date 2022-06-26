import World from "./World";
import styles from "./Hello.module.css";
import UserName from "./UserName";
import {useState} from "react";
export default function Hello({age}) {
    //console.log(props);
    const [name,setName] = useState("Mike");
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
    return (
        <div>
            <h1>state</h1>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name}/>
            <button onClick={()=>{setName(name === "Mike" ? "Jane" : "Mike")}}>Change</button>
        </div>
    );
};