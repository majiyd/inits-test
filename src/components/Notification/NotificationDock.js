import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import Notification from './Notification'
import styles from './NotificationDock.module.css'

function mapStateToProps(state){
  return{
    notifications: state.notifications
  }
}
class NotificationDock extends PureComponent {
  
  render() {
    return (
      <div className={styles.notification_dock}>
        {this.props.notifications.map(
          (notification)=>(
            <Notification 
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          ))
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotificationDock);