import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../themes";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="5px 20px" >
      <Box display="flex" justifyContent="space-between" width='220px' >
        <Box >
          {icon}
          <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        </Box>

        <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[100] }}
          >
            {subtitle}
          </Typography>
          <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>

        </Box>



    </Box>
  )

}

export default StatBox;
