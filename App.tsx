
import React, { useState, useMemo } from 'react';
import { PageType, QuizPageData, Question, Task } from './types';
import { page1Data } from './data/page1';
import { page2Data } from './data/page2';
import { page3Data } from './data/page3';
import { page4Data } from './data/page4';

// Helper components
const Navbar: React.FC<{ activeTab: PageType; setActiveTab: (t: PageType) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: PageType; label: string; icon: string }[] = [
    { id: 'personal', label: 'Personal Vocab', icon: 'fa-book-open' },
    { id: 'academic', label: 'Exam High-Freq', icon: 'fa-graduation-cap' },
    { id: 'exam-based', label: 'Script Analysis', icon: 'fa-file-lines' },
    { id: 'phrasal-verbs', label: 'Phrasal Verbs', icon: 'fa-bolt' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800 tracking-tight flex items-center">
              <i className="fa-solid fa-award mr-2"></i>
              Cambridge Mastery
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <i className={`fa-solid ${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Tabs */}
      <div className="md:hidden flex overflow-x-auto border-t border-gray-100">
         {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center py-2 px-1 text-[10px] uppercase font-bold tracking-wider ${
              activeTab === tab.id ? 'text-blue-600 bg-blue-50' : 'text-gray-400'
            }`}
          >
            <i className={`fa-solid ${tab.icon} mb-1 text-base`}></i>
            {tab.label.split(' ')[0]}
          </button>
        ))}
      </div>
    </nav>
  );
};

const QuizEngine: React.FC<{ pageData: QuizPageData }> = ({ pageData }) => {
  const [selectedTaskId, setSelectedTaskId] = useState<string>(pageData.tasks[0].id);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Sync selected task when pageData changes (e.g., when switching tabs)
  useMemo(() => {
    setSelectedTaskId(pageData.tasks[0].id);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  }, [pageData]);

  const activeTask = useMemo(() => 
    pageData.tasks.find(t => t.id === selectedTaskId) || pageData.tasks[0],
    [pageData, selectedTaskId]
  );

  const currentQuestion = activeTask.questions[currentQuestionIdx];

  const handleAnswer = (option: string) => {
    if (showExplanation) return;
    setSelectedAnswer(option);
    setShowExplanation(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < activeTask.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleTaskChange = (taskId: string) => {
    setSelectedTaskId(taskId);
    resetQuiz();
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-flag-checkered text-4xl text-blue-600"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Task Completed!</h2>
          <p className="text-gray-500 mb-8">You've finished {activeTask.title}</p>
          <div className="text-5xl font-extrabold text-blue-600 mb-8">
            {score} / {activeTask.questions.length}
          </div>
          <button
            onClick={resetQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200"
          >
            Restart Task
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Task Selection */}
      <div className="lg:col-span-1 space-y-2">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Select Task</h3>
        {pageData.tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => handleTaskChange(task.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium ${
              selectedTaskId === task.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-100'
            }`}
          >
            {task.title}
          </button>
        ))}
      </div>

      {/* Main Quiz Area */}
      <div className="lg:col-span-3">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{pageData.title}</h1>
            <p className="text-gray-500 text-sm mt-1">{activeTask.description}</p>
          </div>
          <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {currentQuestionIdx + 1} / {activeTask.questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${((currentQuestionIdx + 1) / activeTask.questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              let styleClasses = "border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 text-gray-700";
              if (showExplanation) {
                if (isCorrect) styleClasses = "border-green-500 bg-green-50 text-green-800";
                else if (isSelected) styleClasses = "border-red-500 bg-red-50 text-red-800";
                else styleClasses = "opacity-50 border-gray-100 text-gray-400";
              }

              return (
                <button
                  key={option}
                  disabled={showExplanation}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-between group ${styleClasses}`}
                >
                  <span>{option}</span>
                  {showExplanation && isCorrect && <i className="fa-solid fa-circle-check text-green-500"></i>}
                  {showExplanation && isSelected && !isCorrect && <i className="fa-solid fa-circle-xmark text-red-500"></i>}
                  {!showExplanation && <i className="fa-solid fa-chevron-right text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-circle-info text-blue-500 mr-2"></i>
                  <span className="font-bold text-blue-900 text-sm">Explanation</span>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center"
              >
                {currentQuestionIdx < activeTask.questions.length - 1 ? 'Next Question' : 'Finish Task'}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PageType>('personal');

  const currentPageData = useMemo(() => {
    switch (activeTab) {
      case 'personal': return page1Data;
      case 'academic': return page2Data;
      case 'exam-based': return page3Data;
      case 'phrasal-verbs': return page4Data;
      default: return page1Data;
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <header className="bg-blue-800 py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            B2 First Exam Preparation
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Interactive practice designed to help you master complex vocabulary, 
            understand tricky linkers, and ace the Cambridge listening scripts.
          </p>
        </div>
      </header>

      <main className="pb-20">
        <QuizEngine pageData={currentPageData} />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Cambridge Mastery Prep. All tasks and scripts are based on official B2/C1 syllabus.</p>
      </footer>
    </div>
  );
};

export default App;
