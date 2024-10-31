interface BaseJoke {
  content: string;
  type: string;
}

// SQL Joke interface extending BaseJoke
export interface DeliveredJoke extends BaseJoke {
  id: string;
}

// MongoDB Joke interface extending BaseJoke
export interface SubmittedJoke extends BaseJoke {
  _id: string;
  isDelivered: boolean;
}
