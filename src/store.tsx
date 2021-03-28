import * as React from "react";

// Standard interface and functions
export interface Question {
  id: number;
  title: string;
  description?: string;
  choices: { [name: string]: string };
  answer: string;
}

export const updateQuestion = (
  questions: Question[],
  id: number,
  newQuestion: Question
): Question[] =>
  questions.map((question) => ({
    ...question,
    title:
      question.id === id
        ? newQuestion.title === ""
          ? "Question"
          : newQuestion.title
        : question.title,
    description:
      question.id === id
        ? newQuestion.description === ""
          ? ""
          : newQuestion.description
        : question.description,
    choices:
      question.id === id
        ? newQuestion.choices === {}
          ? { A: "" }
          : newQuestion.choices
        : question.choices,
    answer:
      question.id === id
        ? newQuestion.answer === ""
          ? "A"
          : newQuestion.answer
        : question.answer,
  }));

export const removeQuestion = (questions: Question[], id: number): Question[] =>
  questions.filter((todo) => todo.id !== id);

export const addQuestion = (todos: Question[]): Question[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title: "Question",
    choices: {
      A: "",
    },
    answer: "A",
  },
];

// useState implementation
export const useQuestions = (initial: Question[]) =>
  React.useState<Question[]>(initial);
export type QuestionsType = ReturnType<typeof useQuestions>[0];
export type SetQuestionsType = ReturnType<typeof useQuestions>[1];

const QuestionsContext = React.createContext<ReturnType<
  typeof useQuestions
> | null>(null);

export const useQuestionsContext = () => React.useContext(QuestionsContext)!;

export const QuestionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QuestionsContext.Provider value={useQuestions([])}>
      {children}
    </QuestionsContext.Provider>
  );
};
