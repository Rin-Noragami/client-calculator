import Button from "@mui/material/Button";

const Result = ({ data }) => {
  const { minutes, Internet, wifi, social } = data;
  // Значения преобразуются в тип Number и суммируются
  const sumResult =
    Number(minutes) + Number(Internet) + Number(wifi) + Number(social);

  return (
    <form>
      <Button type="submit" variant="contained" style={{ background: "#7A5CFA" }}>
        {sumResult} ₽ в месяц
      </Button>
    </form>
  );
};

export default Result;
