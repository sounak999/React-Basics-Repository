const student = ({firstName, lastName, email}) => {
    return (
        <div>
            {/* <h1>Student Details</h1>
            <p>Student First Name: <strong>{props.student.firstName}</strong></p>
            <p>Student Last Name: <strong>{props.student.lastName}</strong></p>
            <p>Student email: <strong>{props.student.email}</strong></p> */}
            <h1>Student Details</h1>
            <p>Student First Name: <strong>{firstName}</strong></p>
            <p>Student Last Name: <strong>{lastName}</strong></p>
            <p>Student email: <strong>{email}</strong></p>
            {/* <p>Skills: {props.skills.join(", ")}</p> */}
        </div>
    )
}

export default student