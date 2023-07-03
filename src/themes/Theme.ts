import { createTheme } from "@mui/material";

const theme = createTheme({ 
    typography: {
        h4: {
            '@media (max-width: 767px)': {
                fontSize: '24px'
            }
        },
    },
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        pointerEvents: 'none'
                    }
                }
            }
        }
    }
});

export default theme;