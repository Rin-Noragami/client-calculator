import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";

const FormUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <Grid container direction="column" alignItems="flex-start">
          <label>Телефон</label>
          <input
            type="tel"
            placeholder="+7 (___) ___ - __ - __"
            {...register("mobile", {
              required: true,
              minLength: 11,
              maxLength: 11,
            })}
          />
          <label>Оператор</label>
          <select {...register("operator", { required: true })}>
            <option value="оператор-1">Оператор №1</option>
            <option value="оператор-2">Оператор №2</option>
            <option value="оператор-3">Оператор №3</option>
          </select>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormUser;
