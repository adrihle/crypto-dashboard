import { ReactComponent as Bell } from '@assets/icons/icon-bell.svg';
import { T } from '@i18n';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
    return (
        <main className={styles.container}>
            <p>{T.NAVBAR_TITLE('Anakin')}</p>
            <Bell fill='white' />
        </main>
    )
}