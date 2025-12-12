import SettingsItem from '../SettingsItem';

import styles from './SettingsSection.module.scss'

function SettingsSection(props) {

    // items is an array
    const {title, items} = props;
    
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {items.map((item) => <SettingsItem label={item.label} Component={item.component} func={item.func} bool={item.bool}/>)}
        </div>

    )
}

export default SettingsSection;
