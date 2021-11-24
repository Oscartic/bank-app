import { useContext, useEffect } from 'react';
import UserContext from '../context/Users/UserContext';

const BadBank = () => {
    const { getUsers, getProfile, users } = useContext(UserContext);

    useEffect(() => {
        getUsers();
        getProfile(3);
    }, [])
    return (
        <>
            <h3>BadBank Component</h3>
            {JSON.stringify(users)}
        </>
    )
};
export default BadBank;