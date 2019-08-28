import React, { PureComponent } from 'react';
import styles from './Notification.module.css'


class Notification extends PureComponent {
  render() {
    
    return (
      <div className={styles.success}>
        {this.props.message}
      </div>
    );
      
      
      
  }
    
}


Notification.defaultProps = {
  type: 'success',
  message: 'Success!'
}

export default Notification