import React from "react";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const Resume = () => {
  // Direct Google Drive download link
  const driveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1UZLl8-u5mdVEmdjzaVY34j8it0clqQ0Q";

  return (
    <div style={{ textAlign: "center" }}>
      {/* Preview PDF in iframe */}
      <iframe
        src="https://drive.google.com/file/d/1UZLl8-u5mdVEmdjzaVY34j8it0clqQ0Q/preview"
        style={{ width: "100%", height: "calc(var(--vh, 1vh) * 100", border: "none" }}
        allow="autoplay"
        title="resume"
      />

      {/* Download button */}
      <Button
        component="a"
        href={driveDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="primary"
        endIcon={<Download />}
        sx={{ mt: 2 }}
      >
        Download Resume
      </Button>
    </div>
  );
};

export default Resume;
