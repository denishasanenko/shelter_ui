import React from 'react';

function HomeComponent({
    state,
                           count,
                           onIncrementClick,
                           onDecrementClick
                       }) {
    console.log(state);
    return (
        <div>
            <p>current count: {count}</p>
            <button onClick={onIncrementClick}>Increment</button>
            <button onClick={onDecrementClick}>Decrement</button>
        </div>
    )
}

export default HomeComponent;
