import React,{createContext} from 'react'
import { createTheme,ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from '@material-ui/core'

const TemplateContext= createContext(null)

const templateProvider = ({children}) => {
    const theme= createTheme({
        overrides: {
            MuiDialog: {
                papperWidthSm: {
                    maxWidth: "unset"
                }
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': 
                    { paddingTop: 0}
                }
            },
            MuiTableCell:{
                root:{
                    borderBottom: "none"
                }
            }
        }
    })
    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default templateProvider
