import axios from "axios";

export default {
  // Gets the quiz
  getQuiz: function(category) {
    return axios.get("/api/quiz/" + category);
    
  }
}