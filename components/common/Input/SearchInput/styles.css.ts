import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
})

export const input = style({
    width: '100%',
    paddingRight: '40px',
})

export const iconWrapper = style({
    position: 'absolute',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '48px',
})

export const sizeVariants = styleVariants({
    small: {
        width: '278px',
    },
    medium: {
        width: '302px',
    },
    large: {
        width: '358px',
    },
})
