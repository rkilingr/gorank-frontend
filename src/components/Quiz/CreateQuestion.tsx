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
  FormHelperText,
  InputGroup,
  Input,
  IconButton,
  Icon,
  Grid,
  GridItem,
  InputLeftAddon,
  FormLabel,
  Box,
} from "@chakra-ui/react";

interface props {
  question: Question;
}

const QuestionEditor: React.FC<props> = (q: props) => {
  const [_questions, setQuestions] = useQuestionsContext();
  const choices = Object.keys(q.question.choices);
  return (
    <div>
      <Grid h="200px" autoRows="auto" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colspan={3}>
          <FormControl id="question" isRequired>
            <FormLabel>Question:</FormLabel>
            <Input
              name="name"
              value={q.question.title}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const f = async () => {
                  const newQ = q.question;
                  newQ.title = e.currentTarget.value;
                  await Promise.resolve(
                    setQuestions((q1) =>
                      updateQuestion(q1, q.question.id, newQ)
                    )
                  );
                };
                void f();
              }}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description:</FormLabel>
            <Box borderWidth="1px" borderRadius="lg">
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
            </Box>
            <FormHelperText>
              This will be text that describes the question in detail
            </FormHelperText>
          </FormControl>
          <FormControl id="choices" isRequired>
            <span>Choices:</span>
            <span style={{ marginLeft: 300 }}>
              {choices.length > 25 ? (
                <IconButton
                  aria-label="Add choice"
                  icon={<Icon icon="plus-square" />}
                  active
                  disabled
                />
              ) : (
                <IconButton
                  aria-label="Add choice"
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
                  aria-label="Delete choice"
                  icon={<Icon icon="minus-square" />}
                  color="red"
                  active
                  disabled
                />
              ) : (
                <IconButton
                  aria-label="Delete choice"
                  icon={<Icon icon="minus-square" />}
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
                    <InputLeftAddon>{key}: </InputLeftAddon>
                    <Input value={q.question.choices[key]} />
                  </InputGroup>
                </div>
              );
            })}
          </FormControl>
          <FormControl id="answer" isRequired>
            <FormLabel>Answer</FormLabel>
            <Input
              name="Answer"
              value={q.question.answer}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const f = async () => {
                  const newQ = q.question;
                  newQ.answer = e.currentTarget.value;
                  await Promise.resolve(
                    setQuestions((q1) =>
                      updateQuestion(q1, q.question.id, newQ)
                    )
                  );
                };
                void f();
              }}
            />
            <br />
            <br />
          </FormControl>
        </GridItem>
        <GridItem colspan={3}>
          <div style={{ lineHeight: 6 }}>
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
        </GridItem>
      </Grid>
    </div>
  );
};

export default QuestionEditor;
