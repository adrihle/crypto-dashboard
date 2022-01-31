import { useDashaboard } from "@hooks";
import { IInvestment } from "@interfaces";
import styles from './Investment.module.scss';

export const Investment: React.FC<Omit<IInvestment, 'id'>> = investment => {
    const { formatPrice } = useDashaboard();
    const { name, sku, variant, stock } = investment;
    const isNegativeVariant = variant < 0;
    return (
        <main className={styles.container}>
            <section>
                <p>{name}</p>
                <p>{sku}</p>
            </section>
            <section>
                <p>${formatPrice(stock)}</p>
                <p className={isNegativeVariant ? styles.negative : ''}>
                    {variant.toFixed(2)}
                </p>
            </section>
        </main>
    )
}