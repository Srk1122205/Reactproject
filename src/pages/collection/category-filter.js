import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { categoryTitles } from "../../data/category";

export default function CategoryFilter(props) {
  const { selectedCategories, setSelectedCategories } = props;

  const onChangeCategory = (category, isChecked) => {
    if (isChecked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(
        selectedCategories.filter(cat => cat !== category)
      );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="button" component="div">Category</Typography>
        {categoryTitles.map(category => (
          <FormControlLabel
          key={category}
          label={category}
          control={
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={e => onChangeCategory(category, e.target.checked)}
            />
          }
        />
        ))}
      </CardContent>
    </Card>
  );
}
