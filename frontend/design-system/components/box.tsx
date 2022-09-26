import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import { spacing } from '../units'
import { theme as defaultTheme } from '../theme'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { Theme } from '@emotion/react'

const defaultProps = {
    paddingX: 1,
    paddingY: 1,
    marginX: 1,
    marginY: 1,
    width: 'auto',
    display: 'block',
    theme: defaultTheme,
}

interface BoxProps extends React.CSSProperties {
    paddingX: number;
    paddingY: number;
    marginX: number;
    marginY: number;
    theme: Theme;
}

const StyledBox = ({
    paddingX,
    paddingY,
    marginX,
    marginY,
    width,
    display,
    theme,
    ...props
}: BoxProps = defaultProps) => {
    if (isObjectEmpty(theme)) {
        theme = defaultTheme;
    }

    const padding = spacing[props.padding];
    let paddingTop = spacing[props.paddingTop];
    let paddingRight = spacing[props.paddingRight];
    let paddingBottom = spacing[props.paddingBottom];
    let paddingLeft = spacing[props.paddingLeft];
    if (paddingX) {
        paddingLeft = spacing[paddingX];
        paddingRight = spacing[paddingX];
    }
    if (paddingY) {
        paddingTop = spacing[paddingY];
        paddingBottom = spacing[paddingY];
    }
    const margin = spacing[props.margin];
    let marginTop = spacing[props.marginTop];
    let marginRight = spacing[props.marginRight];
    let marginBottom = spacing[props.marginBottom];
    let marginLeft = spacing[props.marginLeft];
    if (marginX) {
        marginLeft = spacing[marginX]
        marginRight = spacing[marginX]
    }
    if (marginY) {
        marginTop = spacing[marginY];
        marginBottom = spacing[marginY];
    }

    return {
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        width,
        display,
        fontFamily: theme.typography.fontFamily,
    };
}

const IGNORED_PROPS = ['display', 'width'];

const boxConfig = {
    shouldForwardProp: (prop) =>
        isPropValid(prop) && !IGNORED_PROPS.includes(prop),
}

export const Box = styled('div', boxConfig)(StyledBox);