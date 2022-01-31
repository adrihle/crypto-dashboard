import { useDashaboard } from "@hooks"
import { T } from "@i18n";
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const { total, formatPrice } = useDashaboard();
    return (
        <main className={styles.container}>
            <p>{T.HEADER_BALANCE}</p>
            <p>{`$ ${formatPrice(Number(total))}`}</p>
        </main>
    )
}