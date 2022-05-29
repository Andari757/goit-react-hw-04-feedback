import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
Section.defaultProps = {
    title: ""
}
Section.propTypes = {
    title: PropTypes.string
}