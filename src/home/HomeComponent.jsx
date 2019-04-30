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
            <div className="banner">
                <div className="container">
                    <div className="text">
                        <h2>Не обовязково бути господарем щоб піклуватися</h2>
                        <p>Зроби внесок за допомогою нашого додатку. Усi зібрани кошти підуть безпосередньо у притулки</p>
                    </div>
                    <img src="/images/banner.png" />
                </div>
            </div>
            <h1>Home</h1>
            <p>current count: {count}</p>
            <button onClick={onIncrementClick}>Increment</button>
            <button onClick={onDecrementClick}>Decrement</button>
        </div>
    )
}

export default HomeComponent;
