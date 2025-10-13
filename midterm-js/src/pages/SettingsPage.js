import SettingsSection from "../components/SettingsSection";

import Toggle from "../components/Toggle"

import styles from './SettingsPage.module.scss'

// import the components that will go inside the item component (this one is inside SetSection)
const sections = 
[
    {
        title: 'Personalization',
        items: [
            {
                label: 'Edit Goals',
                component: 'idk yet'
            },
            {
                label: 'Toggle Units',
                component: Toggle
            },
            {
                label: 'Toggle Theme',
                component: Toggle
            }
        ]
    },
    {

    }
]

function SettingsPage () {
    return (
        <div className={styles.settings}>
            <SettingsSection title='Personalization'>
                {/* Change Goals */}

                {/* Units */}
                <Toggle/>
                {/* Theme */}
                <Toggle/>
                
            </SettingsSection>
            <SettingsSection title='Account'>
                <p>Change Name</p>
                <p>Log Out</p>
            </SettingsSection>
        </div>
    )
}

export default SettingsPage;