import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  return (
    <AppBar
      position="static"
      style={{ background: "#00a9a6 ", padding: "2em" }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Austin Abbott
        </Typography>
          <Button>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link style={{ color: "white" }} to="/about">
              About
            </Link>
          </Button>
          <Button>
            <Link style={{ color: "white" }} to="/contact">
              Contact
            </Link>
          </Button>
      </Toolbar>
    </AppBar>
  )
}
