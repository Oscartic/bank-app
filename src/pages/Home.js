import { useContext } from 'react';
import UserContext from '../context/users';

const BadBank = () => {
    const { users } = useContext(UserContext);
    return (
        <>
            <h3>BadBank Component</h3>
            {JSON.stringify(users)}
        </>
    )
};
export default BadBank;