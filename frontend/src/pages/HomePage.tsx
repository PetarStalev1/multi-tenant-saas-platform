import styles from './page.module.css'
import { Link } from '@tanstack/react-router'

const HomePage: React.FC = () => {
    return <div className={[styles.page, styles.home].join(' ')}>
        <img src="/appicon.png" alt="My Saas Product" className={styles.appicon} />
        <h1>My SaaS product</h1>
        <div>
            <Link to="/app/notes" className={styles.cta}>Go To App</Link>
        </div>
    </div>
}

export default HomePage;