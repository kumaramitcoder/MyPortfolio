import { LinkedIn } from "@mui/icons-material";
import myPic from '../assets/mypic.jpg'
import experiences from "./experiences";
// import myPic from '../assets/background.png'

const myData = {
  name: "Amit Kumar",
  email: "kumaramit.talk2u@gmail.com",
  profilePic: myPic,
  startImmediately: true,
  gitHub: "https://github.com/kumaramitcoder",
  linkedIn: "https://www.linkedin.com/in/amit-kumar-432781a8/",
  // behance: "https://www.behance.net/shubhamgupta67",
  // dribbble: "https://dribbble.com/shubham_01_",
  phone: "9490547931",
  bio: "Java / Full-Stack Developer | Graphic Designer | DevOps | UI/UX",
  aboutMe:"A senior software developer with 4+ years of experience in Full-Stack and DevOps. Passionate about building intuitive products that solve real-world problems. Proven track record of leading cross-functional teams from ideation to launch.",
  residence: "India",
  city: "Hyderabad",
  age: 26,
  company: "AFS Business Solutions Pvt Ltd",
  startDate:'Immediately',
  jobTitles:["Full-Stack Developer", "Front-End Developer","Backend-Developer","DevOps Engineer"],
  languages: [
    {
      name: "Hindi",
      percent: 98,
    },
    {
      name: "English",
      percent: 89,
    },
  ],
  iAm: [
    "I am MERN a Stack Developer",
    "I am a Product Designer",
    "I am Graphic Designer",
    "I am a DevOps Engineer",
  ],
  educations:[
    {
      nameOfOrg:'Madan Mohan Malviya University of Technology',
      degree:'B.Tech',
      course:'Computer Science',
      startDate:'Aug 2018',
      endDate:'Apr 2022',
      grade:'7.81',
      logo:'https://upload.wikimedia.org/wikipedia/en/a/a8/Madan_Mohan_Malaviya_University_of_Technology_logo.png'
    },
    {
      nameOfOrg:'RPM Academy',
      degree:'Intermediate',
      course:'PMC',
      startDate:'Jun 2016',
      endDate:'Mar 2017',
      grade:'78%',
      logo:'https://upload.wikimedia.org/wikipedia/commons/3/3f/R.P.M_Academy.webp'
    }
  ],
  preferdLocations:['Hyderabad', 'Banglore', 'Pune', 'Noida','Gurugram','Delhi','Mumbai'],
  primarySkills:[ "JavaScript","TypeScript","React.js","Next.js","Redux","Node.js","Express","MongoDB","SQL","Mongoose","MUI","HTML", "CSS","Java","Kotlin","Docker","Jenkins","Terraform"],
  recentExperiences: [...experiences].filter((_,i)=> i < 2)
};

export default myData;
