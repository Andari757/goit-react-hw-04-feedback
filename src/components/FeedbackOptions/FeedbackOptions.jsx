import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className={styles['button-wraper']}>
            {options.map((option, index) => (
                <button key={index} className={styles.button} onClick={() => onLeaveFeedback(option)} >{option}</button>
            ))}
        </div>)
}
FeedbackOptions.defaultProps = {
    options: [],
    onLeaveFeedback: () => { }
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}