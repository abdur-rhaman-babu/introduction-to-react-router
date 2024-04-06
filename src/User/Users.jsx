import {useLoaderData} from "react-router-dom"
import User from "./User";
const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1>You are honest user</h1>
            {
                users && users.map((user)=> <User key={user.id} user = {user}/>)
            }
        </div>
    );
};

export default Users;