import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';
import { aboutOperations } from './duck';

const mapStateToProps = state => {
    console.log(state);
    const { count } = state.about;
    return { state, count }
};

const mapDispatchToProps = dispatch => {
    // '1' is the number by which you want to increment the count
    const onIncrementClick = () => dispatch(aboutOperations.incrementCount(1));
    const onDecrementClick = () => dispatch(aboutOperations.decrementCount(1));

    return {
        onIncrementClick,
        onDecrementClick
    }
};

const AboutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutComponent);

export default AboutContainer;
