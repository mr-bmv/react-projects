import React, { useContext } from 'react'
import { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../reducer/actionTypes'
import { AlertReducer } from '../reducer/AlertReducer'

const AlertContext = React.createContext()

export const useAlertContext = () => {
    return useContext(AlertContext)
}

const AlertProvider = ({ children }) => {

    const [alert, dispatch] = useReducer(AlertReducer, false)

    const hideAlert = () => dispatch({ type: HIDE_ALERT })
    const showAlert = (text, type = 'info') => dispatch(
        {
            type: SHOW_ALERT,
            payload: {
                text, type
            }
        }
    )

    return (
        <AlertContext.Provider value={{ alert, hideAlert, showAlert }}>
            { children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;