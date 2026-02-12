
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizPageData {
  title: string;
  tasks: Task[];
}

export type PageType = 'personal' | 'academic' | 'exam-based' | 'phrasal-verbs';
