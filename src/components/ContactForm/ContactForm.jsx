import { useState } from "react"
import styles from "./style.module.css"
import PropTypes from "prop-types"
export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleChange = (e) => {
        if (e.target.name === "name") setName(e.target.value)
        else if (e.target.name === "number") setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ name, number })
        setName("");
        setNumber('')
    }

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <label htmlFor="text">Name</label>
            <br />
            <input
                className={styles.input}
                onChange={handleChange}
                value={name}
                id="text"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <br />
            <label htmlFor="number">Number</label>
            <br />
            <input
                className={styles.input}
                onChange={handleChange}
                value={number}
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            /><br />
            <button className={styles.button} type="submit">add contact</button>
        </form>
    )

}
ContactForm.defaultProps = {
    onSubmit: function () { }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}