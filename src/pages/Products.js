import { useContext } from "react";
import UserContext from '../context/users';

const Products = () => {
    const { users } = useContext(UserContext);
    users.push(Math.random().toString(36).substr(2, 5));
    return(
        <>
            <h1>HOLA Products</h1>
            {JSON.stringify(users)}
        </>
    )
}

export default Products;