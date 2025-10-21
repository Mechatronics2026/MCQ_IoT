// إدارة النمط (Theme Management)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// تحقق من التفضيل المحفوظ أو إعدادات النظام
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// تطبيق النمط
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // تحديث الأيقونة
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeToggle.setAttribute('title', 'Switch to light mode');
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.setAttribute('title', 'Switch to dark mode');
    }
}

// تبديل النمط
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// الاستماع لتغير إعدادات النظام
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// تهيئة النمط عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);
    initializeGroupSelection();
});

// إضافة مستمع الحدث لزر التبديل
themeToggle.addEventListener('click', toggleTheme);

// ==================== نظام إدارة المجموعات ====================

// تعريف مجموعات الأسئلة المتاحة
const questionGroups = [
    {
        id: 'group1',
        name: 'GROUP1',
        description: '37 Questions',
        file: 'questions-group1.js'
    },
    {
        id: 'group2', 
        name: 'GROUP2',
        description: '61 Questions',
        file: 'questions-group2.js'
    },
    {
        id: 'group3',
        name: 'GROUP3',
        description: '41 Questions',
        file: 'questions-group3.js'
    },
    {
        id: 'group4',
        name: 'GROUP4',
        description: '30 Questions',
        file: 'questions-group4.js'
    },
    {
        id: 'group5', 
        name: 'GROUP5',
        description: '41 Questions',
        file: 'questions-group5.js'
    },
    {
        id: 'group6',
        name: 'GROUP6',
        description: '46 Questions',
        file: 'questions-group6.js'
    },
    {
        id: 'group7', 
        name: 'GROUP7',
        description: '25 Questions',
        file: 'questions-group7.js'
    },
    {
        id: 'group8', 
        name: 'GROUP8',
        description: '34 Questions',
        file: 'questions-group8.js'
    },
    {
        id: 'group9',
        name: 'GROUP9',
        description: 'All Questions',
        file: 'questions-group9.js'
    }
    // يمكنك إضافة المزيد من المجموعات هنا
];

let currentQuestionGroup = null;
let originalQuizData = [];

// DOM Elements
const groupSelectionScreen = document.getElementById('group-selection-screen');
const modeSelectionScreen = document.getElementById('mode-selection-screen');
const testOrderScreen = document.getElementById('test-order-screen');
const questionContainer = document.getElementById('question-container');
const resultScreen = document.getElementById('result-screen');
const scoreDisplay = document.querySelector('.score-display');
const groupButtonsContainer = document.getElementById('group-buttons');

const trainingModeBtn = document.getElementById('training-mode-btn');
const testModeBtn = document.getElementById('test-mode-btn');
const sequentialBtn = document.getElementById('sequential-btn');
const randomBtn = document.getElementById('random-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const homeBtn = document.getElementById('home-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const questionTextAr = document.getElementById('question-text-ar');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const correctAnswerDisplay = document.getElementById('correct-answer-display');
const explanation = document.getElementById('explanation');
const explanationText = document.getElementById('explanation-text');
const explanationAr = document.getElementById('explanation-ar');
const explanationTextAr = document.getElementById('explanation-text-ar');
const scoreDisplayNum = document.getElementById('score');
const finalScoreDisplay = document.getElementById('final-score');
const currentQuestionNumDisplay = document.getElementById('current-question-num');
const totalQuestionsDisplay = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const celebration = document.getElementById('celebration');
const correctAnswers = document.getElementById('correct-answers');
const incorrectAnswers = document.getElementById('incorrect-answers');
const skippedAnswers = document.getElementById('skipped-answers');
const percentage = document.getElementById('percentage');
const skipInfo = document.getElementById('skip-info');
const timeTakenDisplay = document.getElementById('time-taken');

// Quiz State
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let currentMode = '';
let startTime;
let endTime;
let userAnswers = [];
let skippedQuestions = [];
let isInSkippedPhase = false;

// Event Listeners
trainingModeBtn.addEventListener('click', () => startTrainingMode());
testModeBtn.addEventListener('click', () => showTestOrderScreen());
sequentialBtn.addEventListener('click', () => startTestMode('sequential'));
randomBtn.addEventListener('click', () => startTestMode('random'));
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
skipBtn.addEventListener('click', skipQuestion);
homeBtn.addEventListener('click', backToHome);
restartBtn.addEventListener('click', backToMenu);

// تهيئة شاشة اختيار المجموعة
function initializeGroupSelection() {
    groupButtonsContainer.innerHTML = '';
    
    questionGroups.forEach(group => {
        const button = document.createElement('button');
        button.className = 'btn group-btn';
        button.innerHTML = `
            <div class="group-name">${group.name}</div>
            <div class="group-description">${group.description}</div>
        `;
        button.addEventListener('click', () => selectQuestionGroup(group));
        groupButtonsContainer.appendChild(button);
    });
}

// اختيار مجموعة الأسئلة
function selectQuestionGroup(group) {
    currentQuestionGroup = group;
    
    // تحميل ملف الأسئلة ديناميكياً
    loadQuestionFile(group.file)
        .then(() => {
            showScreen(modeSelectionScreen);
        })
        .catch(error => {
            console.error('Failed to load question file:', error);
            alert('Failed to load questions. Please try again.');
        });
}

// تحميل ملف الأسئلة
function loadQuestionFile(filename) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = filename;
        script.onload = () => {
            // افترض أن الملف المحمل يصدر متغيراً يسمى quizData
            if (typeof window.quizData !== 'undefined') {
                originalQuizData = window.quizData;
                resolve();
            } else {
                reject(new Error('Question data not found in loaded file'));
            }
        };
        script.onerror = () => reject(new Error(`Failed to load ${filename}`));
        document.head.appendChild(script);
    });
}

function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    screenToShow.classList.add('active');
}

function showTestOrderScreen() {
    showScreen(testOrderScreen);
}

function startTrainingMode() {
    currentMode = 'training';
    currentQuizData = [...originalQuizData];
    initializeQuiz();
}

function startTestMode(order) {
    currentMode = 'test';
    if (order === 'random') {
        currentQuizData = shuffleArray(originalQuizData);
    } else {
        currentQuizData = [...originalQuizData];
    }
    initializeQuiz();
}

function initializeQuiz() {
    showScreen(questionContainer);
    scoreDisplay.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuizData.length).fill(null);
    skippedQuestions = [];
    isInSkippedPhase = false;
    startTime = new Date();
    updateScore();
    updateProgress();
    showQuestion();
}

function updateProgress() {
    const totalQuestions = currentQuizData.length;
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;
    totalQuestionsDisplay.textContent = totalQuestions;
}

function showQuestion() {
    resetState();
    
    if (currentQuestionIndex >= currentQuizData.length && skippedQuestions.length > 0 && !isInSkippedPhase) {
        isInSkippedPhase = true;
        currentQuizData = [...skippedQuestions];
        currentQuestionIndex = 0;
        skippedQuestions = [];
        showQuestion();
        return;
    }
    
    if (currentQuestionIndex >= currentQuizData.length) {
        showResult();
        return;
    }

    const currentQuestion = currentQuizData[currentQuestionIndex];
    currentQuestionNumDisplay.innerText = currentQuestionIndex + 1;
    questionText.innerText = currentQuestion.question_en;
    
    if (currentMode === 'training') {
        questionTextAr.innerText = currentQuestion.question_ar;
        questionTextAr.classList.remove('hide');
    } else {
        questionTextAr.classList.add('hide');
    }

    const previousAnswerIndex = userAnswers[currentQuestionIndex];
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        
        button.dataset.optionText = option.text_en.trim();
        button.dataset.optionLetter = String.fromCharCode(65 + index);
        button.dataset.optionIndex = index;

        if (currentMode === 'training') {
            button.innerHTML = `<span class="option-letter">${button.dataset.optionLetter})</span> ${option.text_en}
                                <span class="option-ar">${option.text_ar}</span>`;
        } else {
            button.innerHTML = `<span class="option-letter">${button.dataset.optionLetter})</span> ${option.text_en}`;
        }
        
        button.classList.add('option-btn');
        
        if (previousAnswerIndex !== null && previousAnswerIndex === index) {
            const correctAnswerLetter = currentQuestion.correctAnswer;
            const correctAnswerIndex = correctAnswerLetter.charCodeAt(0) - 65;
            
            if (index === correctAnswerIndex) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        }
        
        button.addEventListener('click', (e) => selectAnswer(e.currentTarget));
        optionsContainer.appendChild(button);
    });

    if (previousAnswerIndex !== null) {
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => button.disabled = true);
        
        const correctAnswerLetter = currentQuestion.correctAnswer;
        const correctAnswerIndex = correctAnswerLetter.charCodeAt(0) - 65;
        const correctOptionText = currentQuestion.options[correctAnswerIndex].text_en;
        
        if (previousAnswerIndex === correctAnswerIndex) {
            feedback.innerText = 'Correct! ✅';
            feedback.classList.add('correct');
        } else {
            feedback.innerText = 'Incorrect! ❌';
            feedback.classList.add('incorrect');
            correctAnswerDisplay.innerText = `The correct answer was: ${String.fromCharCode(65 + correctAnswerIndex)}) ${correctOptionText}`;
            
            if (currentMode === 'training') {
                explanationText.textContent = currentQuestion.explanation_en;
                explanationTextAr.textContent = currentQuestion.explanation_ar;
                explanation.classList.remove('hide');
                explanationAr.classList.remove('hide');
            }
        }
        
        nextBtn.classList.remove('hide');
        skipBtn.classList.add('hide');
    } else {
        skipBtn.classList.remove('hide');
        nextBtn.classList.add('hide');
    }

    prevBtn.classList.toggle('hide', currentQuestionIndex === 0);
    homeBtn.classList.remove('hide');
    
    if (isInSkippedPhase) {
        skipInfo.textContent = "You are now answering the questions you skipped earlier.";
        skipInfo.classList.remove('hide');
    } else {
        skipInfo.classList.add('hide');
    }

    updateProgress();
}

function resetState() {
    feedback.innerText = '';
    feedback.className = 'feedback';
    correctAnswerDisplay.innerText = '';
    explanation.classList.add('hide');
    explanationAr.classList.add('hide');
    nextBtn.classList.add('hide');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(clickedButton) {
    if (userAnswers[currentQuestionIndex] !== null) return;

    const currentQuestion = currentQuizData[currentQuestionIndex];
    const correctAnswerLetter = currentQuestion.correctAnswer.trim().toUpperCase();
    const correctOptionText = currentQuestion.options[correctAnswerLetter.charCodeAt(0) - 65].text_en.trim();

    userAnswers[currentQuestionIndex] = parseInt(clickedButton.dataset.optionIndex);

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);

    if (clickedButton.dataset.optionText === correctOptionText) {
        clickedButton.classList.add('correct');
        feedback.innerText = 'Correct! ✅';
        feedback.classList.add('correct');
        score++;
        updateScore();
    } else {
        clickedButton.classList.add('incorrect');
        feedback.innerText = 'Incorrect! ❌';
        feedback.classList.add('incorrect');

        optionButtons.forEach(btn => {
            if (btn.dataset.optionText === correctOptionText) {
                btn.classList.add('correct');
            }
        });

        correctAnswerDisplay.innerText = `The correct answer was: ${correctAnswerLetter}) ${correctOptionText}`;
    }

    if (currentMode === 'training') {
        explanationText.textContent = currentQuestion.explanation_en;
        explanationTextAr.textContent = currentQuestion.explanation_ar;
        explanation.classList.remove('hide');
        explanationAr.classList.remove('hide');
    }

    nextBtn.classList.remove('hide');
    skipBtn.classList.add('hide');
}

function skipQuestion() {
    if (userAnswers[currentQuestionIndex] === null) {
        skippedQuestions.push(currentQuizData[currentQuestionIndex]);
    }
    
    currentQuestionIndex++;
    showQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function updateScore() {
    scoreDisplayNum.innerText = score;
}

function getTimeTaken() {
    if (!startTime) return "0:00";
    
    const endTime = new Date();
    const timeDiff = endTime - startTime;
    
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function displayTimeTaken() {
    const timeTaken = getTimeTaken();
    timeTakenDisplay.textContent = timeTaken;
}

function showResult() {
    endTime = new Date();
    
    showScreen(resultScreen);
    scoreDisplay.classList.add('hide');
    finalScoreDisplay.innerText = `${score}`;
    
    displayTimeTaken();
    
    const correctCount = score;
    const skippedCount = skippedQuestions.length;
    const incorrectCount = originalQuizData.length - correctCount - skippedCount;
    const successRate = Math.round((correctCount / originalQuizData.length) * 100);
    
    correctAnswers.textContent = correctCount;
    incorrectAnswers.textContent = incorrectCount;
    skippedAnswers.textContent = skippedCount;
    percentage.textContent = `${successRate}%`;
    
    if (successRate >= 80) {
        celebration.textContent = "🎉 Excellent! 🎉";
    } else if (successRate >= 60) {
        celebration.textContent = "👍 Good Job! 👍";
    } else {
        celebration.textContent = "💪 Keep Practicing! 💪";
    }
}


function backToHome() {
    // إعادة تعيين حالة الاختبار
    currentQuizData = [];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    skippedQuestions = [];
    isInSkippedPhase = false;
    scoreDisplay.classList.add('hide');
    
    // العودة إلى شاشة اختيار المجموعة
    showScreen(groupSelectionScreen);
}

function backToMenu() {
    // إعادة تعيين حالة الاختبار
    currentQuizData = [];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    skippedQuestions = [];
    isInSkippedPhase = false;
    scoreDisplay.classList.add('hide');
    
    // العودة إلى شاشة اختيار المجموعة
    showScreen(groupSelectionScreen);
}

// تأكد من أن المستمعين مرتبطين بشكل صحيح
homeBtn.addEventListener('click', backToHome);
restartBtn.addEventListener('click', backToMenu);