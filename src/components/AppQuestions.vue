<template>
    <div class="quiz__count" v-show="questionsAnswered < questions.length">
        {{ questionsAnswered + 1 }} out of {{ questions.length }}</div>
    <div class="quiz__progressbar" :style="{ width: (questionsAnswered + 1) * 100 / questions.length + '%' }"></div>
    <transition-group name="list" tag="ul" class="quiz__questions">
        <li class="quiz__question" v-for="(question, index) in questions" :key="question"
            v-show="questionsAnswered === index">
            <div class="quiz__title">
                {{ question.title }}
            </div>
            <ul class="quiz__items">
                <li class="quiz__item" v-for="answer in question.answer" :key="answer" @click="onQuestionAnswered(answer)">
                    {{ answer.answer }}
                </li>
            </ul>
        </li>
    </transition-group>
</template>
<script>
export default {
    emits: ['question-answered'],
    props: {
        questions: {
            required: true,
            type: Object
        },
        questionsAnswered: {
            required: true,
            type: Number
        }
    },
    methods: {
        onQuestionAnswered(item) {
            this.$emit('question-answered', item)
        }
    }
}
</script>
<style lang="scss">
.quiz {
    &__count {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    &__progressbar {
        height: 10px;
        background: linear-gradient(104deg, #F2EEAA 5.47%, #E3A0AC 93.97%);
        border-radius: 10px;
        margin-bottom: 3rem;
        transition: 0.9s ease all;
    }

    &__items,
    &__item,
    &__questions {
        padding: 0;
        list-style-type: none;
    }

    &__item {
        transition: 0.3s ease color;
    }

    &__item:hover {
        color: #e3a0ac;
    }

    &__question {
        border: 1px solid #fff;
        padding: 1rem;
    }

    &__title {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    &__item:not(:last-child) {
        margin-bottom: 0.4rem;
    }

}

.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease-in;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>