
import { QuizPageData } from '../types';

export const page2Data: QuizPageData = {
  title: "Cambridge High-Frequency Exam Vocabulary",
  tasks: [
    {
      id: "p2t1",
      title: "Task 1: Essential Phrasal Verbs",
      description: "Master the phrasal verbs that appear most often in Use of English Part 4.",
      questions: [
        {
          id: "q1",
          text: "The school had to ______ the sports day because of the heavy rain.",
          options: ["call off", "put off", "set off", "give off"],
          correctAnswer: "call off",
          explanation: "'Call off' means to cancel. 'Put off' means to postpone."
        },
        {
          id: "q2",
          text: "I was ______ by the complexity of the exam paper.",
          options: ["taken aback", "taken in", "taken over", "taken up"],
          correctAnswer: "taken aback",
          explanation: "'Taken aback' means to be surprised or shocked. This is very common in B2/C1 exams."
        },
        {
          id: "q3",
          text: "She finally ______ a brilliant idea for the marketing campaign.",
          options: ["came up with", "came across", "came round", "came into"],
          correctAnswer: "came up with",
          explanation: "'Come up with' means to think of an idea or plan."
        },
        {
          id: "q4",
          text: "The new regulations will ______ significant changes in the industry.",
          options: ["bring about", "bring up", "bring on", "bring back"],
          correctAnswer: "bring about",
          explanation: "'Bring about' means to cause something to happen."
        },
        {
          id: "q5",
          text: "He ______ his grandfather in terms of personality.",
          options: ["takes after", "takes on", "takes for", "takes out"],
          correctAnswer: "takes after",
          explanation: "'Takes after' means to resemble a parent or relative."
        },
        { id: "q6", text: "Don't ______ until tomorrow what you can do today.", options: ["put off", "put on", "put out", "put away"], correctAnswer: "put off", explanation: "'Put off' means to postpone." },
        { id: "q7", text: "The engine suddenly ______ in the middle of the highway.", options: ["cut out", "cut off", "cut in", "cut down"], correctAnswer: "cut out", explanation: "'Cut out' means to stop functioning (for engines/machines)." },
        { id: "q8", text: "You should ______ for a new hobby to relax.", options: ["take up", "take in", "take on", "take off"], correctAnswer: "take up", explanation: "'Take up' means to start a new activity." },
        { id: "q9", text: "I can't ______ what he's saying; it's too noisy here.", options: ["make out", "make up", "make for", "make over"], correctAnswer: "make out", explanation: "'Make out' means to see, hear, or understand something with difficulty." },
        { id: "q10", text: "The truth finally ______ after years of investigation.", options: ["came out", "came through", "came over", "came by"], correctAnswer: "came out", explanation: "'Came out' means to become known." },
        { id: "q11", text: "We need to ______ some research before making a decision.", options: ["carry out", "carry on", "carry off", "carry through"], correctAnswer: "carry out", explanation: "'Carry out' means to perform or complete a task." },
        { id: "q12", text: "She ______ as a very confident person during the interview.", options: ["comes across", "comes along", "comes about", "comes down"], correctAnswer: "comes across", explanation: "'Comes across' means to give a particular impression." },
        { id: "q13", text: "I happened to ______ an old friend at the supermarket.", options: ["run into", "run over", "run out", "run through"], correctAnswer: "run into", explanation: "'Run into' means to meet someone by chance." },
        { id: "q14", text: "The milk has ______; you should throw it away.", options: ["gone off", "gone on", "gone out", "gone by"], correctAnswer: "gone off", explanation: "'Gone off' means to become spoiled (for food)." },
        { id: "q15", text: "He had to ______ from the competition due to an injury.", options: ["pull out", "pull through", "pull over", "pull up"], correctAnswer: "pull out", explanation: "'Pull out' means to withdraw from an agreement or competition." }
      ]
    },
    ...Array.from({ length: 9 }).map((_, i) => ({
      id: `p2t${i + 2}`,
      title: `Task ${i + 2}: Linking Words & Adverbs`,
      description: "Master linkers like 'notwithstanding', 'furthermore', and 'consequently'.",
      questions: Array.from({ length: 15 }).map((_, qIdx) => ({
        id: `q2-${i}-${qIdx}`,
        text: `Cambridge linker/adverb question #${qIdx + 1} for task ${i+2}...`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
        explanation: "Explanation focusing on formal sentence structure and logical connectors."
      }))
    }))
  ]
};
