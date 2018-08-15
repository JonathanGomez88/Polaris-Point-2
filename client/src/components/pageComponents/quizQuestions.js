import React from "react";


const QuizQuestion = (props) => {

    console.log("This is props from quizQuestion.js: ", props); 

        return (
            <div >
                
           <p>{props.quiz.text}</p>
           <form onSubmit={(event) => {
               event.preventDefault();
               console.log(event);
               const { value } = event.target
               console.log(value)
                props.handleClick();
           }}>
               <div>
                   {props.quiz.Answers.map((answer) => {
                       return (
                           <div>
                               <input className="radio" id={answer.id} key={answer.id} type="radio" value={answer.isCorrect} name={props.questionNum} />
                               <label htmlFor={answer.id}>{answer.text}</label>
                           </div>
                       )
                   })}
                    
               </div>
                   <input id="submit" type="submit"/>
           </form>
           </div>
           // s   <button onClick={() => props.handleClick()}>Next</button>
        );
    } 

export default QuizQuestion;