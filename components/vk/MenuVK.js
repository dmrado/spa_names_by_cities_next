import Link from 'next/link'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function SimpleAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar className="mobile-column">
                        <Button>
                            <Link href="/vk-user">
                                <a>Пользователи</a>
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/vk-groups">
                                <a>Группы</a>
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/vk-cities">
                                <a>Города</a>
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/vk-locator">
                                <a>Локации</a>
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/vk-get-token">
                                <a>Токен</a>
                            </Link>
                        </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SimpleAppBar;