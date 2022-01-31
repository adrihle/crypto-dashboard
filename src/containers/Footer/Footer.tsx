import styles from './Footer.module.scss';
import { MenuItem } from '@components';
import { EMenu } from '@constants';

export const Footer: React.FC = () => (
    <main className={styles.main}>
        <MenuItem type={EMenu.DASHBOARD} />
        <MenuItem type={EMenu.CARD} />
        <MenuItem type={EMenu.REFRESH} />
        <MenuItem type={EMenu.SETTINGS} />
    </main>
)