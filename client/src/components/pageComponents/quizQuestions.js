import React from "react";


const QuizQuestion = (props) => (
     <div >
         
    <p>{props.quiz.text}</p>

    <form >
        <div>
            {props.quiz.Answers.map((answer) => {
                return (
                    <div>
                        <input id={answer.id} type="radio" value={answer.isCorrect} name={props.questionNum} />
                        <label htmlFor={answer.id}>{answer.text}</label>
                    </div>
                )
            })}
            

            <input type="submit" className="formSubmit" />
        </div>

    </form>



    </div>
);

export default QuizQuestion;