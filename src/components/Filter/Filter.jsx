import PropTypes from 'prop-types';
import styles from "./style.module.css"
export default function Filter({ onChange, value }) {

    return (<div className={styles.filter}>
        <label htmlFor="filter">Find contacts by name</label>
        <br />
        <input className={styles.input} onChange={onChange} type="text" name="filter" id="filter" value={value} />
    </div>)
}
Filter.defaultProps = {
    onChange: function () { },
    value: ""
}
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}