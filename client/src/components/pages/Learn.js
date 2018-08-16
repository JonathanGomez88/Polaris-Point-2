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

    answerValue = (event) => {
        const { value } = event.target;
        console.log(value)
    }

    initializeQuiz = () => {
        this.setState({
            startQuiz: true
        })
        console.log("click event: ", this.state)
    }

    if(startQuiz = false) {
        (
            <div>
                {this.state.article}

                <button onClick={this.setState({ startQuiz: true })}>Start Quiz</button>
            </div>
        )
    }

    render() {
        const { endQuiz, quiz } = this.state;
        console.log("render ran");
        return (
            <div>
                {!this.state.startQuiz &&
                    <div id="article">
                       <h2> Our Cosmic Neighborhood </h2>
<p>From our small world we have gazed upon the cosmic ocean for thousands of years. Ancient astronomers observed points of light that appeared to move among the stars. They called these objects ‘planets,’ meaning wanderers, and named them after Roman deities—Jupiter, king of the gods; Mars, the god of war; Mercury, messenger of the gods; Venus, the goddess of love and beauty, and Saturn, father of Jupiter and god of agriculture. The stargazers also observed comets with sparkling tails, and meteors or shooting stars apparently falling from the sky.</p>
<p>Since the invention of the telescope, three more planets have been discovered in our solar system: Uranus (1781), Neptune (1846), and, now downgraded to a dwarf planet, Pluto (1930).  The order of the planets from proximity to the sun are as follows: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.</p>
<p>The solar system came into existence about 4.5 billion years ago.  It is located in the Milky Way Orion star cluster. Only 15% of stars in the galaxy host planetary systems and one of those stars is our own sun.  The 8 planets orbiting the sun are divided into 2 categories – terrestrial and Jovian. The first 4 planets are terrestrial and the rest are Jovian.</p>  
<p>Some characteristics of the terrestrial planets are that they are made of rocky materials, have very few moons, have solid surfaces, they don’t have rings and they are relatively small.</p> 
<p>The Jovian planets include gas giants Jupiter and Saturn and the ice giants Uranus and Neptune.  All four Jovian planets have multiple moons, support ring systems, have no solid surface and are immense in size.</p>
<p>In addition to the planets, there are thousands of small bodies such as asteroids and comets. Most of the asteroids orbit in a region between the orbits of Mars and Jupiter, while the home of comets lies far beyond the orbit of Pluto, in the Oort Cloud.</p>
<p>Nearly every planet—and some of the moons—has an atmosphere. Earth's atmosphere is primarily nitrogen and oxygen. Venus has a thick atmosphere of carbon dioxide, with traces of poisonous gases such as sulfur dioxide. Mars's carbon dioxide atmosphere is extremely thin. Jupiter, Saturn, Uranus, and Neptune are primarily hydrogen and helium. When Pluto is near the sun, it has a thin atmosphere, but when Pluto travels to the outer regions of its orbit, the atmosphere freezes and collapses to the planet's surface. In that way, Pluto acts like a comet.</p>
<h4>Moons, Rings, and Magnetospheres</h4>
<p>There are 140 known natural satellites, also called moons, in orbit around the various planets in our solar system, ranging from bodies larger than our own moon to small pieces of debris.</p>
<p>From 1610 to 1977, Saturn was thought to be the only planet with rings. We now know that Jupiter, Uranus, and Neptune also have ring systems, although Saturn's is by far the largest. Particles in these ring systems range in size from dust to boulders to house-size, and may be rocky and/or icy.</p>
<p>Most of the planets also have magnetic fields, which extend into space and form a magnetosphere around each planet. These magnetospheres rotate with the planet, sweeping charged particles with them. The sun has a magnetic field, the heliosphere, which envelops our entire solar system.</p>
<p>Ancient astronomers believed that the Earth was the center of the universe, and that the sun and all the other stars revolved around the Earth. Copernicus proved that Earth and the other planets in our solar system orbit our sun. Little by little, we are charting the universe, and an obvious question arises: Are there other planets where life might exist? Only recently have astronomers had the tools to indirectly detect large planets around other stars in nearby solar systems.</p>

                        <button onClick={this.initializeQuiz}>Start Quiz</button>
                </div>}

                <div id="quiz">
                    {!endQuiz ?
                        (quiz.length) > 1 ?
                            <div>
                                <h1 className="text-center" > Astronomy </h1>
                                <p> Shoot for the Moon. Even if you miss, you will land among the stars </p>
                                <br></br>

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
            </div>
        )

    }




}
export default Learn;


