import styles from "../styles/app.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.VSaMwiBwAp_wb3BL-jMKsAHaHa&pid=Api&P=0&h=220" alt="logo" />
            <span>Habit Tracker</span>
        </div>
    )
}

export default Navbar;