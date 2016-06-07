import React from 'react'
// only import in Header
import { Link } from 'react-router'
import styles from './style'

export default class About extends React.Component {

    render() {
        return (
            <div className={styles.about}>
                <div className={styles.desc}>
                    Demo powered by v2rx
                </div>

                <ul>
                    <li>
                        <Link to="/" className={styles.link}>Back Home</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
