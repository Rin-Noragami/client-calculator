import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const WifiSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, wifi: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <label>Wi-fi роутер</label>
      <FormGroup
        value={data.wifi}
        onChange={handleChange}
      >
        <FormControlLabel control={<Checkbox />} label="Аренда 99 ₽/мес." value={99}/>
        <FormControlLabel control={<Checkbox />} label="Выкупить 2600 ₽" value={2600}/>
      </FormGroup>

    </FormControl>
  );
};

export default WifiSelect;
