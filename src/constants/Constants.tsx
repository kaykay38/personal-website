const shortBio: string = "Computer Nerd | Climber | Ski Bum";
const bio: string = "Interested in ML/AI, Linux/Unix based OS, UX/UI; improving the end user experience.";
const email: string = "mailto:miaxyhunt@gmail.com";
const github: string = "https://www.github.com/kaykay38/";
const linkedin: string = "https://www.linkedin.com/in/m-a89398128/";
const name: string = "Mia Hunt";
const phone: string = "";
const twitter: string = "";

export interface ConstantsInterface  {
    shortBio: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    name: string;
    phone: string;
    twitter: string;
}

const Constants: ConstantsInterface = {
    shortBio,
    bio,
    email,
    github,
    linkedin,
    name,
    phone,
    twitter,
}

export default Constants;
