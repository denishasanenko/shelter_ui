import React from 'react';

function AboutComponent({
                           count,
                           onIncrementClick,
                           onDecrementClick
                       }) {
    return (
        <div>
            <h1>About</h1>
            <p>current count: {count}</p>
            <button onClick={onIncrementClick}>Increment</button>
            <button onClick={onDecrementClick}>Decrement</button>
        </div>
    )
}

export default AboutComponent;
