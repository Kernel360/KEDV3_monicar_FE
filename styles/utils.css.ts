import { style } from '@vanilla-extract/css'

import { breakPoints } from './theme.css'

export const mediaQuery = {
    mobile: `screen and (max-width: ${breakPoints.mobile}px)`,
    tablet: `screen and (max-width: ${breakPoints.tablet}px)`,
    desktop: `screen and (max-width: ${breakPoints.desktop}px)`,
} as const

export const mobileOnly = style({
    display: 'none',
    '@media': {
        [mediaQuery.mobile]: {
            display: 'block',
        },
    },
})