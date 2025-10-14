import SettingsSection from "../components/SettingsSection";


import Toggle from "../components/Toggle"

import styles from './SettingsPage.module.scss'

const sections = 
[
    {
        title: 'Personalization',
        // component: SettingsSection,
        items: [
            // {
            //     label: 'Edit Goals',
            //     component: 'idk yet'
            // },
            // {
            //     label: 'Toggle Units',
            //     component: Toggle
            // },
            {
                label: 'Light / Dark',
                component: Toggle
            }
        ]
    },
    // {
    //     title: 'Account',
    //     component: SettingsSection,
    //     items: [
    //         {
    //             label: 'Change Name',
    //             // fix later since this wont actually be a Toggle
    //             component: Toggle
    //         },
    //         {
    //             label: 'Log Out',
    //             component: 'idk yet'
    //         }
    //     ]
    // }
]

function SettingsPage () {
    return (
        <div className={styles.settings}>
            {sections.map((section) => <SettingsSection title={section.title} items={section.items}/>)}
        </div>
    )
}

export default SettingsPage;