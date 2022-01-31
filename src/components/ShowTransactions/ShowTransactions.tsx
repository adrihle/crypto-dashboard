import { T } from "@i18n";
import styles from './ShowTransactions.module.scss';

export const ShowTransactions: React.FC = () => {
    return (
        <button className={styles.container}>
            {T.SHOW_ALL_TRANSACTIONS}
        </button>
    )
}