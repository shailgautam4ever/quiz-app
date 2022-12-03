import { FcApproval } from "react-icons/fc"
import styled from "styled-components"

const Result = ({ answerSheet, totalQuestions }) => {
  const correctAns = {
    1: "J.K Rowling",
    2: "Dracarys",
    3: "GD47"
  }
  const correctScore = Object.entries(answerSheet).reduce((acc, curr) => {
    const [key, value] = curr
    if (correctAns[key] === value.ans) {
      acc = acc + 1
    }
    return acc
  }, 0)
  const percent = ((correctScore / totalQuestions) * 100).toFixed()
  return (
    <ResultContainer>
      <FcApproval size={100} />
      <h1>You have successfully completed the Assessment</h1>
      <StatsContainer>
        <div><p>Question Asked</p><p>{totalQuestions}</p></div>
        <div><p>Question Correct</p><p>{correctScore}</p></div>
        <div><p>Your Score</p><p>{percent}%</p></div>
      </StatsContainer>
    </ResultContainer>
  )
}

export default Result

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  p {
    font-weight: 400;
    font-size: 2rem;
  }
`
const StatsContainer = styled.div`
  width: 400px;
  div {
    display: flex;
    justify-content: space-between;
  }
`