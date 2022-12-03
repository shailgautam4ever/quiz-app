import styled from "styled-components";
import { useState } from "react";
import Result from "./components/Result";
import AnswerSheet from "./components/AnswerSheet";
import Questions from "./components/Questions";
import { questions } from "./mock";


function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [answerSheet, setAnswerSheet] = useState({})
  const [showResult, setShowResult] = useState(false)

  const handleOnNext = () => {
    setActiveIndex((curr) => curr + 1)
  }
  const handleOnPrev = () => {
    setActiveIndex((curr) => curr - 1)
  }
  const handleOnOptSelect = (e) => {
    setAnswerSheet((curr) => {
      curr[activeIndex + 1] = {
        ans: e.target.value,
        question: questions[activeIndex].question
      }
      return { ...curr }
    })
  }

  return (
    <>
      {!showResult ? (
        <MainContainer>
          <AnswerSheet answerSheet={answerSheet} />
          <Questions
            activeIndex={activeIndex}
            answerSheet={answerSheet}
            handleOnPrev={handleOnPrev}
            handleOnNext={handleOnNext}
            handleOnOptSelect={handleOnOptSelect}
            setShowResult={setShowResult}
          />
        </MainContainer>
      ) : (
        <Result answerSheet={answerSheet} totalQuestions={questions.length} />
      )}
    </>
  );
}
export default App;

const MainContainer = styled.div`
  min-height:calc(100vh - 60px);
  background-color: #eee;
  display: flex;
  padding: 30px;
  gap:30px;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }

`
