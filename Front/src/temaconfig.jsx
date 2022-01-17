import {createTheme} from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#e8eaf6',
            dark: '#b6b8c3',
            contrastText: '#000000',
        },
        secondary: {
            light: '#ff7961',
            main: '#e0f2f1',
            dark: '#ba000d',
            contrastText: '#000',
        },
        tercero:{
            light: '#ffa733',
            main: '#b26500',
            dark: '#ff9100',
            contrastText: '#000',
        },
    },

})

export default theme