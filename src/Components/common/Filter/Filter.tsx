import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface IProps {
  setGender: (gender: string) => void;
  gender: string;
}

export default function Filter({ setGender, gender }: IProps) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        value={gender}
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={() => setGender("woman")}
          value="woman"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          onChange={() => setGender("man")}
          value="man"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          onChange={() => setGender("all")}
          value="all"
          control={<Radio />}
          label="All"
        />
      </RadioGroup>
    </FormControl>
  );
}

// const Filter = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [gender, setGender] = useState(searchParams.get("gender") || "all");

//   const { setPage } = useContext(usersContext) as usersContextType;

//   const [firstMount, setFirstMount] = useState(true);

//   useEffect(() => {
//     if (firstMount) {
//       setFirstMount(false);
//       return;
//     }
//     const currentParams = Object.fromEntries([...searchParams]);

//     if (gender === "all") {
//       delete currentParams.gender;
//       setSearchParams({
//         ...currentParams,
//       });
//     } else {
//       setSearchParams({
//         ...currentParams,
//         gender,
//       });
//     }
//     setPage(1);
//   }, [gender]);

//   return (
//     <ToggleButtonGroup
//       color="primary"
//       value={gender}
//       exclusive
//       onChange={(_, value) => value && setGender(value)}
//       aria-label="Platform"
//     >
//       <ToggleButton value="all">All</ToggleButton>
//       <ToggleButton value="pants">Gender</ToggleButton>
//     </ToggleButtonGroup>
//   );
// };

// export default Filter;
