import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
}));

function Inputs() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Input
                placeholder="Найти по фамилии"
                className={classes.input}
                inputProps={{
                    aria_label: undefined
                }}
            />
        </div>
    );
}

export default Inputs;
