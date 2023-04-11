import FormControl from "@mui/material/FormControl";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack'

const SocialSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, social: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <label>Соцсети</label>
      <FormGroup
        value={data.wifi}
        onChange={handleChange}
      >
      <Stack direction="row" justifyContent="left">
        <FormControlLabel control={<Checkbox />} label="20 ₽" value={20}/>
        <FormControlLabel control={<Checkbox />} label="20 ₽" value={20}/>
        <FormControlLabel control={<Checkbox />} label="20 ₽" value={20}/>
        <FormControlLabel control={<Checkbox />} label="60 ₽" value={60}/>
        <FormControlLabel control={<Checkbox />} label="60 ₽" value={60}/>
        </Stack>
      </FormGroup>

    </FormControl>
  );
};

export default SocialSelect;