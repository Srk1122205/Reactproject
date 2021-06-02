import Typography from '@material-ui/core/Typography';

export default function ItemsFoundText(props) {
  const {total, searchString} = props;

  return (
    <Typography variant="body1">
      {total} items found
      {searchString && ` for "${searchString}"`}
    </Typography>
  )
}
