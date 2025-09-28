import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} size={80} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ percentage }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const step = 1; // Adjust the step value as needed for smoothness
        const newProgress = prevProgress + step;
        return newProgress >= percentage ? percentage : newProgress;
      });
    }, 50); // Adjusted interval to control the progress speed

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return <CircularProgressWithLabel value={progress} />;
}

CircularWithValueLabel.propTypes = {
  /**
   * The percentage value to which the progress should reach.
   * Should be between 0 and 100.
   */
  percentage: PropTypes.number.isRequired,
};
