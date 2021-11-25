import { useContext, useEffect } from 'react';
import UserContext from '../context/Users/UserContext';
import Card from '../ui/Card';

const BadBank = () => {
    const { getUsers, getProfile, users } = useContext(UserContext);

    useEffect(() => {
        getUsers();
        getProfile(3);
    }, [])
    return (
        <>
            <h3>BadBank Component</h3>
            <Card 
                bgcolor="secondary"
                txtcolor="white"
                header="BadBank landing Page"
                title="Welcome to the Bank"
                text="You can use this bank"
                body={(<img src="https://ik.imagekit.io/orb/bank_bl8qVd2IE.png?updatedAt=1637803496240" className="img-fluid" alt="responsive image" />)}
            />
        </>
    )
};
export default BadBank;