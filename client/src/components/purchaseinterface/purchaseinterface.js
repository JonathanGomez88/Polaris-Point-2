import React from "react";




const PurchaseInterface = () => ( 
    <div>
        <div className ="purchaseModalBox">
            <h1> Choose one of our many courses! </h1>
            <table>
            <tr>
            <td>
                <img src =""/>
                <h1>Geology</h1> 
                    <div>
                        <button className = "learnMore"></button>
                            <p id = "hiddenParagraph"> With our Geology course, you will learn everything from being able to distinguish different types of rocks, to knowing more about our planet.This course will Rock your world. 
                            </p>
                    </div> 
                <button className ="purchaseCourse"></button>
            </td>
            <td>
                <img src =""/>
                <h1> Astronomy </h1>
                    <div>
                        <button className = "learnMore"></button>
                        <p id = "hiddenParagraph"> Do you enjoy looking up at the night sky ?
                        People have been studying the stars
                        for millenea, and the things that we learned have helped to profoundly impact the world.From creating complex maps, to marvelling at constellations, Astronomy has been a wonder to humanity
                        for thousands of years. 
                        </p> 
                    </div> 
                <button className = "purchaseCourse"></button>
            </td>
            </tr>
            <tr>
            <td>
                <img src =""/>
                <h1> Lipsum </h1> 
                    <div>
                    <button className = "learnMore"> </button>
                    <p id = "hiddenParagraph" > Lorem Ipsum Dolor Sit Amet</p> 
                    </div> 
                    <button className = "purchaseCourse"/>
            </td>
            <td>
                <img src = ""/>
                <h1> Lipsum </h1> 
            <div>
            <button className = "learnMore"> </button>
            <p id = "hiddenParagraph" > lipsum dolor sit amit or placeholder text. </p> 
            </div> 
                <button className = "purchaseCourse"></button>
            </td>
            </tr>
        </table>
    </div> 
</div>
);

export default PurchaseInterface;