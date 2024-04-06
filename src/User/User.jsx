
const User = ({user}) => {
const {name,username,email} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <li>{email}</li>
        </div>
    );
};

export default User;