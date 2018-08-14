import React from "react";
import Learn from "../pages/Learn";

const QuizQuestion = (props) => {

    console.log("This is props from quizQuestion.js: ", props); 

        return (
            <div >
                
           <p>{props.text}</p>
           <form >
               <div>
                   {props.quiz.Answers.map((answer) => {
                       return (
                           <div>
                               <input id={answer.id} key={answer.id} type="radio" value={answer.isCorrect} name={props.questionNum} />
                               <label htmlFor={answer.id}>{answer.text}</label>
                           </div>
                       )
                   })}
                   
       
                   
               </div>
       
           </form>
           <button onClick={() => props.handleClick()}>Next</button>
       
       
           </div>
       );
} 

export default QuizQuestion;