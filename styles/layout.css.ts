import { style } from '@vanilla-extract/css'

export const layoutContainer = style({
    display: 'flex',
    minHeight: '100vh',
})

export const mainContent = style({
    flex: 1,

    backgroundImage: 'url("/images/sign-in-background-desktop.jpg")',
})
