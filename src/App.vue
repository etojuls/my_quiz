<template>
    <div class="quiz">
        <div class="quiz__container">
            <div class="quiz__heading">
                My first quiz.
            </div>
            <app-questions :questions="questions" :questionsAnswered="questionsAnswered"
                @question-answered="questionAnswered" v-if="questionsAnswered < questions.length"></app-questions>
            <app-reult :questionCorrect="questionCorrect" :questionsAnswered="questionsAnswered" :questions="questions"
                @quiz-reset="quizReset" v-else></app-reult>
        </div>
    </div>
</template>
<script>
import AppQuestions from '@/components/AppQuestions.vue';
import AppReult from '@/components/AppResult.vue';
export default {
    components: { AppQuestions, AppReult },
    name: 'app',
    data() {
        return {
            questionsAnswered: 0,
            questionCorrect: 0,
            questions: [
                {
                    title: 'How much is 2+2',
                    answer: [
                        {
                            answer: 1,
                            correct: false
                        },
                        {
                            answer: 2,
                            correct: false
                        },
                        {
                            answer: 3,
                            correct: false
                        },
                        {
                            answer: 4,
                            correct: true
                        },
                    ]
                },
                {
                    title: 'What letter is missing in the word "C_t?',
                    answer: [
                        {
                            answer: 'A',
                            correct: true
                        },
                        {
                            answer: 'O',
                            correct: false
                        },
                        {
                            answer: 'E',
                            correct: false
                        },
                        {
                            answer: 'I',
                            correct: false
                        },
                    ]
                },
                {
                    title: 'What planet do we live on',
                    answer: [
                        {
                            answer: 'Mars',
                            correct: false
                        },
                        {
                            answer: 'Jupiter',
                            correct: false
                        },
                        {
                            answer: 'Earth',
                            correct: true
                        },
                        {
                            answer: 'Venus',
                            correct: false
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        questionAnswered(item) {
            if (item.correct) {
                this.questionCorrect++,
                    console.log(this.questionCorrect)
            }
            this.questionsAnswered++,
                console.log(this.questionsAnswered)
        },
        quizReset() {
            this.questionsAnswered = 0,
                this.questionCorrect = 0
        }
    }
}
</script> 
<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
}

.quiz__container {
    padding: 0 5rem;
}

.quiz__heading {
    font-family: 'VT323', monospace;
    font-size: 4rem;
    /* text-shadow: 3px 3px 1px #ff0202, -3px -3px 1px #56ebff; */
    text-shadow: -3px -3px 1px #f2eeaa;
    color: #e3a0ac;
    -webkit-text-stroke: 1px #10151C;
    margin-bottom: 3rem;
}
</style>