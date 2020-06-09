import React from 'react'

function Dinner(props) {
    return (
        <div>
                <h1>Hello World from <i>{props.Name}</i></h1>
                <h1>Welcome to the world of {props.new}</h1>
                <h1>Here you study all about {props.subject}</h1>
        </div>

    );
}
export default Dinner;