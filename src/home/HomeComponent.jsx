import React from 'react';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this);
    }

    componentDidMount() {
        this.props.getHomeShelters()
    }

    render() {
        const shelters = this.props.shelters.map((shelter) =>
            <li>{shelter.name}</li>
        );
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <div className="text">
                            <h2>Не обовязково бути господарем щоб піклуватися</h2>
                            <p>Зроби внесок за допомогою нашого додатку. Усi зібрани кошти підуть безпосередньо у притулки</p>
                        </div>
                        <img src="/images/banner.png" alt="Бобiк" />
                    </div>
                </div>
                {shelters}
                <h1>Home</h1>
                <p>current count: {this.props.count}</p>
                <button onClick={this.props.onIncrementClick}>Increment</button>
                <button onClick={this.props.onDecrementClick}>Decrement</button>
            </div>
        )
    }
}

export default HomeComponent;
