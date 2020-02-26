import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import { orange, lightGreen, blueGrey } from '@material-ui/core/colors'
import { ReactNode } from 'react'


declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
      warning?: string;
      success?: string;
      pending?: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
        danger?: string;
        warning?: string;
        success?: string;
        pending?: string;
    };
}
}


const theme = createMuiTheme({
	palette: {
		primary: lightBlue,
		secondary: green,
	},
	status: {
		danger: red[100],
		warning: orange[100],
		success: lightGreen[100],
		pending: blueGrey[100],
	}
})


const CustomThemeProvider: React.FC<{children: ReactNode}> = ({children}) => <ThemeProvider theme={theme} >{children}</ThemeProvider> 

export default CustomThemeProvider