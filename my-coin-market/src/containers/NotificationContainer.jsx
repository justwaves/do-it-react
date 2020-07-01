import { connect } from 'react-redux';
import Notification from 'components/Notification';

const mapStateToProps = (state) => {
  console.log(state.notification);
  const { showMessage, message, warning } = state.notification;

  return { showMessage, message, warning };
};

export default connect(mapStateToProps)(Notification);
