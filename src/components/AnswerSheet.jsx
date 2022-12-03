import { FcIdea } from "react-icons/fc";
import styled from "styled-components";

const AnswerSheet = ({ answerSheet }) => {
  return (
    <AnswerSheetContainer>
      <FcIdea size={60} />
      {!Object.keys(answerSheet).length ? <span>No Answer Yet!</span> : <span>Review Your Answers Here!</span>}
      <div>
        {Object.entries(answerSheet).map(([key, value]) => (
          <AnswerItem key={key}>
            #{key}: {value.ans}
          </AnswerItem>
        ))}
      </div>
    </AnswerSheetContainer>
  );
};
export default AnswerSheet;

const AnswerSheetContainer = styled.div`
  flex: 1;
  background-color: white;
  max-width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 10px;
  svg {
    /* align-self: center; */
    margin-top: 2rem;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 10px;
    max-width: none;
  }
`;
const AnswerItem = styled.div`
  padding: 10px;
  width: 300px;
  font-weight: 600;
  background-color: #fb8500;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
`;
