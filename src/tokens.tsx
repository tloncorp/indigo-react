import { Theme } from "@tlon/indigo-light";
import { SystemStyleObject } from '@styled-system/css';

// type Colors = keyof Theme['colors']

type SystemStyleObjects = {
    [key: string]: SystemStyleObject;
  };

const container = {
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as SystemStyleObject
}

const button = {
    state: {
        primary: {
            backgroundColor: 'blue',
            color: 'white',
            "*": { fill: 'white' },
            borderColor: 'blue',
        },
        primaryDisabled: {
            backgroundColor: 'washedBlue',
            color: 'lightBlue',
            "*": { fill: 'lightBlue' },
            borderColor: 'lightBlue',
        },
        default: {
            backgroundColor: 'white',
            color: 'black',
            "*": { fill: 'black' },
            borderColor: 'lightGray',
        },
        defaultDisabled: {
            backgroundColor: 'washedGray',
            color: 'lightGray',
            "*": { fill: 'lightGray' },
            borderColor: 'lightGray',
        },
        destructivePrimary: {
            backgroundColor: 'red',
            color: 'white',
            "*": { fill: 'white' },
            borderColor: 'red',
        },
        destructivePrimaryDisabled: {
            backgroundColor: 'washedRed',
            color: 'lightRed',
            "*": { fill: 'lightRed' },
            borderColor: 'lightRed',
        },
        destructive: {
            backgroundColor: 'white',
            color: 'red',
            "*": { fill: 'red' },
            borderColor: 'lightRed',
        },
        destructiveDisabled: {
            backgroundColor: 'washedRed',
            color: 'lightRed',
            "*": { fill: 'lightRed' },
            borderColor: 'lightRed',
        },

    } as SystemStyleObjects,
    text: {
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: 1.333333,
      fontWeight: 500,
    } as SystemStyleObject
}


const action = {
    state: {
        default: {
            color: 'blue',
            "*": { fill: 'blue' },
        },
        defaultDisabled: {
            color: 'lightGray',
            "*": { fill: 'lightGray' },
        },
        destructive: {
            color: 'red',
            "*": { fill: 'red' },
        },
        destructiveDisabled: {
            color: 'lightRed',
            "*": { fill: 'lightRed' },
        },
    } as SystemStyleObjects
}

export {
    // Core patterns
    container,
    // UI Patterns
    button,
    action,
    // Utils
}