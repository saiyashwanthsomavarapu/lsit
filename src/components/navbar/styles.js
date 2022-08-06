import { AppBar, Menu } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Appbar = styled(AppBar)(()=>({
    background: 'transparent',
    boxShadow: 'unset',
    color: '#000'
}));

export const Linker = styled(Link)(() =>({
    textDecoration: 'none',
    color: '#000'
}))

export const StyledMenu = styled(Menu)(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        // marginTop: theme.spacing(1),
        minWidth: 180,
     '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            // marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
}))