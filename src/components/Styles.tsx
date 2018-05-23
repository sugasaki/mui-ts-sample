

export const styles = {
    box: {
        border: 'solid 1px gray',
        margin: 10,
        padding: 10,
    },
    button: {
        margin: 10,
    },
    buttonWithHover: {
        // hoverも記述できる
        '&:hover': {
            backgroundColor: '#ff0000',
        },
        margin: 10,
    },
};


export type ClassNames = keyof typeof styles;

