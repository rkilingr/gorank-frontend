import React, { useState } from "react";
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

export default function QuizEditor() {
  const [state, setState] = useState<{ questions: React.ReactNode[] }>({
    questions: [],
  });

  const addQuestion = () => {
    let questions = state.questions;

    const index = state.questions.length;

    questions = questions.concat(<QuestionEditor key={index} />);

    setState({ questions });
  };

  return (
    <Form>
      <PanelGroup accordion defaultActiveKey={1} bordered>
        {state.questions.map((prop: React.ReactNode, key: number) => {
          return (
            <Panel
              key={key}
              header={"Question " + `${key + 1}`}
              eventKey={key + 1}
            >
              {prop}
            </Panel>
          );
        })}
      </PanelGroup>
      <br />
      <ButtonToolbar>
        <IconButton
          icon={<Icon icon="plus-square" />}
          appearance="primary"
          onClick={addQuestion}
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
}
