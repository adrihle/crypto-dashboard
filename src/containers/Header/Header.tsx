import { useDashaboard } from "@hooks"
import { T } from "@i18n";
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const { total } = useDashaboard();
    const nf = new Intl.NumberFormat('en-EN');
    return (
        <main className={styles.container}>
            <p>{T.HEADER_BALANCE}</p>
            <p>{`$ ${nf.format(Number(total))}`}</p>
        </main>
    )
}