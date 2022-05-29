import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (<ul className={styles.statistics}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback: {positivePercentage.toFixed(2)}%</li>
    </ul>)
}
Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
}
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number

}