
import { QuizPageData } from '../types';

export const page2Data: QuizPageData = {
  title: "Cambridge High-Frequency Exam Vocabulary",
  tasks: [
    {
      id: "p2t1",
      title: "Task 1: Essential Phrasal Verbs (Exam Favorites)",
      description: "Master the phrasal verbs that appear most often in Use of English Part 4.",
      questions: [
        { id: "q1", text: "The school had to ______ the sports day because of the heavy rain.", options: ["call off", "put off", "set off", "give off"], correctAnswer: "call off", explanation: "'Call off' means to cancel. 'Put off' means to postpone." },
        { id: "q2", text: "I was ______ by the complexity of the exam paper.", options: ["taken aback", "taken in", "taken over", "taken up"], correctAnswer: "taken aback", explanation: "'Taken aback' means to be surprised or shocked." },
        { id: "q3", text: "She finally ______ a brilliant idea for the marketing campaign.", options: ["came up with", "came across", "came round", "came into"], correctAnswer: "came up with", explanation: "'Come up with' means to think of an idea or plan." },
        { id: "q4", text: "The new regulations will ______ significant changes in the industry.", options: ["bring about", "bring up", "bring on", "bring back"], correctAnswer: "bring about", explanation: "'Bring about' means to cause something to happen." },
        { id: "q5", text: "He ______ his grandfather in terms of personality.", options: ["takes after", "takes on", "takes for", "takes out"], correctAnswer: "takes after", explanation: "'Takes after' means to resemble a parent or relative." },
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
    {
      id: "p2t2",
      title: "Task 2: Linking Words for Contrast",
      description: "Using 'although', 'despite', 'nonetheless', and others in context.",
      questions: [
        { id: "q16", text: "______ the rain, we went for a long walk in the park.", options: ["Despite", "Although", "However", "In spite"], correctAnswer: "Despite", explanation: "'Despite' is followed by a noun or -ing form. 'In spite' would need 'of'." },
        { id: "q17", text: "The task was difficult. ______, he managed to finish it on time.", options: ["Nevertheless", "Although", "Despite", "Even though"], correctAnswer: "Nevertheless", explanation: "'Nevertheless' is a sentence linker used to show contrast with the previous sentence." },
        { id: "q18", text: "______ he was tired, he stayed up to finish the report.", options: ["Although", "Despite", "However", "Yet"], correctAnswer: "Although", explanation: "'Although' is a conjunction followed by a subject and a verb." },
        { id: "q19", text: "She is very talented. ______, she lacks confidence.", options: ["However", "Albeit", "Despite", "Even though"], correctAnswer: "However", explanation: "'However' is used to introduce a statement that contrasts with what has just been said." },
        { id: "q20", text: "He agreed to help us, ______ somewhat reluctantly.", options: ["albeit", "although", "despite", "however"], correctAnswer: "albeit", explanation: "'Albeit' means 'although it be' and is used to introduce a concessive clause." },
        { id: "q21", text: "I like the color of the car. ______, the price is too high.", options: ["But", "Although", "Despite", "Nonetheless"], correctAnswer: "But", explanation: "'But' is the simplest way to show contrast in a single sentence." },
        { id: "q22", text: "______ having no formal training, she became a top chef.", options: ["Despite", "Although", "Even though", "However"], correctAnswer: "Despite", explanation: "'Despite' is used here before the gerund 'having'." },
        { id: "q23", text: "We didn't win the game. ______, we enjoyed playing together.", options: ["Nonetheless", "Even though", "Albeit", "While"], correctAnswer: "Nonetheless", explanation: "'Nonetheless' is formal and used to show contrast between two independent sentences." },
        { id: "q24", text: "______ I understand your point, I still disagree with you.", options: ["While", "Despite", "However", "Yet"], correctAnswer: "While", explanation: "'While' can be used as a conjunction to show contrast, similar to 'although'." },
        { id: "q25", text: "He is a great athlete, ______ he can be quite aggressive.", options: ["yet", "although", "despite", "however"], correctAnswer: "yet", explanation: "'Yet' is used to add something that is surprising after what you have just said." },
        { id: "q26", text: "The plan has some flaws. ______, it is better than nothing.", options: ["Still", "Although", "Despite", "Even if"], correctAnswer: "Still", explanation: "'Still' can be used at the start of a sentence to show contrast." },
        { id: "q27", text: "______ the fact that he was late, he was very polite.", options: ["Despite", "Although", "However", "In spite"], correctAnswer: "Despite", explanation: "Collocation: 'Despite the fact that...'." },
        { id: "q28", text: "They went ahead with the project ______ the potential risks.", options: ["regardless of", "although", "however", "nonetheless"], correctAnswer: "regardless of", explanation: "'Regardless of' means without paying attention to something." },
        { id: "q29", text: "It was a cold day. ______, the children played outside.", options: ["Even so", "Although", "Despite", "While"], correctAnswer: "Even so", explanation: "'Even so' is a common B2/C1 linker meaning 'nevertheless'." },
        { id: "q30", text: "He is rich, ______ he never spends any money.", options: ["but", "despite", "although", "however"], correctAnswer: "but", explanation: "'But' is a coordinating conjunction for contrast." }
      ]
    },
    {
      id: "p2t3",
      title: "Task 3: Addition & Result Linkers",
      description: "Words like 'moreover', 'furthermore', 'consequently', and 'therefore'.",
      questions: [
        { id: "q31", text: "The house is very large. ______, it has a beautiful garden.", options: ["Moreover", "However", "Despite", "Otherwise"], correctAnswer: "Moreover", explanation: "'Moreover' adds information that supports the previous point." },
        { id: "q32", text: "He was late for work. ______, he was fired.", options: ["Consequently", "Furthermore", "In addition", "However"], correctAnswer: "Consequently", explanation: "'Consequently' introduces the result of the previous action." },
        { id: "q33", text: "The product is expensive. ______, it is of very high quality.", options: ["Furthermore", "However", "Therefore", "Despite"], correctAnswer: "Furthermore", explanation: "'Furthermore' adds another point to the argument." },
        { id: "q34", text: "It was raining. ______, we decided to stay at home.", options: ["Therefore", "Moreover", "Furthermore", "Nonetheless"], correctAnswer: "Therefore", explanation: "'Therefore' shows a logical result or conclusion." },
        { id: "q35", text: "I missed the train. ______, I was late for the interview.", options: ["As a result", "In addition", "However", "Moreover"], correctAnswer: "As a result", explanation: "Shows the consequence of the first statement." },
        { id: "q36", text: "He is a talented musician. ______, he is a great singer.", options: ["Additionally", "Consequently", "Therefore", "Nonetheless"], correctAnswer: "Additionally", explanation: "'Additionally' is used to add another fact." },
        { id: "q37", text: "The traffic was heavy. ______, we missed the start of the movie.", options: ["Hence", "Moreover", "Furthermore", "However"], correctAnswer: "Hence", explanation: "'Hence' is a formal way to say 'for this reason'." },
        { id: "q38", text: "The company is growing. ______, they are hiring new staff.", options: ["Thus", "Nonetheless", "Albeit", "However"], correctAnswer: "Thus", explanation: "'Thus' is formal for 'as a result of this'." },
        { id: "q39", text: "He is a hard-working student. ______, he is very active in sports.", options: ["Besides", "Consequently", "Therefore", "Hence"], correctAnswer: "Besides", explanation: "'Besides' adds another reason or point." },
        { id: "q40", text: "The report was finished on time. ______, it was very well-written.", options: ["What's more", "However", "Consequently", "Nonetheless"], correctAnswer: "What's more", explanation: "'What's more' is used to add an even more important point." },
        { id: "q41", text: "We need to save money. ______, we should eat out less.", options: ["Accordingly", "Moreover", "Furthermore", "In spite of"], correctAnswer: "Accordingly", explanation: "'Accordingly' means in a way that is appropriate to the circumstances." },
        { id: "q42", text: "The evidence was strong. ______, the jury found him guilty.", options: ["Not only that", "However", "Albeit", "Nonetheless"], correctAnswer: "Not only that", explanation: "Used to add an additional piece of information." },
        { id: "q43", text: "He is very busy. ______, he has no time for a holiday.", options: ["For this reason", "Moreover", "Furthermore", "However"], correctAnswer: "For this reason", explanation: "Shows cause and effect." },
        { id: "q44", text: "The weather was perfect. ______, the view from the top was amazing.", options: ["To top it all off", "However", "Consequently", "Nonetheless"], correctAnswer: "To top it all off", explanation: "Used to add a final, often better, point." },
        { id: "q45", text: "The flight was delayed. ______, we missed our connection.", options: ["Ultimately", "Moreover", "Furthermore", "However"], correctAnswer: "Ultimately", explanation: "'Ultimately' can imply 'the final result was...'." }
      ]
    },
    {
      id: "p2t4",
      title: "Task 4: Confusing Word Pairs",
      description: "Distinguishing between words that look or sound similar but have different meanings.",
      questions: [
        { id: "q46", text: "The new policy will ______ every employee in the company.", options: ["affect", "effect", "impact", "influence"], correctAnswer: "affect", explanation: "'Affect' is usually a verb (to influence), 'effect' is usually a noun (a result)." },
        { id: "q47", text: "We need to find an ______ solution to this problem.", options: ["economic", "economical", "cheap", "saving"], correctAnswer: "economical", explanation: "'Economical' means giving good value or service in relation to the amount of money spent." },
        { id: "q48", text: "I would ______ you to talk to your manager about this.", options: ["advise", "advice", "suggest", "propose"], correctAnswer: "advise", explanation: "'Advise' is the verb, 'advice' is the noun." },
        { id: "q49", text: "The weather ______ in London can be very unpredictable.", options: ["climate", "weather", "forecast", "outlook"], correctAnswer: "weather", explanation: "'Weather' refers to day-to-day conditions, 'climate' to long-term patterns." },
        { id: "q50", text: "He has a lot of ______ in the field of engineering.", options: ["experience", "experiments", "expertise", "skills"], correctAnswer: "experience", explanation: "'Experience' is knowledge or skill that you get from doing something." },
        { id: "q51", text: "Please ______ me to buy some milk on the way home.", options: ["remind", "remember", "recall", "repeat"], correctAnswer: "remind", explanation: "'Remind' is to make someone remember something." },
        { id: "q52", text: "The city is known for its ______ monuments.", options: ["historic", "historical", "old", "ancient"], correctAnswer: "historic", explanation: "'Historic' means famous or important in history." },
        { id: "q53", text: "I ______ the offer because I wanted to stay in my current job.", options: ["rejected", "refused", "denied", "ignored"], correctAnswer: "rejected", explanation: "To 'reject' an offer is standard." },
        { id: "q54", text: "The book had a profound ______ on my life.", options: ["effect", "affect", "impact", "result"], correctAnswer: "effect", explanation: "Here the noun form is needed." },
        { id: "q55", text: "We walked ______ the beach for three hours.", options: ["along", "across", "through", "over"], correctAnswer: "along", explanation: "To walk 'along' the beach means in a line following the shore." },
        { id: "q56", text: "I'm ______ I can't help you with that right now.", options: ["afraid", "scared", "worried", "fearful"], correctAnswer: "afraid", explanation: "'I'm afraid' is a polite way of saying 'I'm sorry'." },
        { id: "q57", text: "The film was ______ by a true story.", options: ["inspired", "based", "taken", "made"], correctAnswer: "inspired", explanation: "'Inspired by' is a common collocation." },
        { id: "q58", text: "He is a very ______ person, always thinking of others.", options: ["considerate", "considerable", "thoughtful", "kind"], correctAnswer: "considerate", explanation: "'Considerate' means careful not to inconvenience or harm others." },
        { id: "q59", text: "The ______ of the company is located in New York.", options: ["headquarters", "headquarter", "office", "center"], correctAnswer: "headquarters", explanation: "'Headquarters' is always plural in form." },
        { id: "q60", text: "I'll ______ you at the airport at 5 PM.", options: ["meet", "meet with", "see", "join"], correctAnswer: "meet", explanation: "'Meet someone' is the standard way to say you'll be at a place together." }
      ]
    },
    {
      id: "p2t5",
      title: "Task 5: Adverbs of Degree & Manner",
      description: "Enhancing your descriptions with precise adverbs.",
      questions: [
        { id: "q61", text: "The results were ______ conclusive.", options: ["entirely", "mostly", "very", "much"], correctAnswer: "entirely", explanation: "'Entirely' means completely; fully." },
        { id: "q62", text: "He was ______ aware of the dangers involved.", options: ["well", "fully", "much", "highly"], correctAnswer: "fully", explanation: "Collocation: 'Fully aware'." },
        { id: "q63", text: "The task was ______ more difficult than I had expected.", options: ["considerably", "very", "too", "highly"], correctAnswer: "considerably", explanation: "Used to show a large difference." },
        { id: "q64", text: "She was ______ surprised by the news.", options: ["greatly", "much", "highly", "very"], correctAnswer: "greatly", explanation: "'Greatly' is often used with 'surprised' in formal English." },
        { id: "q65", text: "The project was ______ successful.", options: ["highly", "very", "mostly", "well"], correctAnswer: "highly", explanation: "Collocation: 'Highly successful'." },
        { id: "q66", text: "The rules are ______ enforced.", options: ["strictly", "strongly", "hardly", "firmly"], correctAnswer: "strictly", explanation: "'Strictly' is the standard adverb for enforcing rules." },
        { id: "q67", text: "He spoke ______ about his childhood.", options: ["fondly", "happily", "well", "good"], correctAnswer: "fondly", explanation: "'Fondly' means with affection or liking." },
        { id: "q68", text: "The price is ______ high.", options: ["exceedingly", "very", "too", "much"], correctAnswer: "exceedingly", explanation: "'Exceedingly' is formal for 'extremely'." },
        { id: "q69", text: "They ______ agreed to the proposal.", options: ["unanimously", "equally", "same", "together"], correctAnswer: "unanimously", explanation: "'Unanimously' means by everyone in a particular group." },
        { id: "q70", text: "She was ______ offended by his remarks.", options: ["deeply", "highly", "very", "much"], correctAnswer: "deeply", explanation: "Collocation: 'Deeply offended'." },
        { id: "q71", text: "The situation has ______ changed.", options: ["drastically", "much", "very", "really"], correctAnswer: "drastically", explanation: "'Drastically' implies a extreme and sudden change." },
        { id: "q72", text: "The medicine worked ______.", options: ["effectively", "well", "good", "fast"], correctAnswer: "effectively", explanation: "'Effectively' means in a way that produces the intended result." },
        { id: "q73", text: "He ______ accepted the job offer.", options: ["eagerly", "happily", "quickly", "fast"], correctAnswer: "eagerly", explanation: "'Eagerly' means wanting to do something very much." },
        { id: "q74", text: "The room was ______ decorated.", options: ["tastefully", "well", "nicely", "good"], correctAnswer: "tastefully", explanation: "'Tastefully' means showing good aesthetic judgment." },
        { id: "q75", text: "He was ______ injured in the accident.", options: ["critically", "badly", "very", "much"], correctAnswer: "critically", explanation: "'Critically' is used to describe severe, life-threatening injuries." }
      ]
    },
    {
      id: "p2t6",
      title: "Task 6: Fixed Phrases & Idioms (Part 1)",
      description: "Commonly used English expressions that appear in Reading Part 4.",
      questions: [
        { id: "q76", text: "It's only a ______ of time before he finds out.", options: ["matter", "question", "case", "point"], correctAnswer: "matter", explanation: "Idiom: 'A matter of time'." },
        { id: "q77", text: "He is always ______ the go.", options: ["on", "in", "at", "by"], correctAnswer: "on", explanation: "Idiom: 'On the go' (very busy)." },
        { id: "q78", text: "We need to ______ a decision soon.", options: ["make", "do", "take", "have"], correctAnswer: "make", explanation: "Fixed phrase: 'Make a decision'." },
        { id: "q79", text: "She has a ______ for languages.", options: ["gift", "talent", "skill", "mind"], correctAnswer: "gift", explanation: "Idiom: 'A gift for something'." },
        { id: "q80", text: "He took it for ______ that I would help him.", options: ["granted", "sure", "true", "real"], correctAnswer: "granted", explanation: "Idiom: 'Take for granted'." },
        { id: "q81", text: "By and ______, the results were positive.", options: ["large", "big", "great", "mostly"], correctAnswer: "large", explanation: "Idiom: 'By and large' (mostly)." },
        { id: "q82", text: "It's not worth ______ over spilled milk.", options: ["crying", "weeping", "sad", "unhappy"], correctAnswer: "crying", explanation: "Idiom: 'Crying over spilled milk'." },
        { id: "q83", text: "Keep an ______ on the children.", options: ["eye", "watch", "view", "look"], correctAnswer: "eye", explanation: "Idiom: 'Keep an eye on'." },
        { id: "q84", text: "He is second to ______ when it comes to cooking.", options: ["none", "no one", "all", "others"], correctAnswer: "none", explanation: "Idiom: 'Second to none' (the best)." },
        { id: "q85", text: "In the long ______, it will be better for us.", options: ["run", "time", "way", "period"], correctAnswer: "run", explanation: "Idiom: 'In the long run'." },
        { id: "q86", text: "The car is in ______ condition.", options: ["mint", "perfect", "good", "new"], correctAnswer: "mint", explanation: "Idiom: 'In mint condition' (perfect)." },
        { id: "q87", text: "She is ______ the moon about her new job.", options: ["over", "above", "on", "in"], correctAnswer: "over", explanation: "Idiom: 'Over the moon' (very happy)." },
        { id: "q88", text: "He is a ______ of all trades.", options: ["jack", "master", "worker", "man"], correctAnswer: "jack", explanation: "Idiom: 'Jack of all trades' (can do many things)." },
        { id: "q89", text: "Don't ______ around the bush.", options: ["beat", "walk", "go", "talk"], correctAnswer: "beat", explanation: "Idiom: 'Beat around the bush' (avoiding the main point)." },
        { id: "q90", text: "It's a piece of ______.", options: ["cake", "bread", "pie", "fruit"], correctAnswer: "cake", explanation: "Idiom: 'A piece of cake' (very easy)." }
      ]
    },
    {
      id: "p2t7",
      title: "Task 7: Dependent Prepositions",
      description: "Matching verbs and adjectives with their correct prepositions.",
      questions: [
        { id: "q91", text: "She is interested ______ learning new languages.", options: ["in", "at", "on", "for"], correctAnswer: "in", explanation: "'Interested' is followed by 'in'." },
        { id: "q92", text: "He is very good ______ playing the piano.", options: ["at", "in", "on", "for"], correctAnswer: "at", explanation: "'Good' at a skill or activity." },
        { id: "q93", text: "They are responsible ______ the safety of the workers.", options: ["for", "at", "on", "in"], correctAnswer: "for", explanation: "'Responsible' for something." },
        { id: "q94", text: "She is proud ______ her achievements.", options: ["of", "for", "at", "in"], correctAnswer: "of", explanation: "'Proud' of someone or something." },
        { id: "q95", text: "He is capable ______ winning the race.", options: ["of", "at", "in", "for"], correctAnswer: "of", explanation: "'Capable' of doing something." },
        { id: "q96", text: "We need to focus ______ our goals.", options: ["on", "at", "in", "for"], correctAnswer: "on", explanation: "'Focus' on something." },
        { id: "q97", text: "She is afraid ______ spiders.", options: ["of", "for", "at", "in"], correctAnswer: "of", explanation: "'Afraid' of something." },
        { id: "q98", text: "He is famous ______ his paintings.", options: ["for", "at", "on", "in"], correctAnswer: "for", explanation: "'Famous' for something." },
        { id: "q99", text: "They are satisfied ______ the results.", options: ["with", "at", "on", "in"], correctAnswer: "with", explanation: "'Satisfied' with something." },
        { id: "q100", text: "I am worried ______ the exam.", options: ["about", "for", "at", "in"], correctAnswer: "about", explanation: "'Worried' about something." },
        { id: "q101", text: "She is addicted ______ coffee.", options: ["to", "at", "on", "in"], correctAnswer: "to", explanation: "'Addicted' to something." },
        { id: "q102", text: "He is allergic ______ nuts.", options: ["to", "at", "on", "for"], correctAnswer: "to", explanation: "'Allergic' to something." },
        { id: "q103", text: "They are familiar ______ the rules.", options: ["with", "at", "on", "for"], correctAnswer: "with", explanation: "'Familiar' with something." },
        { id: "q104", text: "I am fed up ______ this weather.", options: ["with", "at", "on", "for"], correctAnswer: "with", explanation: "'Fed up' with something." },
        { id: "q105", text: "She is keen ______ swimming.", options: ["on", "at", "in", "for"], correctAnswer: "on", explanation: "'Keen' on something (British English)." }
      ]
    },
    {
      id: "p2t8",
      title: "Task 8: Word Formation (Nouns from Verbs/Adjectives)",
      description: "Practicing Use of English Part 3 skills.",
      questions: [
        { id: "q106", text: "Verb: 'Suggest'. Noun: ______.", options: ["suggestion", "suggesting", "suggestness", "suggestment"], correctAnswer: "suggestion", explanation: "Standard noun suffix -ion." },
        { id: "q107", text: "Adjective: 'Happy'. Noun: ______.", options: ["happiness", "happyness", "happiment", "happity"], correctAnswer: "happiness", explanation: "Suffix -ness after changing y to i." },
        { id: "q108", text: "Verb: 'Inform'. Noun: ______.", options: ["information", "informness", "informity", "informance"], correctAnswer: "information", explanation: "Suffix -ation." },
        { id: "q109", text: "Adjective: 'Strong'. Noun: ______.", options: ["strength", "strongness", "strongity", "strongth"], correctAnswer: "strength", explanation: "Irregular noun form from adjective 'strong'." },
        { id: "q110", text: "Verb: 'Decide'. Noun: ______.", options: ["decision", "decidance", "decidement", "decidity"], correctAnswer: "decision", explanation: "Standard noun form." },
        { id: "q111", text: "Adjective: 'Wide'. Noun: ______.", options: ["width", "wideness", "widness", "widement"], correctAnswer: "width", explanation: "Noun form of 'wide'." },
        { id: "q112", text: "Verb: 'Arrive'. Noun: ______.", options: ["arrival", "arrivance", "arrivement", "arrivity"], correctAnswer: "arrival", explanation: "Suffix -al for nouns from verbs." },
        { id: "q113", text: "Adjective: 'Deep'. Noun: ______.", options: ["depth", "deepness", "deepity", "deepth"], correctAnswer: "depth", explanation: "Noun form of 'deep'." },
        { id: "q114", text: "Verb: 'Explain'. Noun: ______.", options: ["explanation", "explainment", "explainance", "explainity"], correctAnswer: "explanation", explanation: "Change in stem before suffix -ation." },
        { id: "q115", text: "Adjective: 'Long'. Noun: ______.", options: ["length", "longness", "longth", "longement"], correctAnswer: "length", explanation: "Noun form of 'long'." },
        { id: "q116", text: "Verb: 'Agree'. Noun: ______.", options: ["agreement", "agreeance", "agreeness", "agreetity"], correctAnswer: "agreement", explanation: "Suffix -ment." },
        { id: "q117", text: "Adjective: 'High'. Noun: ______.", options: ["height", "highness", "highth", "highment"], correctAnswer: "height", explanation: "Noun form of 'high'." },
        { id: "q118", text: "Verb: 'Succeed'. Noun: ______.", options: ["success", "succeedment", "succeedance", "succeedity"], correctAnswer: "success", explanation: "Noun form of 'succeed'." },
        { id: "q119", text: "Adjective: 'Fair'. Noun: ______.", options: ["fairness", "fairity", "fairance", "fairment"], correctAnswer: "fairness", explanation: "Suffix -ness." },
        { id: "q120", text: "Verb: 'Believe'. Noun: ______.", options: ["belief", "believement", "believeance", "believeity"], correctAnswer: "belief", explanation: "Noun form of 'believe'." }
      ]
    },
    {
      id: "p2t9",
      title: "Task 9: Advanced Reporting & Opinion Verbs",
      description: "Identifying the right verb for formal reports.",
      questions: [
        { id: "q121", text: "The researcher ______ that more data is needed.", options: ["concluded", "told", "said", "spoke"], correctAnswer: "concluded", explanation: "Formal way to state a final thought based on evidence." },
        { id: "q122", text: "She ______ that the policy was a failure.", options: ["asserted", "said", "told", "voiced"], correctAnswer: "asserted", explanation: "To state something strongly and confidently." },
        { id: "q123", text: "He ______ any knowledge of the secret meeting.", options: ["denied", "refused", "refuted", "disputed"], correctAnswer: "denied", explanation: "To say that something is not true." },
        { id: "q124", text: "The witness ______ the accuracy of the report.", options: ["disputed", "denied", "doubted", "ignored"], correctAnswer: "disputed", explanation: "To argue against something." },
        { id: "q125", text: "The report ______ several important issues.", options: ["highlights", "shows", "says", "points"], correctAnswer: "highlights", explanation: "To draw attention to something." },
        { id: "q126", text: "He ______ that he would be on time.", options: ["guaranteed", "said", "told", "spoke"], correctAnswer: "guaranteed", explanation: "To promise something will happen." },
        { id: "q127", text: "She ______ that the work be done by Friday.", options: ["requested", "asked", "told", "said"], correctAnswer: "requested", explanation: "Formal way of asking for something." },
        { id: "q128", text: "The study ______ a link between smoking and cancer.", options: ["proves", "shows", "says", "tells"], correctAnswer: "proves", explanation: "To use evidence to show something is true." },
        { id: "q129", text: "He ______ the decision of the board.", options: ["questioned", "said", "told", "asked"], correctAnswer: "questioned", explanation: "To express doubt about something." },
        { id: "q130", text: "The author ______ the main points of the book.", options: ["summarizes", "says", "tells", "shows"], correctAnswer: "summarizes", explanation: "To give a brief statement of the main points." },
        { id: "q131", text: "She ______ that the results were unexpected.", options: ["noted", "said", "told", "voiced"], correctAnswer: "noted", explanation: "To mention or remark on something." },
        { id: "q132", text: "He ______ that he was right.", options: ["insisted", "said", "told", "spoke"], correctAnswer: "insisted", explanation: "To state something firmly despite opposition." },
        { id: "q133", text: "The report ______ a change in the law.", options: ["recommends", "says", "tells", "points"], correctAnswer: "recommends", explanation: "To suggest that something is a good idea." },
        { id: "q134", text: "She ______ her support for the new project.", options: ["expressed", "said", "told", "voiced"], correctAnswer: "expressed", explanation: "To put a feeling or idea into words." },
        { id: "q135", text: "He ______ the importance of exercise.", options: ["emphasized", "said", "told", "spoke"], correctAnswer: "emphasized", explanation: "To give special importance to something." }
      ]
    },
    {
      id: "p2t10",
      title: "Task 10: Examination Mixed Practice",
      description: "A mix of vocabulary challenges typical of the B2/C1 Reading paper.",
      questions: [
        { id: "q136", text: "The weather was ______ cold.", options: ["extremely", "much", "too", "highly"], correctAnswer: "extremely", explanation: "Common adverb for degree." },
        { id: "q137", text: "I ______ believe that we can win.", options: ["firmly", "strongly", "hardly", "well"], correctAnswer: "firmly", explanation: "Collocation: 'Firmly believe'." },
        { id: "q138", text: "The book is ______ reading.", options: ["worth", "worthy", "valued", "good"], correctAnswer: "worth", explanation: "Phrase: 'It is worth doing something'." },
        { id: "q139", text: "He is ______ for his age.", options: ["mature", "old", "aged", "adult"], correctAnswer: "mature", explanation: "Describes someone who acts older than they are." },
        { id: "q140", text: "The news was a huge ______.", options: ["shocker", "shock", "shocking", "shocks"], correctAnswer: "shock", explanation: "Noun form needed here." },
        { id: "q141", text: "I ______ recommend this movie.", options: ["highly", "very", "much", "well"], correctAnswer: "highly", explanation: "Collocation: 'Highly recommend'." },
        { id: "q142", text: "The project was ______ on time.", options: ["finished", "done", "made", "completed"], correctAnswer: "completed", explanation: "'Completed' is formal for finishing a project." },
        { id: "q143", text: "He has a ______ personality.", options: ["charming", "nice", "good", "happy"], correctAnswer: "charming", explanation: "Describes someone very pleasant and attractive." },
        { id: "q144", text: "The car is very ______.", options: ["reliable", "good", "fast", "new"], correctAnswer: "reliable", explanation: "Meaning it can be trusted to work well." },
        { id: "q145", text: "I'm ______ I can't come.", options: ["sorry", "afraid", "sad", "worried"], correctAnswer: "sorry", explanation: "Standard way to apologize for not being able to do something." },
        { id: "q146", text: "The view was ______.", options: ["spectacular", "nice", "good", "great"], correctAnswer: "spectacular", explanation: "Meaning very impressive; dramatic." },
        { id: "q147", text: "He is a ______ worker.", options: ["diligent", "good", "fast", "hard"], correctAnswer: "diligent", explanation: "Formal for hard-working." },
        { id: "q148", text: "The prices are ______.", options: ["reasonable", "good", "fair", "cheap"], correctAnswer: "reasonable", explanation: "Meaning fair and not too expensive." },
        { id: "q149", text: "I ______ hope you succeed.", options: ["sincerely", "really", "much", "well"], correctAnswer: "sincerely", explanation: "Formal way to express a hope." },
        { id: "q150", text: "The film was ______.", options: ["disappointing", "bad", "sad", "poor"], correctAnswer: "disappointing", explanation: "Meaning not as good as expected." }
      ]
    }
  ]
};
