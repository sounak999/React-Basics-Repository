import React from "react";

const HelloWorld = () => {
    const myElement = <div><h1> Hello World!</h1></div>
    return myElement
    // return React
    //     .createElement('div', null, 
    //         React.createElement('h1', null, 'Hello World!')
    //     )
}

export default HelloWorld;