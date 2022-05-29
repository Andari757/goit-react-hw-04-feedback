import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Notification({ message }) {
    if (!message) return
    return (
        <div className={styles.notify}>{message}</div>
    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,

}