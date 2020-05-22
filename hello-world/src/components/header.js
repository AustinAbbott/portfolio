import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
// for responsive header
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  return (
    <AppBar
      position="static"
      style={{
        background: "#00a9a6 ",
        padding: "1em",
        display: "flex",
        justifyContent: "right",
      }}
    >
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.imgur.com/AnqGLXM.jpg"
                style={{ width: "15%", height: "auto", borderRadius: "50%" }}
                alt="Austin Abbott profile"
              ></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: "center" }}>
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
            </div>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  )
}
