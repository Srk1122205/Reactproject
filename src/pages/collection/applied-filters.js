import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

export default function AppliedFilters(props) {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedRating,
    setSelectedRating
  } = props;

  if (
    selectedCategories.length +
      (selectedPriceRange.isApplied ? 1 : 0) +
      (selectedRating ? 1 : 0) ===
    0
  )
    return null;

    const onClearAll = () => {
      setSelectedCategories([]);
      setSelectedPriceRange({min: '', max: '', isApplied: false});
      setSelectedRating("");
    };

  return (
    <Grid container alignItems="center" spacing={1}>
      <Typography variant="subtitle1">Filtered By:</Typography>

      {!!selectedCategories.length &&
        selectedCategories.map(category => (
          <Grid item>
            <Chip
              key={category}
              label={category}
              onDelete={() => setSelectedCategories(
                selectedCategories.filter(cat => cat !== category)
              )}
            />
          </Grid>
        ))}

      {selectedPriceRange.isApplied && (
        <Grid item>
          <Chip
            label={`Price: ${selectedPriceRange.min}-${selectedPriceRange.max}`}
            onDelete={() => setSelectedPriceRange({min: '', max: '', isApplied: false})}
          />
        </Grid>
      )}

      {selectedRating && (
        <Grid item>
          <Chip
            label={`Rating: ${selectedRating} ${
              Number(selectedRating) === 5 ? "" : "& Up"
            }`}
            onDelete={() => setSelectedRating("")}
          />
        </Grid>
      )}

      <Grid item>
        <Chip
          label="clear all"
          onDelete={onClearAll}
          color="secondary"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
