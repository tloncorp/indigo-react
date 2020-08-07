import { Theme } from "@tlon/indigo-light";

type Colors = keyof Theme['colors']


const color = {
    foreground: ({colors}: Theme, color:Colors) => `
        color: ${colors[color]};
        fill: ${colors[color]};
    `, 
    background: ({colors}: Theme, color:Colors) => `
        background-color: ${colors[color]};
    `,
}

const border = {
    full: ({colors}:Theme, color:Colors) => `
        border: 1px solid;
        border-color: ${colors[color]};
    `,
}

const pad = {
    base: ({space}:Theme) => `padding: ${space[2]}px;`,
    baseX: ({space}:Theme) => `padding-left: ${space[2]}px; padding-right: ${space[2]}px;`,
}

const height = {
    // Default 32px
    base4: ({sizes}:Theme) => `max-height: ${sizes[5]}px; min-height:${sizes[5]}px;`,
    // Default 24px
    base3: ({sizes}:Theme) => `max-height: ${sizes[4]}px; min-height:${sizes[4]}px;`,
    // Default 16px
    base2: ({sizes}:Theme) => `max-height: ${sizes[3]}px; min-height:${sizes[3]}px;`,
    // Default 8px
    base: ({sizes}:Theme) => `max-height:${sizes[1]}px; min-height:${sizes[1]}px;`,
}

const container = {
    row: () => `
        display: flex;
    `,
    col: () => `
        display: flex;
        flex-direction: column;
    `,
    center: () => `
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    centerX: () => `
        display: flex;
        justify-content: center;
    `,
    centerY: () => `
        display: flex;
        align-items: center;
    `,
    left: () => `
        display: flex;
        justify-content: flex-start;
    `,
    right: () => `
        display: flex;
        justify-content: flex-end;
    `,
    top: () => `
        display: flex;
        justify-content: flex-start;
    `,
    bottom: () => `
        display: flex;
        justify-content: flex-end;
    `,
    pitchXBase: ({space}:Theme) => `
        * > {
            padding-left:${space[2]}px;
        }
        * :last-child {
            padding-left:${space[0]}px;
        }
    `,
    pitchYBase: ({space}:Theme) => `
        * > {
            padding-top:${space[2]}px;
        }
        * :last-child {
            padding-top:${space[0]}px;
        }
    `,
}

const radius = {
    // 2px
    base: ({radii}:Theme) => `border-radius: ${radii[1]}px;`,
    // 4px
    base2: ({radii}:Theme) => `border-radius: ${radii[2]}px;`,
    // 8px
    base4: ({radii}:Theme) => `border-radius: ${radii[3]}px;`,
}

const button = {
    // Resets default HTML button to have minimal default styling
    reset:`
        box-sizing: border-box;
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        user-select: none;
        margin: 0px;
        padding: 0px;
    `,
    color: {
        primary: ({colors}:Theme) => `
            background-color: ${colors.blue};
            color: ${colors.white};
            * { fill: ${colors.white}; }
            border-color: ${colors.blue};
        `,
        primaryDisabled: ({colors}:Theme) => `
            background-color: ${colors.washedBlue};
            color: ${colors.lightBlue};
            * { fill: ${colors.lightBlue}; }
            border-color: ${colors.lightBlue};
        `,
        default: ({colors}:Theme) => `
            background-color: ${colors.white};
            color: ${colors.black};
            * { fill: ${colors.black}; }
            border-color: ${colors.lightGray};
        `,
        defaultDisabled: ({colors}:Theme) => `
            background-color: ${colors.washedGray};
            color: ${colors.lightGray};
            * { fill: ${colors.lightGray}; }
            border-color: ${colors.lightGray};
        `,
        destructivePrimary: ({colors}:Theme) => `
            background-color: ${colors.red};
            color: ${colors.white};
            * { fill: ${colors.white}; }
            border-color: ${colors.red};
        `,
        destructivePrimaryDisabled: ({colors}:Theme) => `
            background-color: ${colors.washedRed};
            color: ${colors.lightRed};
            * { fill: ${colors.lightRed}; }
            border-color: ${colors.lightRed};
        `,
        destructive: ({colors}:Theme) => `
            background-color: ${colors.white};
            color: ${colors.red};
            fill: ${colors.red};
            * { fill: ${colors.red}; }
            border-color: ${colors.lightRed};
        `,
        destructiveDisabled: ({colors}:Theme) => `
            background-color: ${colors.washedRed};
            color: ${colors.lightRed};
            * { fill: ${colors.lightRed}; }
            
            border-color: ${colors.lightRed};
        `,
    }
}


const concat = (...fs:Function[]) => (theme:Theme) => fs.reduce((acc, f) => acc + f(theme) + ' ', '');

// const uniformBox = (theme:Theme) => basePad(theme) + border('lightGray') + radius1u(theme);


export {
    // Core patterns
    color,
    border,
    pad,
    height,
    radius,
    // UI Patterns
    container,
    button,
    concat,
}