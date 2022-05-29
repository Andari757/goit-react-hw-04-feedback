import styles from "./style.module.css"
export default function ListItem({ contacts, onClick }) {
    return (
        contacts.map((e) => <li className={styles.listItem} key={e.id}>{e.name}   -   {e.number} <button className={styles.button} onClick={() => { onClick(e.name) }} >Delete</button></li>)
    )
}