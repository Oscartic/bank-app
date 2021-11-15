import { useContext } from 'react';
import UserContext from '../context/users';

const Home = () => {
    const { users } = useContext(UserContext);

    return (
        <>
            <h3>Home Component</h3>
            {JSON.stringify(users)}
        </>
    )
};
export default Home;