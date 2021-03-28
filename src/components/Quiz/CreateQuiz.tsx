import React from "react";
import { useQuestionsContext, addQuestion, Question } from "../../store";
import QuestionEditor from "./CreateQuestion";
import { Form, IconButton, Icon, Alert } from "@chakra-ui/react";

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
          aria-label="Add Question"
          onClick={() => {
            setQuestions((q1) => addQuestion(q1));
          }}
          active
        >
          Add
        </IconButton>
        <IconButton
          aria-label="Save Button"
          icon={<Icon icon="save" />}
          onClick={() => Alert.success("Quiz Saved")}
          active
        >
          Submit
        </IconButton>
        <IconButton
          aria-label="Cancel Button"
          icon={<Icon icon="ban" />}
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
