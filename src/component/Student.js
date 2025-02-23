const student = (props) => {
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student First Name: <strong>{props.student.firstName}</strong></p>
            <p>Student Last Name: <strong>{props.student.lastName}</strong></p>
            <p>Student email: <strong>{props.student.email}</strong></p>
        </div>
    )
}

export default student