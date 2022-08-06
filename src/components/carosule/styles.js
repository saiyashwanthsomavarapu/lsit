import { styled } from '@mui/material/styles';

export const CarouselCard = styled('div')(() => ({
    background: '#fff',
	// boxShadow: '0 10px 20px -5px rgba(0, 0, 0,.125)',
	height: 110,
	margin: 'auto',
	overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
	position: 'relative',
	width: '960',
    '&::before, &::after': {
        // background:'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
		content: "''",
		height: 100,
		position: 'absolute',
		width: 200,
		zIndex: 2,
	},
	
	'&::after': {
		right: 0,
		top: 0,
		transform: 'rotateZ(180deg)',
	},

	'&::before': {
		left: 0,
		top: 0,
	}
}));

export const CarouselContent = styled('div')(() => ({
    animation: 'scroll 40s linear infinite',
	display: 'flex',
	width: 'calc(250px * 14)',
    padding: 4,
    '@keyframes scroll': {
        '0%': { 
            transform: 'translateX(0)' 
        },
        '100%': { 
            transform: 'translateX(calc(-250px * 7))'
        }
    }

}))

export const CarouselItem = styled('div')(() => ({
    height: 100,
	width: 250,
    margin: '0px 10px 0px 10px',    
    border: '1px solid rgba(0,0,0,0.1)'
}))