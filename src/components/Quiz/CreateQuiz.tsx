import React from "react";
import { useQuestionsContext, addQuestion, Question } from "../../store";
import QuestionEditor from "./CreateQuestion";
import {
  Form,
  IconButton,
  Icon,
  ButtonToolbar,
  Alert,
  PanelGroup,
  Panel,
} from "rsuite";

const QuizEditor = () => {
  const [questionsCtx, setQuestions] = useQuestionsContext();

  return (
    <Form>
      <PanelGroup accordion defaultActiveKey={1} bordered>
        {questionsCtx.map((questionVal: Question, key: number) => {
          return (
            <Panel key={key} header={questionVal.title} eventKey={key + 1}>
              <QuestionEditor question={questionVal} />
            </Panel>
          );
        })}
      </PanelGroup>
      <br />
      <ButtonToolbar>
        <IconButton
          icon={<Icon icon="plus-square" />}
          appearance="primary"
          onClick={() => {
            setQuestions((q1) => addQuestion(q1));
          }}
          active
        >
          Add Question
        </IconButton>
        <IconButton
          icon={<Icon icon="save" />}
          appearance="primary"
          onClick={() => Alert.success("Quiz Saved")}
          active
        >
          Submit
        </IconButton>
        <IconButton
          icon={<Icon icon="ban" />}
          appearance="primary"
          color="red"
          active
        >
          Cancel
        </IconButton>
      </ButtonToolbar>
    </Form>
  );
};

export default QuizEditor;
