import { connect } from 'react-redux';
import StoriesComponent from './StoriesComponent';
import {storiesOperations} from "./duck";

const mapStateToProps = state => {
    const { stories } = state.stories;
    return { stories }
};

const mapDispatchToProps = dispatch => {
    const getStories = () => {dispatch(storiesOperations.getStories())};
    return {
        getStories
    }
};

const StoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StoriesComponent);

export default StoriesContainer;
