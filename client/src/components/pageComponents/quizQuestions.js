import React from "react";


const QuizQuestion = (props) => (
     <div >
         
    <p>{props.quiz.text}</p>

    <form >
        <input type="radio" value={props.isCorrect} name={props.questionNum} />
        <input type="radio" value={props.isCorrect} name={props.questionNum} />
        <input type="radio" value={props.isCorrect} name={props.questionNum} />
        <input type ="radio" value={props.isCorrect} name={props.questionNum} />
        <input type="submit" className="formSubmit" />

    </form>



    </div>
);

export default QuizQuestion;