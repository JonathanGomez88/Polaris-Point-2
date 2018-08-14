import React, { Component } from "react";
import API from "../utils/API";
import QuizQuestion from "../pageComponents/QuizQuestions";



// const canvasStyle = {
//     height: '400px',
//     width: '750px',
//     background: 'black',
//     marginLeft: '18%',
//     marginRight: '18%'
// }


class Learn extends Component {
    state = {
        quiz: [],
        text: '',
        category: "Astronomy",
    }

    renderQuiz = (category) => {
        API.getQuiz(category)
        .then(res =>
            this.setState({
                quiz: res.data,
                text: "",
                category: ""
            })
        ).catch(err => {
            console.log(err)
        });
    }

    componentDidMount(){
        this.renderQuiz(this.state.category);
    }


    render() {
        return (<div>
            <h1 className="text-center" > Welcome Polarians! </h1> 
            <p> People have long been struggling to learn new material, so we incorperated our favorite method of learning, and applied it to our website.Here you can track your progress, learn new material, and have fun doing so!Lets get learning!!! </p>
            {this.state.quiz && console.log(this.state.quiz)}
     
            {this.state.quiz &&
            <div> {this.state.quiz.map((question, iterator) => {
                console.log(question)
                return <QuizQuestion key={iterator} questionNum={iterator} quiz={question}/>
            })} </div>
            }   

            

            </div>)
     }

}
export default Learn;