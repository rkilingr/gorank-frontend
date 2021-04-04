import React, { useState } from "react";
import {
  useQuestionsContext,
  addQuestion,
  Question,
  postQuestion,
} from "../../store";
import QuestionEditor from "./CreateQuestion";
import { Form, Icon, Accordion, Button } from "semantic-ui-react";

const QuizEditor = () => {
  const [activeIndex, setIndex] = useState(0);
  const [questionsCtx, setQuestions] = useQuestionsContext();

  return (
    <Form>
      <Accordion fluid styled>
        {questionsCtx.map((questionVal: Question, key: number) => {
          return (
            <>
              <Accordion.Title
                active={activeIndex === key}
                index={key}
                onClick={() => setIndex(key)}
              >
                <Icon name="dropdown" />
                {questionVal.title === "" ? "Question" : questionVal.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === key}>
                <QuestionEditor question={questionVal} />
              </Accordion.Content>
            </>
          );
        })}
      </Accordion>
      <br />
      <Button.Group>
        <Button
          icon={<Icon icon="plus-square" />}
          appearance="primary"
          onClick={() => {
            setQuestions((q1) => addQuestion(q1));
          }}
          active
        >
          Add Question
        </Button>
        <Button
          icon={<Icon icon="save" />}
          onClick={async () => {
            await postQuestion(questionsCtx);
            setQuestions([]);
          }}
          appearance="primary"
          active
        >
          Submit
        </Button>
        <Button
          icon={<Icon icon="ban" />}
          appearance="primary"
          color="red"
          active
        >
          Cancel
        </Button>
      </Button.Group>
    </Form>
  );
};

export default QuizEditor;
