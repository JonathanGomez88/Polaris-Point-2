import React, { Component } from "react";
import API from "../utils/API";



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
            <h1 className="text-center" > Greetings Humans! </h1> 
            <p> People have long been struggling to learn new material, so we incorperated our favorite method of learning, and applied it to our website.Here you can track your progress, learn new material, and have fun doing so!Lets get learning!!! </p>
            {this.state.quiz && console.log(this.state.quiz)}
            {this.state.quiz.map(x => document.write(x.text))} 

            {this.state.quiz.map(x => document.write(x.Answers[0].text, x.Answers[1].text, x.Answers[2].text, x.Answers[3].text))}

            </div>)
     }

}
export default Learn;