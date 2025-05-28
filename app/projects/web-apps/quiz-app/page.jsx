"use client"
import React, { Component, useState } from "react";
import questions from "./js/questions.js";


function Quiz(){
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [answered, setAnswered] = useState(false)

	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const [score, setScore] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [buttonStatus, setButtonStatus] = useState(false);

	const HandleAnswer =(index, isCorrect) =>{
		setAnswered(true);
		setSelectedAnswer(index);
		setButtonStatus(true);
		if(isCorrect){
			setScore(score+1);

		}

	}

	const NextQuestion = () =>{
		setAnswered(false);
		setSelectedAnswer(null);
		setButtonStatus(false);
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	return(
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-lg w-full bg-[#444444] p-5 rounded shadow-lg">
				<h1 className="text-center text-5xl text-emerald-400 ">Quiz App</h1>
				<div className="">
					
					{showScore ? <div className="text-md text-[#e9e9e9] m-3">You scored {score} of {questions.length}</div> :

					<div>
						<h3 className="underline text-xl text-[#e9e9e9] m-3">{questions[currentQuestion].questionText}</h3>
						{questions[currentQuestion].answerOptions.map((option, index) => (<button className="block w-full p-2 mt-2 rounded" disabled={buttonStatus}key={index} onClick={() => HandleAnswer(index, option.isCorrect)} style={{background: answered ? option.isCorrect ? "green" : selectedAnswer === index ? "red" : "#e9e9e9"  : "#e9e9e9"}}>{option.answerText}</button>))}

						<button className="rounded-md bg-[#e9e9e9] p-2 mt-2 w-full bg-green-300" disabled={answered ? "":"disabled"}  onClick={NextQuestion}>Next Question</button>
						<p className="text-center text-[#e9e9e9] text-sm mt-2">Question {currentQuestion + 1} of {questions.length}</p>
					</div>}

				</div>
			</div>
		</div>
	);
}

export default Quiz;

