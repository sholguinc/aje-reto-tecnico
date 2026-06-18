import { createTheme, alpha } from '@mui/material/styles';

import { COLORS } from '@/constants';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: COLORS.primary
        },
        background: {
            default: COLORS.background
        }
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: "#fff",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: alpha(COLORS.primary, .9),
                    },
                },
            },
        },
    },

});
