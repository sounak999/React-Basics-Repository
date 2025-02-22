import React from "react";

const HelloWorld = () => {
    // const myElement = <div><h1> Hello World!</h1></div>
    // return myElement
    // return React
    //     .createElement('div', null, 
    //         React.createElement('h1', null, 'Hello World!')
    //     )

    // rules of JSX

    const name = "Soumitra"
    const age = 15 + 3
    const handleClick = () => alert("Button clicked!")

    return (
        <div>
            <h1 className="title">Hello World</h1>
            <h2>Description</h2>
            <p>This is a paragraph</p>
            <p> Name: {name}, Age: {age} </p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default HelloWorld;