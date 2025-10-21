import styles from './SettingsItem.module.scss'

function SettingsItem(props) {

    // Component must be capital or else react wont see it as a custom component. You can tell by how the color changes if i change it all to lowercase
    const {label, Component, func, bool} = props
    return (
        <div className={styles.item}>
            <h4 className={styles.label}>{label}</h4>
            <Component func={func} bool={bool}/>
        </div>
    )
}

export default SettingsItem;
