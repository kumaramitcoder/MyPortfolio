import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import myData from "../data/myData";
// Define a simple profile data structure
// const initialProfile = {
//   name: "Jane Doe",
//   title: "Senior Product Manager",
//   location: "San Francisco Bay Area",
//   isPublic: true,
//   jobTitles: ["Product Manager", "Program Manager"],
//   locations: ["San Francisco, CA", "New York, NY", "Remote"],
//   startImmediately: true,
//   about:
//     "A seasoned Product Manager with 8+ years of experience in SaaS and e-commerce. Passionate about building intuitive products that solve real-world problems. Proven track record of leading cross-functional teams from ideation to launch.",
//   skills: [
//     "Product Management",
//     "Agile Methodologies",
//     "User Experience (UX)",
//     "Market Research",
//     "Data Analysis",
//     "Roadmapping",
//     "SQL",
//     "JavaScript",
//     "JIRA",
//     "Figma",
//   ],
//   experience: [
//     {
//       company: "Innovate Solutions",
//       title: "Senior Product Manager",
//       duration: "Jan 2022 - Present",
//       description:
//         "Led product strategy and execution for a B2B SaaS platform, resulting in a 25% increase in user engagement.",
//     },
//     {
//       company: "Global Tech",
//       title: "Product Manager",
//       duration: "Jun 2018 - Dec 2021",
//       description:
//         "Managed the product lifecycle for a mobile e-commerce application, growing the user base by 500%.",
//     },
//   ],
//   education: [
//     {
//       university: "Stanford University",
//       degree: "M.S., Computer Science",
//       duration: "2016 - 2018",
//     },
//     {
//       university: "University of California, Berkeley",
//       degree: "B.A., Business Administration",
//       duration: "2012 - 2016",
//     },
//   ],
//   socialLinks: {
//     linkedin: "https://www.linkedin.com/in/janedoe",
//     github: "https://github.com/janedoe",
//     website: "https://janedoe.com",
//     email: "mailto:jane.doe@example.com",
//   },
// };

const App = () => {
  const [profile, setProfile] = useState({ ...myData });
  console.log(profile);

  return (
    <Box
    // maxWidth="md"
    >
      {/* Main Profile Card */}
      <Card sx={{ borderRadius: 4, mb: 4 }}>
        <CardContent sx={{ position: "relative", pt: 4, pb: 4 }}>
          {/* Background image section */}
          <Box
            sx={{
              backgroundImage: `url(${profile.profilePic})`,
              height: 120,
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          />

          {/* Profile Avatar and Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "center",
              position: "relative",
              zIndex: 0,
            }}
          >
            {/* Profile Avatar */}
            <Avatar
              alt={profile.name}
              src={profile.profilePic}
              sx={{
                width: 150,
                height: 150,
                border: "4px solid white",
                mt: 0, // Move the avatar up into the background section
                mb: 2,
              }}
            />

            {/* Name and Title */}
            <Typography
              variant="h2"
              // component="h1"
              sx={{ fontWeight: "bold" }}
            >
              {profile.name}
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              textAlign={"left"}
              sx={{ mb: 1 }}
            >
              {profile.bio}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {profile.city}
            </Typography>

            {/* Open to Work Badge */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                bgcolor: "#d4edda",
                color: "#155724",
                p: 1.5,
                borderRadius: 3,
                mb: 3,
              }}
            >
              <WorkIcon sx={{ color: "#155724" }} />
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Open to work
              </Typography>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* "Open To" details section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Open to
            </Typography>
            <Stack direction="column" spacing={2}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Job Titles
                </Typography>
                <Stack
                  direction="row"
                  // spacing={1}
                  gap={1}
                  sx={{ mt: 1 }}
                  flexWrap="wrap"
                >
                  {profile.jobTitles.map((title, index) => (
                    <Chip
                      key={index}
                      label={title}
                      color="primary"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Locations
                </Typography>
                <Stack direction="row" gap={1} sx={{ mt: 1 }} flexWrap="wrap">
                  {profile.preferdLocations.map((loc, index) => (
                    <Chip
                      key={index}
                      label={loc}
                      color="secondary"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Start Date
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {profile.startImmediately ? "Immediately" : "Flexible"}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Social Links */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Link
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="none"
                >
                  <Chip
                    icon={<LinkedInIcon />}
                    label="LinkedIn"
                    sx={{ borderRadius: 2 }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={profile.gitHub}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="none"
                >
                  <Chip
                    icon={<GitHubIcon />}
                    label="GitHub"
                    sx={{ borderRadius: 2 }}
                  />
                </Link>
              </Grid>

              <Grid item>
                <Link href={profile.email} color="inherit" underline="none">
                  <Chip
                    icon={<EmailIcon />}
                    label="Email"
                    sx={{ borderRadius: 2 }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* About, Skills, Experience, and Education Sections */}
      <Stack gap={4} p={0}>
        <Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                About
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {profile.aboutMe}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {profile.primarySkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{ mb: 1, borderRadius: 2 }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                <WorkIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Experience
              </Typography>
              <Stack divider={<Divider flexItem />} spacing={2}>
                {profile.recentExperiences.map((exp, index) => (
                  <Box key={index} sx={{ py: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.company} • {exp.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3, // Change this to your desired number of lines
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {exp.listDis}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                <SchoolIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Education
              </Typography>
              <Stack divider={<Divider flexItem />} spacing={2}>
                {profile.educations.map((edu, index) => (
                  <Box key={index} sx={{ py: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                      {edu.nameOfOrg}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.degree} • {edu.startDate + " - " + edu.endDate}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
