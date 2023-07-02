import { createTheme } from "@mui/material";

const theme = createTheme({ 
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