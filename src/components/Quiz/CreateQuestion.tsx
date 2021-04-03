import React from "react";
import Editor from "rich-markdown-editor";
import {
  Question,
  updateQuestion,
  removeQuestion,
  useQuestionsContext,
} from "../../store";
import {
  Form,
  Icon,
  Button,
  Label,
  Input,
  Header,
  Grid,
} from "semantic-ui-react";

interface props {
  question: Question;
}

const QuestionEditor: React.FC<props> = (q: props) => {
  const [_q, setQuestions] = useQuestionsContext();
  const choices = Object.keys(q.question.choices);
  return (
    <>
      <Form.Group>
        <Form.Input
          label="Question Title"
          placeholder="Question Title"
          value={q.question.title}
          onChange={(e) => {
            const f = async () => {
              const newQ = q.question;
              newQ.title = e.target.value;
              await Promise.resolve(
                setQuestions((q1) => updateQuestion(q1, q.question.id, newQ))
              );
            };
            void f();
          }}
        />
        {/* <HelpBlock tooltip>
            This will be displayed as the main title of the question
          </HelpBlock> */}
      </Form.Group>
      <Form.Group>
        <Editor
          defaultValue="Hello world!"
          value={q.question.description}
          onChange={(value: () => string) => {
            const f = async () => {
              const newQ = q.question;
              newQ.description = value();
              await Promise.resolve(
                setQuestions((q1) => updateQuestion(q1, q.question.id, newQ))
              );
            };
            void f();
          }}
        />
        {/* <HelpBlock tooltip>
                This will be text that describes the question in detail
              </HelpBlock> */}
      </Form.Group>

      <Grid divided>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Header size="tiny">Choices: </Header>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Button.Group>
              {choices.length > 25 ? (
                <Button disabled>
                  <Icon name="plus" />
                </Button>
              ) : (
                <Button
                  appearance="primary"
                  active
                  onClick={() => {
                    const f = async () => {
                      const newQ = q.question;
                      const newChoice = String.fromCharCode(
                        "A".charCodeAt(0) + choices.length
                      );
                      newQ.choices[newChoice] = "";
                      await Promise.resolve(
                        setQuestions((q1) =>
                          updateQuestion(q1, q.question.id, newQ)
                        )
                      );
                    };
                    void f();
                  }}
                >
                  <Icon name="plus" />
                </Button>
              )}
              <Button.Or />
              {choices.length < 2 ? (
                <Button appearance="primary" color="red" active disabled>
                  <Icon name="minus" />
                </Button>
              ) : (
                <Button
                  appearance="primary"
                  color="red"
                  active
                  onClick={() => {
                    const f = async () => {
                      const newQ = q.question;
                      const newChoice = String.fromCharCode(
                        "A".charCodeAt(0) + choices.length - 1
                      );
                      delete newQ.choices[newChoice];
                      await Promise.resolve(
                        setQuestions((q1) =>
                          updateQuestion(q1, q.question.id, newQ)
                        )
                      );
                    };
                    void f();
                  }}
                >
                  <Icon name="minus" />
                </Button>
              )}
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <br />
        <Form.Group>
          <Grid.Row>
            <Grid.Column>
              {choices.map((key: string) => {
                return (
                  <>
                    <Grid.Row columns={2}>
                      <Form.Input
                        labelPosition="right"
                        placeholder="Choice"
                        content={q.question.choices[key]}
                      >
                        <Label color="green">{key + ": "}</Label>
                        <Input></Input>
                      </Form.Input>
                      <br />
                    </Grid.Row>
                  </>
                );
              })}
            </Grid.Column>
          </Grid.Row>
          <br />

          {/* <HelpBlock tooltip>Required</HelpBlock> */}
        </Form.Group>
      </Grid>
      <Form.Group>
        <Form.Input
          placeholder="Answer"
          label="Answer"
          content={q.question.answer}
          onChange={(e) => {
            const f = async () => {
              const newQ = q.question;
              newQ.answer = e.target.value;
              await Promise.resolve(
                setQuestions((q1) => updateQuestion(q1, q.question.id, newQ))
              );
            };
            void f();
          }}
        />
        <br />
        <br />
      </Form.Group>
      <Button
        aria-label="Remove Question"
        color="red"
        onClick={() => {
          const f = async () => {
            await Promise.resolve(
              setQuestions((q1) => removeQuestion(q1, q.question.id))
            );
          };
          void f();
        }}
      >
        <Icon name="trash" />
      </Button>
    </>
  );
};

export default QuestionEditor;
