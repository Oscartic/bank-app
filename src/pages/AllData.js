import { useContext } from "react";
import UserContext from '../context/Users/UserContext';

const AllData = () => {
    const { users } = useContext(UserContext);
    return(
        <>
            <h1>HOLA AllData</h1>
            {JSON.stringify(users)}
        </>
    )
}

export default AllData;