import React from 'react';

class StoriesComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this);
    }

    componentWillMount() {
        console.log(this.props.stories);
    }

    componentDidMount() {
        console.log(123);
        this.props.getStories();
    }

    render() {
        const listItems = this.props.stories.map((story) =>
            <li>{story.title}</li>
        );
        return (
            <div>
                <h1>Stories</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default StoriesComponent;
