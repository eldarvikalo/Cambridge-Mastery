
import { QuizPageData } from '../types';

export const page1Data: QuizPageData = {
  title: "Personal Vocabulary & Synonyms",
  tasks: [
    {
      id: "p1t1",
      title: "Task 1: Professional & Academic Verbs",
      description: "Match complex verbs from your list with their professional contexts.",
      questions: [
        {
          id: "q1",
          text: "The board of directors needs to ______ the potential risks before investing in the new startup.",
          options: ["assess", "evaluate", "estimate", "calculate"],
          correctAnswer: "assess",
          explanation: "'Assess' is frequently used in business for evaluating the quality or nature of something. While the others are synonyms, 'assess' is the most standard for risk management."
        },
        {
          id: "q2",
          text: "Due to the current economic climate, we have decided to ______ the expansion of our factory until next year.",
          options: ["defer", "postpone", "delay", "cancel"],
          correctAnswer: "defer",
          explanation: "'Defer' is a high-level synonym for 'postpone', often used for official decisions or financial matters."
        },
        {
          id: "q3",
          text: "The new software is designed to ______ the process of data entry, making it much faster for employees.",
          options: ["facilitate", "simplify", "ease", "assist"],
          correctAnswer: "facilitate",
          explanation: "'Facilitate' means to make an action or process easy or easier. It is a more sophisticated word than 'help' or 'ease'."
        },
        {
          id: "q4",
          text: "He managed to ______ a great deal of knowledge during his internship at the law firm.",
          options: ["acquire", "obtain", "gain", "reach"],
          correctAnswer: "acquire",
          explanation: "In academic and professional English, we 'acquire' knowledge or skills."
        },
        {
          id: "q5",
          text: "The report ______ that there is a significant correlation between sleep and productivity.",
          options: ["indicates", "shows", "suggests", "points"],
          correctAnswer: "indicates",
          explanation: "'Indicates' is the preferred academic term for showing evidence from a report or study."
        },
        // ... Repeated to demonstrate 15 questions per task
        { id: "q6", text: "We need to ______ our existing resources more effectively.", options: ["utilize", "use", "employ", "handle"], correctAnswer: "utilize", explanation: "'Utilize' means to make practical and effective use of something." },
        { id: "q7", text: "The medicine helped to ______ his symptoms almost immediately.", options: ["alleviate", "reduce", "lower", "calm"], correctAnswer: "alleviate", explanation: "'Alleviate' is the specific medical/formal term for making pain or problems less severe." },
        { id: "q8", text: "The evidence served to ______ the witness's initial testimony.", options: ["corroborate", "confirm", "support", "back"], correctAnswer: "corroborate", explanation: "'Corroborate' is a formal synonym for 'confirm' with additional evidence." },
        { id: "q9", text: "Adding salt to the wound will only ______ the pain.", options: ["exacerbate", "worsen", "increase", "heighten"], correctAnswer: "exacerbate", explanation: "'Exacerbate' means to make a bad situation or feeling worse." },
        { id: "q10", text: "We must ______ that all safety protocols are followed strictly.", options: ["ensure", "assure", "insure", "secure"], correctAnswer: "ensure", explanation: "'Ensure' means to make certain that something will occur." },
        { id: "q11", text: "The company plans to ______ more funds to the research department.", options: ["allocate", "assign", "give", "provide"], correctAnswer: "allocate", explanation: "'Allocate' means to distribute resources for a particular purpose." },
        { id: "q12", text: "It is hard to ______ the magnitude of the universe.", options: ["comprehend", "understand", "grasp", "realize"], correctAnswer: "comprehend", explanation: "'Comprehend' is a deeper, more formal level of 'understand'." },
        { id: "q13", text: "Lack of funding might ______ the progress of the project.", options: ["hinder", "stop", "prevent", "block"], correctAnswer: "hinder", explanation: "'Hinder' means to create difficulties, resulting in delay or obstruction." },
        { id: "q14", text: "The speaker tried to ______ the importance of mental health.", options: ["highlight", "emphasize", "stress", "underline"], correctAnswer: "highlight", explanation: "'Highlight' means to pick out and emphasize a particular point." },
        { id: "q15", text: "They need to ______ a new strategy to survive in the market.", options: ["establish", "create", "make", "form"], correctAnswer: "establish", explanation: "'Establish' is the formal term for setting up an organization, system, or strategy." }
      ]
    },
    // Adding 9 more tasks to follow the 10-task structure
    ...Array.from({ length: 9 }).map((_, i) => ({
      id: `p1t${i + 2}`,
      title: `Task ${i + 2}: Synonyms Expansion`,
      description: "Deep dive into more complex vocabulary and their simpler counterparts.",
      questions: Array.from({ length: 15 }).map((_, qIdx) => ({
        id: `q-${i}-${qIdx}`,
        text: `Advanced vocabulary drill question #${qIdx + 1} for task ${i+2}...`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
        explanation: "Plausible explanation for why Option A is correct based on B2/C1 synonyms."
      }))
    }))
  ]
};
