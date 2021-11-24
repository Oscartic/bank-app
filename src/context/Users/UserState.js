import { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import dataUsers from '../../usersMock';

const UserState = (props) => {
    
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getUsers = async () => {
        try {
            const users = await dataUsers;
            console.log("[✔︎][getUsers] respond to success", users)
            dispatch({
                type: 'GET_USERS',
                payload: users
            });   
        } catch (error) {
            console.log("[❌][getUsers] respond to success", error.message);
        }
    }

    const getProfile = async  (id) => {  
        try {
            const user = await dataUsers.find(u => u.id === id);
            if(!user) return console.log("[❌][getProfile] idUser not found");
            console.log("[✔︎][getProfile] respond to success", user)
            dispatch({
                type: 'GET_PROFILE',
                payload: user
            });   
        } catch (error) {
            console.log("[❌][getProfile] respond to success", error.message);
        }
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;