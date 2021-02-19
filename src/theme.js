import { createMuiTheme } from '@material-ui/core/styles';

const primary = {
    cbiBlue: 'rgba(16,78,126,1)',
    cbiDarkBlue: 'rgba(5,54,92,1)',
    cbiLightBlue: 'rgba(36,112,171,1)'
};

const secondary = {
    cbiGrey: 'rgba(90,94,102,1)',
    cbiDarkGrey: 'rgba(66,66,66,1)',
    cbiLightGrey: 'rgba(226,226,226,1)'
}

const button = {
    main: `rgba(214,85,50,1)`
}

const common = {
    black: `rgba(0,0,0)`,
    white: `rgb(255,255,255)`
}


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary.cbiBlue,
            dark: primary.cbiDarkBlue,
            light: primary.cbiLightBlue
        },
        secondary: {
            main: secondary.cbiGrey,
            dark: secondary.cbiDarkGrey,
            light: secondary.cbiLightGrey
        },
        common: {
            black: common.black,
            white: common.white
        },
        button: {
            main: button.main
        }
    },
    mixins: {
        toolbar: {
            minHeight: 36
        }
    }
})