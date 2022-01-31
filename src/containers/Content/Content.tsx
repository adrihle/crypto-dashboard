import { useDashaboard } from "@hooks";
import { Investment, ShowTransactions } from "@components";
import styles from './Content.module.scss';
import { T } from "@i18n";

export const Content: React.FC = () => {
    const { investments } = useDashaboard();
    return (
        <main className={styles.container}>
            <h4>{T.CONTENT_RECENT}</h4>
            <section>
                {investments.map(({ id: key, ...rest }) => <Investment key={key} {...rest} />)}
            </section>
            <ShowTransactions />
        </main>
    )
}