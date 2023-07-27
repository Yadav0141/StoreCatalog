import { Badge, ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
interface Props{
    darkMode : boolean;
    handleThemeChange : () => void;
}
export default function Heaader({darkMode,handleThemeChange}:Props){

    const midLinks= [
        {title: 'Catalog', path:'/catalog'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
    ];

    const rightLinks= [
        {title: 'Login', path:'/login'},
        {title:'Register', path:'/register'},
    ];

    const navStyles={color:'inherit',
    typography:'h6',
    textDecoration: 'none',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    }
    };

    return (
        <>
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar sx={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
            <Box display='flex' alignItems='center'>
            <Typography variant="h6" component={NavLink} to='/' 
                sx={navStyles}>
                    Re-Store
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Box>
            <Box display='flex' alignItems='center'>
                <List sx={{display:'flex'}}>
                        {midLinks.map(({title,path})=>(
                            <ListItem component={NavLink} to={path} key={path} 
                            sx={navStyles} >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                </List>
            </Box>

            <Box display='flex' alignItems='center'>
                <IconButton size="large" edge="start" color="inherit" sx={{mr:2}}>
                        <Badge color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{display:'flex'}}>
                        {rightLinks.map(({title,path})=>(
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles} >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
            </Box>

               
            </Toolbar>
        </AppBar>
        </>
    )
}