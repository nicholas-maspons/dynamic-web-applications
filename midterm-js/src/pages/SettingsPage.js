import SettingsSection from "../components/SettingsSection";
import { useContext } from "react";
import { AppContext } from "../App";

import Toggle from "../components/Toggle"

import styles from './SettingsPage.module.scss'

function SettingsPage () {

    // const handleThemeToggle = useContext(ThemeContext);
    const app_state = useContext(AppContext);
    const sections = 
    [
        {
            title: 'Personalization',
            // component: SettingsSection,
            items: [
                // {
                //     label: 'Edit Goals',
                //     component: Input
                // i can padd a bool for consistency since settingsItem requires it, but in the actual Input component , it just wont use it.
                // },
                {
                    label: 'Toggle Units',
                    component: Toggle,
                    func: app_state.handleUnitToggle,
                    bool: app_state.isImperial
                },
                {
                    label: 'Light / Dark',
                    component: Toggle,
                    func: app_state.handleThemeToggle,
                    bool: app_state.isDark
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

    // wrapped in [] for when i eventually include the Account section
    // const sections = [

    // ]
    

    return (
        <div className={styles.settings}>
            {sections.map((section) => <SettingsSection title={section.title} items={section.items}/>)}
        </div>
    )
}

export default SettingsPage;