<template>
    <div class="quiz-result">
        <div class="quiz-result__title" v-if="questionCorrect === questions.length">
            <span class="quiz-result__title-green">Congrats!</span> Your score is {{ questionCorrect }} out of {{
                questions.length }}
        </div>
        <div class="quiz-result__title" v-else-if="questionCorrect < questions.length && questionCorrect > 1">
            <span class="quiz-result__title-yellow">Well done!</span> Your score is {{ questionCorrect }} out of {{
                questions.length }}
        </div>
        <div class="quiz-result__title" v-else>
            <span class="quiz-result__title-red">You can do better!</span> Your score is {{ questionCorrect }} out of {{
                questions.length }}
        </div>
    </div>
    <button @click="onQuizReset" class="quiz-result__btn">RESET THE QUIZ</button>
</template>
<script>
export default {
    emits: ['quiz-reset'],
    props: {
        questionCorrect: {
            required: true,
            type: Number
        },
        questions: {
            required: true,
            type: Object
        }
    },
    methods: {
        onQuizReset(item) {
            this.$emit('quizReset', item)
        }
    }
}
</script>
<style>
.quiz-result {
    font-size: 2rem;
}

.quiz-result__title {
    margin-bottom: 3rem;
}

.quiz-result__title-green {
    color: #8ecacc;
}

.quiz-result__title-yellow {
    color: #f2eeaa;
}

.quiz-result__title-red {
    color: #ecbdcb;
}

.quiz-result__btn {
    padding: 1rem;
    font-weight: 700;
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: .3s ease all;
}

.quiz-result__btn:hover {
    box-shadow: 3px 3px 1px #e3a0ac, -3px -3px 1px #f2eeaa;
}
</style>