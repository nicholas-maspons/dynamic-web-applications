import styles from './SettingsSection.module.scss'

function SettingsSection(props) {

    const {title, children} = props;

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>{title}</h3>
            {children.map((child) => {
                return <h1>{child}</h1>
            })}
        </div>

    )
}

export default SettingsSection;
