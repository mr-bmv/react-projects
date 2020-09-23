import React from 'react'
import { useAlertContext } from '../context/AlertContext';

function Alert() {

    const { alert, hideAlert} = useAlertContext()

    if (!alert) return null;

    return (
        <div className={`alert alert-${alert.type} alert-dismissible`}
            role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true"
                    onClick={hideAlert}>&times;</span>
            </button>
        </div>
    )
}

export default Alert;