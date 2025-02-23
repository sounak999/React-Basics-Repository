import { useState } from "react";

const User = () => {
    // const [firstName, setFirstName] = useState('Sounak')
    // const [lastName, setLastName] = useState('Saha')
    // const [email, setEmail] = useState('sounak@gmail.com')

    const [user, setUser] = useState({
        firstName: "Sounak",
        lastName: "Saha",
        email: "sounak.saha@google.com"
    })

    function updateUser() {
        // setFirstName('Ankan')
        // setLastName('Salah')
        // setEmail('ankan@email.com')
        setUser({
            firstName: "Ankan",
            lastName: "Diaz",
            email: "ankan@email.com"
        })
    }

    return (
        <div>
            <h1>User Details</h1>
            {/* <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p> */}
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User