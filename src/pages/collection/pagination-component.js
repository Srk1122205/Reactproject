import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    margin: "30px 200px 0px 0px",
    paddingBottom: "30px",
  },
});

export default function PaginationComponent() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
    <Pagination className={classes.root} count={5} color="secondary" />
    </Grid>
  )
}
