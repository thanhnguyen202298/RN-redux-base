import {connect} from 'react-redux';
import {login} from '../../store/features/session/action';
import {getToken, getLoading} from '../../store/features/session/selector';
import Login from './Login';

const mapStateToProps = (state) => ({
  token: getToken(state),
  loading: getLoading(state),
});
const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
