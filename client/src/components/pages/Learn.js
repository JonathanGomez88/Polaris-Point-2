import React, { Component } from "react";
import API from "../utils/API";
import QuizQuestion from "../pageComponents/quizQuestions";


class Learn extends Component {
    state = {
        quiz: [],
        text: '',
        category: "Astronomy",
        index: 0,
        startQuiz: false,
        endQuiz: false
    }
    renderQuiz = (category) => {
        console.log("RENDER QUIZ RAN");
        API.getQuiz(category)
            .then(res => {
                console.log("this is our res. data ", res.data)

                if (res.data.length > 1) {
                    console.log("this is running");
                    this.setState({
                        quiz: res.data,
                        text: res.data[0].text,
                        index: 0,
                        category: "Astronomy"
                    })
                }
            }).catch(err => {
                console.log(err)
            });
    }
    componentWillMount() {
        this.renderQuiz(this.state.category);

    }
    componentDidUpdate() {
        console.log("compent update: ", this.state);
    }

    componentDidMount() {

        console.log("initial state: ", this.state);
    }

    handleClick = () => {


        if (this.state.index < this.state.quiz.length - 1) {
            this.setState({
                index: this.state.index + 1,

            })
        }
        else {
            this.setState({
                endQuiz: true
            })
        }
    }

    handleCorrect = () => {

    }


    answerValue = (event) => {
        const { value } = event.target;
        console.log(value)
    }



    render() {
        const { endQuiz, quiz } = this.state;
        console.log("render ran");
        return (
            <div id="quiz">
                {!endQuiz ?
                    (quiz.length) > 1 ?
                        <div>
                            <h1 className="text-center" > Astronomy </h1>
                            <p> Shoot for the Moon. Even if you miss, you will land among the stars </p>

                            <QuizQuestion questionNum={this.state.index} quiz={this.state.quiz[this.state.index]} handleClick={this.handleClick} />

                        </div>
                        :
                        <div>
                            <h1>Your Quiz Will Begin Shortly</h1>
                        </div>


                    :
                    <div id="quizOver">Nice job! You got 100%</div>
                }
            </div>
        )
    }



}
export default Learn;