import { createTheme } from '@mui/material/styles';
import {blue} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: blue[500],
            a:{
                hover:{
                    color: 'red'
                }
            }
        },
        secondary: {
            main: blue[300]
        }
    },
    components: {

    }
});
export default theme;
