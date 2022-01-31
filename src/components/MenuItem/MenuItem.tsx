import { ReactComponent as DASHBOARD } from '@assets/icons/icon-dashboard.svg';
import { ReactComponent as SETTINGS } from '@assets/icons/icon-settings.svg';
import { ReactComponent as CARD } from '@assets/icons/icon-card.svg';
import { ReactComponent as REFRESH } from '@assets/icons/icon-refresh.svg';
import { EMenu } from '@constants';
import { useDashaboard } from '@hooks';
import styles from './MenuItem.module.scss';

interface Props {
    type: EMenu;
}

const icons: Record<EMenu, JSX.Element> = {
    [EMenu.DASHBOARD]: <DASHBOARD />,
    [EMenu.SETTINGS]: <SETTINGS />,
    [EMenu.CARD]: <CARD />,
    [EMenu.REFRESH]: <REFRESH />
}

export const MenuItem: React.FC<Props> = ({ type }) => {
    const { menu, selectMenu } = useDashaboard();
    const isActive = menu === type;
    return (
        <section
            className={`${styles.container} ${isActive && styles.selected}`}
            onClick={() => selectMenu(type)}
        >
            {icons[type]}
        </section>
    )
}