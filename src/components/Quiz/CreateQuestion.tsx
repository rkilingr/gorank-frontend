import React from "react";
import Editor from "rich-markdown-editor";
import {
  Question,
  updateQuestion,
  removeQuestion,
  useQuestionsContext,
} from "../../store";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Panel,
  Row,
  Col,
  InputGroup,
  Input,
  IconButton,
  Icon,
} from "rsuite";

interface props {
  question: Question;
}

const QuestionEditor: React.FC<props> = (q: props) => {
  const [_q, setQuestions] = useQuestionsContext();
  const choices = Object.keys(q.question.choices);
  return (
    <div>
      <FormGroup>
        <ControlLabel>Question Title</ControlLabel>
        <FormControl
          name="name"
          value={q.question.title}
          onChange={(e) => {
            const f = async () => {
              const newQ = q.question;
              newQ.title = e;
              await Promise.resolve(
                setQuestions((q1) => updateQuestion(q1, q.question.id, newQ))
              );
            };
            void f();
          }}
        />
        <HelpBlock tooltip>
          This will be displayed as the main title of the question
        </HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <Row>
          <Col md={6} sm={12}>
            <Panel bordered bodyFill>
              <Editor
                defaultValue="Hello world!"
                dark={true}
                value={q.question.description}
                onChange={(value: () => string) => {
                  const f = async () => {
                    const newQ = q.question;
                    newQ.description = value();
                    await Promise.resolve(
                      setQuestions((q1) =>
                        updateQuestion(q1, q.question.id, newQ)
                      )
                    );
                  };
                  void f();
                }}
              />
            </Panel>
          </Col>
          <Col md={6} sm={12}>
            <HelpBlock tooltip>
              This will be text that describes the question in detail
            </HelpBlock>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <span>Choices:</span>
        <span style={{ marginLeft: 300 }}>
          {choices.length > 25 ? (
            <IconButton
              appearance="primary"
              icon={<Icon icon="plus-square" />}
              active
              disabled
            />
          ) : (
            <IconButton
              appearance="primary"
              icon={<Icon icon="plus-square" />}
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
            />
          )}
          {choices.length < 2 ? (
            <IconButton
              icon={<Icon icon="minus-square" />}
              appearance="primary"
              color="red"
              active
              disabled
            />
          ) : (
            <IconButton
              icon={<Icon icon="minus-square" />}
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
            />
          )}
        </span>

        {choices.map((key: string, i: number) => {
          return (
            <div key={i}>
              <InputGroup>
                <InputGroup.Addon>{key}: </InputGroup.Addon>
                <Input defaultValue={q.question.choices[key]} />
              </InputGroup>
            </div>
          );
        })}
        <HelpBlock tooltip>Required</HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Answer</ControlLabel>
        <FormControl
          name="Answer"
          value={q.question.answer}
          onChange={(e) => {
            const f = async () => {
              const newQ = q.question;
              newQ.answer = e;
              await Promise.resolve(
                setQuestions((q1) => updateQuestion(q1, q.question.id, newQ))
              );
            };
            void f();
          }}
        />
        <br />
        <br />
      </FormGroup>
      <IconButton
        aria-label="Remove Question"
        color="red"
        icon={<Icon icon="trash2" />}
        onClick={() => {
          const f = async () => {
            await Promise.resolve(
              setQuestions((q1) => removeQuestion(q1, q.question.id))
            );
          };
          void f();
        }}
      />
    </div>
  );
};

export default QuestionEditor;
