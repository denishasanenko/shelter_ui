import { connect } from 'react-redux';
import PetsComponent from './PetsComponent';

const mapStateToProps = state => {
    return {  }
};

const mapDispatchToProps = dispatch => {

    return {
    }
};

const PetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetsComponent);

export default PetsContainer;
