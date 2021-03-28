import React from "react";
import QuizEditor from "../../components/Quiz/CreateQuiz";

import { QuestionsProvider } from "../../store";

const CreateQuestion = () => {
  return (
    <div>
      <QuestionsProvider>
        <QuizEditor />
      </QuestionsProvider>
    </div>
  );
};

export default CreateQuestion;
