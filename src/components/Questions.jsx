import {
  BsArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";
import styled from "styled-components";
import { questions } from "../mock";

const Questions = ({
  activeIndex,
  answerSheet,
  handleOnPrev,
  handleOnNext,
  handleOnOptSelect,
  setShowResult,
}) => {
  const activeQus = questions[activeIndex];
  const isLastQus = questions.length - 1 === activeIndex;
  const isFirstQus = activeIndex === 0;
  const hasAllAnswered = questions.length === Object.keys(answerSheet).length;
  return (
    <QuestionContainer className="ques-icon">
      <IconQuestion size={60} />
      <UpperQuestionContainer>
        <IconWrapper>
          {!isFirstQus ? (
            <BsArrowLeftSquareFill
              size={35}
              color="skyblue"
              onClick={handleOnPrev}
            />
          ) : null}
        </IconWrapper>
        <span className="title">Attempt Questions Here</span>
        <IconWrapper>
          {!isLastQus ? (
            <BsFillArrowRightSquareFill
              size={35}
              color="skyblue"
              onClick={handleOnNext}
            />
          ) : null}
        </IconWrapper>
      </UpperQuestionContainer>
      <QuestionInfo>
        <p className="question">
          #{activeIndex + 1} {activeQus.question}
        </p>
        {activeQus.options.map((v, i) => (
          <OptionItem key={i}>
            <input
              checked={
                answerSheet[activeIndex + 1] &&
                answerSheet[activeIndex + 1].ans === v
                  ? true
                  : false
              }
              onChange={handleOnOptSelect}
              id={`options${i}`}
              type="radio"
              name="options"
              value={v}
            ></input>
            <label for={`options${i}`}>{v}</label>
          </OptionItem>
        ))}
      </QuestionInfo>
      {hasAllAnswered && (
        <SubmitButton onClick={() => setShowResult(true)}>submit</SubmitButton>
      )}
    </QuestionContainer>
  );
};
export default Questions;

const QuestionContainer = styled.div`
  flex: 2;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 40px;
  border-radius: 10px;
`;

const IconQuestion = styled(FcGraduationCap)`
  align-self: center;
  padding: 20px;
`;
const UpperQuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  svg {
    width: 100px;
  }
  .title {
    font-size: 30px;
    color: #023047;
    font-weight: 900;
  }
`;
const IconWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;
const QuestionInfo = styled.div`
  .question {
    font-weight: bold;
    font-size: large;
  }
`;
const OptionItem = styled.div`
  padding: 10px 0px;
`;
const SubmitButton = styled.div`
  background-color: #219ebc;
  padding: 1rem;
  color: white;
  width: min-content;
  align-self: flex-end;
  cursor: pointer;
`;
