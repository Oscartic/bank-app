import UserContext from "./index";

const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={ {users: ['Peter']} }>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;