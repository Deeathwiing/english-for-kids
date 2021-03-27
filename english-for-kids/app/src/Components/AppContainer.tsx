import { connect } from 'react-redux';

import App from './App';
// import CardsActionCreator from '../../Redux/actionCreators/CardsActionCreator';

const mapStateToProps = (state: { cards: any }) => ({
  state: {
    cards: state.cards,
  },
});

const AppContainer = connect(
  mapStateToProps,
  null,
)(App);

export default AppContainer;
