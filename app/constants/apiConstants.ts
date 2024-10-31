const MODERATE_API_BASE_URL = "http://localhost:3001/moderateApi";

const MODERATE_API_ENDPOINTS = {
  LOGIN: `${MODERATE_API_BASE_URL}/auth/login`,
  JOKES: `${MODERATE_API_BASE_URL}/jokes`,
};

const SUBMIT_API_BASE_URL = "http://localhost:3000/jokes";

const SUBMIT_API_ENDPOINTS = {
  JOKES_TYPES: `${SUBMIT_API_BASE_URL}/types`,
};

export const JOKE_TYPES = [
  "Pun",
  "One-liner",
  "Knock-Knock",
  "Dad Joke",
  "Dark Humor",
  "Political",
  "Animals",
  "Programming",
  "Wordplay",
  "Observational",
  "Nerdy",
  "Tech",
  "Science",
  "Food",
];

export {
  MODERATE_API_BASE_URL,
  MODERATE_API_ENDPOINTS,
  SUBMIT_API_BASE_URL,
  SUBMIT_API_ENDPOINTS,
};
