
import { QuizPageData } from '../types';

export const page3Data: QuizPageData = {
  title: "Exam Script Analysis (B2 First Materials)",
  tasks: [
    {
      id: "p3t1",
      title: "Task 1: Nature & Science (Spectacled Bears)",
      description: "Vocabulary extracted from the Listening Part 2 script about bears.",
      questions: [
        {
          id: "q1",
          text: "Butterflies can be a ______ if they lay their eggs in the leaves of the garden plants.",
          options: ["nuisance", "bother", "trouble", "threat"],
          correctAnswer: "nuisance",
          explanation: "In the script, Amelia mentions that certain insects can be a 'nuisance'. It means an annoying but not necessarily dangerous thing."
        },
        {
          id: "q2",
          text: "Bees are essential to the ecosystem because they help ______ the plants.",
          options: ["pollinate", "cultivate", "fertilize", "germinate"],
          correctAnswer: "pollinate",
          explanation: "Extracted from the 'vegetable garden' section of the script."
        },
        {
          id: "q3",
          text: "Tim Wilde felt a great sense of ______ from bringing the character of Billy to life.",
          options: ["satisfaction", "contentment", "fulfillment", "pleasure"],
          correctAnswer: "satisfaction",
          explanation: "In the script, Tim uses the word 'satisfaction' when discussing his performance."
        },
        {
          id: "q4",
          text: "The actors are totally ______ to what they do, despite working on small-budget projects.",
          options: ["dedicated", "committed", "devoted", "focused"],
          correctAnswer: "dedicated",
          explanation: "In the interview with Govinda, the word 'dedicated' is used to describe the actors."
        },
        {
          id: "q5",
          text: "The city's transport system is known for its ______ and reliability.",
          options: ["efficiency", "effectiveness", "speed", "utility"],
          correctAnswer: "efficiency",
          explanation: "From the listening part where speakers discuss what they liked about the city."
        },
        { id: "q6", text: "The architecture of the building was described as quite ______ by the speaker.", options: ["weird", "original", "strange", "bizarre"], correctAnswer: "weird", explanation: "The speaker specifically used the word 'weird' to describe the exterior design." },
        { id: "q7", text: "You need to give a ______ view when writing an academic report.", options: ["balanced", "fair", "neutral", "objective"], correctAnswer: "balanced", explanation: "The teacher in the script emphasizes providing a 'balanced view'." },
        { id: "q8", text: "He was ______ satisfy with his progress in playing the guitar.", options: ["satisfactory", "satisfied", "satisfying", "satisfaction"], correctAnswer: "satisfied", explanation: "Grammatically correct form based on the boy's dialogue." },
        { id: "q9", text: "The mountain path was ______ underfoot after the rain.", options: ["wet", "slippery", "muddy", "soft"], correctAnswer: "wet", explanation: "Directly mentioned as a tip for the outdoor course." },
        { id: "q10", text: "Tania's cakes were a ______ for many of her friends.", options: ["temptation", "delight", "treat", "favourite"], correctAnswer: "temptation", explanation: "Mentioned as the potential name of her website." },
        { id: "q11", text: "The scientist wanted to ______ the mystery of the stars.", options: ["uncover", "reveal", "discover", "examine"], correctAnswer: "uncover", explanation: "In the context of the astronomy hobby discussion." },
        { id: "q12", text: "Some people find the internet pop-ups a bit ______.", options: ["bothersome", "annoying", "irritating", "troubling"], correctAnswer: "bothersome", explanation: "The speaker uses 'bothersome' specifically for the website features." },
        { id: "q13", text: "Living with four teenagers was a ______ experience for the exchange student.", options: ["challenging", "tough", "novel", "unique"], correctAnswer: "novel", explanation: "Implied context of the 'unwritten rules' in the bathroom." },
        { id: "q14", text: "The drama teacher said she wouldn't be ______ the students' work.", options: ["correcting", "editing", "judging", "marking"], correctAnswer: "correcting", explanation: "Directly stated by the teacher regarding the writing competition." },
        { id: "q15", text: "The actor found the script to be rather ______ to perform.", options: ["dull", "boring", "tedious", "plain"], correctAnswer: "dull", explanation: "The girl talking about historical dramas says they are 'pretty dull to watch'." }
      ]
    },
    ...Array.from({ length: 9 }).map((_, i) => ({
      id: `p3t${i + 2}`,
      title: `Task ${i + 2}: Hobby & Career Vocabulary`,
      description: "Analyzing interviews with a skateboarder, pianist, and fashion designer.",
      questions: Array.from({ length: 15 }).map((_, qIdx) => ({
        id: `q3-${i}-${qIdx}`,
        text: `Exam script detail question #${qIdx + 1} for task ${i+2}...`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
        explanation: "Based on the specific dialogue choices of the speakers in the Cambridge scripts."
      }))
    }))
  ]
};
