import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LeftGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
}))

export const LearnMoreButton = styled(Button)(() => ({
    borderRadius: 10,
    color: '#fff',
    paddingLeft: '4px !important',
    paddingRight: 4,
    background: '#f4b41a',
    alignSelf: 'flex-start'
}))

export const Subheading = styled(Typography)(() => ({

}))
