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
        index: 0
    }

    renderQuiz = (category) => {
        console.log("RENDER QUIZ RAN");
        API.getQuiz(category)
            .then(res => {
                console.log("this is our res. data ", res.data)

                if(res.data.length > 1){
                    console.log("this is running");
                    this.setState({
                        quiz: res.data,
                        text: res.data[0].text,
                        index: 0,
                        category: "Astronomy"
                    })}
                }
                
            ).catch(err => {
                console.log(err)
            });
    }

    componentWillMount() {
        this.renderQuiz(this.state.category);
    
    }

    

    componentDidUpdate(){
        console.log("compent update: ", this.state);
    }

    componentDidMount(){
        
        console.log("initial state: ", this.state);
    }

    handleClick = () => {

        let updatedIndex = this.state.index + 1;

        if(this.state.index < this.state.quiz.length){
            this.setState({
                index: updatedIndex,
                text: this.state.quiz[updatedIndex].text
            })
        }

    }
        
    //     if (this.state.index === this.state.quiz.length - 1){
    //        this.setState({
    //           index: 0
    //          })
    //     }
    //     else{
    //         this.setState({
    //           index: this.state.index - 1
    //          })
    //     }
    //   }

    render() {
        console.log("render ran");
        if(this.state.quiz.length > 1){
            console.log("this should run now");
            return (<div>
                <h1 className="text-center" > Welcome Polarians! </h1>
                <p> People have long been struggling to learn new material, so we incorperated our favorite method of learning, and applied it to our website.Here you can track your progress, learn new material, and have fun doing so!Lets get learning!!! </p>
                {/* {this.state.quiz.length > 0 && console.log(this.state.quiz[this.state.index])} */}
    
            
                    
                
                 <QuizQuestion questionNum={this.state.index} quiz={this.state.quiz[this.state.index]} text={this.state.text} handleClick={this.handleClick}/>
    
                
                 
    
                 
              
    
                {/* // <div> {this.state.quiz.map((question, iterator) => { */
                /* //     console.log(question)
                //     return <QuizQuestion key={iterator} questionNum={iterator} quiz={question}/>
                // })} </div> */}
            
               
    
            </div>)
        }else{
            return (
                <div>
                    <h1>You're Quiz Will Begin Shortly</h1>
                </div>
            )
        }
        
    }

}
export default Learn;