import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  CircularProgress,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const GitHubStats = () => {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // console.log(profile);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "kumaramitcoder";
        const token = process.env.REACT_APP_GIT_TOKEN;
        // console.log(token)

        // Fetch profile data
        const profileResponse = await axios.get(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setProfile(profileResponse.data);

        // Fetch repositories
        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setRepos(reposResponse.data);

        // Fetch languages for each repository
        const languagesPromises = reposResponse.data.map((repo) =>
          axios.get(repo.languages_url, {
            headers: {
              Authorization: `token ${token}`,
            },
          })
        );
        const languagesResponses = await Promise.all(languagesPromises);
        const languagesData = languagesResponses.reduce((acc, { data }) => {
          for (let [lang, count] of Object.entries(data)) {
            acc[lang] = (acc[lang] || 0) + count;
          }
          return acc;
        }, {});
        setLanguages(languagesData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase()))
    .filter((repo) => (filter ? repo.language === filter : true))
    .sort((a, b) => {
      if (sort === "latest") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      } else if (sort === "stars") {
        return b.stargazers_count - a.stargazers_count;
      } else if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });

  if (error) {
    return <div >Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(var(--vh, 1vh) * 100"
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container >
      <Box mt={4}>
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center" justifyContent='center'>
              <Grid item lg={2} sm={12} alignItems="center" justifyContent='center'>
                <Avatar
                  src={profile.avatar_url}
                  alt="Profile"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid
                item
                lg={10}
                sm={12}
                alignItems="flex-start"
                // sx={{ bgcolor: "red" }}
              >
                <Stack spacing={1}>
                  <Typography variant="h1">{profile.name}</Typography>
                  <Typography variant="h3">{profile.login}</Typography>

                  <Grid container maxWidth={480} spacing={2}>
                    <Grid item lg={4} sm={12}>
                      <Box
                        component="section"
                        sx={{
                         
                          // p: 1,
                          // px: 2,
                          // border: "1px dashed grey",
                          // borderRadius: 50,
                        }}
                      >
                        <Typography variant="h3">
                          Followers: {profile.followers}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={4} sm={12}>
                      <Box
                        component="section"
                        sx={{
                          // p: 1,
                          // px: 2,
                          // border: "1px dashed grey",
                          // borderRadius: 50,
                        }}
                      >
                        <Typography variant="h3">
                          Following: {profile.following}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={4} sm={12}>
                      <Box
                        component="section"
                        sx={{
                          // p: 1,
                          // px: 2,
                          // border: "1px dashed grey",
                          // borderRadius: 50,
                        }}
                      >
                        <Typography variant="h3">
                          Public Repos: {profile.public_repos}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  {/* <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    rowGap={1}
                    justifyContent="space-between"
                    flexWrap="wrap"
                  ></Stack> */}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box mt={4}>
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h2">Languages Used</Typography>
            <List>
              {Object.entries(languages).map(([lang, count]) => (
                <ListItem key={lang}>
                  <ListItemText primary={`${lang}: ${count}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>

      <Box mt={4}>
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Typography mb={4} variant="h2">
              Repositories
            </Typography>
            <Grid container spacing={2}>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Box mb={2}>
                  <TextField
                    label="Search Repos"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={handleSearchChange}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchIcon sx={{ color: "primary.main" }} />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
                <Box mb={2}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Language</InputLabel>
                    <Select
                      value={filter}
                      onChange={handleFilterChange}
                      label="Filter by Language"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {Object.keys(languages).map((lang) => (
                        <MenuItem key={lang} value={lang}>
                          {lang}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
                <Box mb={2}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Sort by</InputLabel>
                    <Select
                      value={sort}
                      onChange={handleSortChange}
                      label="Sort by"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="latest">Latest Update</MenuItem>
                      <MenuItem value="stars">Stars</MenuItem>
                      <MenuItem value="name">Name</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <List>
              <Grid container spacing={2}>
                {filteredRepos.map((repo) => (
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12} key={repo.id}>
                    <ListItem
                      sx={{
                        p: 1,
                        px: 2,
                        border: "1px solid grey",
                        borderColor: "text.secondary",
                        borderRadius: 2,
                        "&:hover": {
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Typography
                              variant="h3"
                              sx={{ color: "text.primary" }}
                            >
                              {repo.name}
                            </Typography>
                          </a>
                        }
                        secondary={`Stars: ${
                          repo.stargazers_count
                        } | Language: ${repo.language} | Updated: ${new Date(
                          repo.updated_at
                        ).toLocaleDateString()}`}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </CardContent>
        </Card>
      </Box>

      <Box mt={4} mb={4}>
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Typography sx={{ mb: 4 }} variant="h5">
              Activity Graph
            </Typography>
            <StyledGitHubCalendarContainer>
              <GitHubCalendar username="shubhamMadheshiya" />
            </StyledGitHubCalendarContainer>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

const StyledGitHubCalendarContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    height: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
`;

export default GitHubStats;
