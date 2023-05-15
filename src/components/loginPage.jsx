import React, { Component} from "react";
import { Grid } from "@mui/material";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            hello
          </Grid>
          <Grid item xs={6}>
            test
          </Grid>
          <Grid item xs={3}>
            hello
          </Grid>
        </Grid>
      </div>
    )
    }
}

export default LoginPage;