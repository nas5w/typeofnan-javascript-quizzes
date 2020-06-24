import { getPersistedAnswer } from "./persistAnswers";

export const filterPosts = (posts = [], filterValue) => {

    switch (filterValue) {
        case 'All':
            return posts;
        case 'Correct':
            return posts.filter(({ node }) => {
                const title =
                    node.frontmatter.title || node.fields.slug;
                const {
                    selectedAnswer,
                    correctAnswer
                } = getPersistedAnswer(title);
                return selectedAnswer !== null && selectedAnswer === correctAnswer;
            });
        case 'Incorrect':
            return posts.filter(({ node }) => {
                const title =
                    node.frontmatter.title || node.fields.slug;
                const {
                    selectedAnswer,
                    correctAnswer
                } = getPersistedAnswer(title);
                return selectedAnswer !== null && selectedAnswer !== correctAnswer;
            });
        case 'Completed':
            return posts.filter(({ node }) => {
                const title =
                    node.frontmatter.title || node.fields.slug;
                const {
                    selectedAnswer,
                    correctAnswer
                } = getPersistedAnswer(title);
                console.log(selectedAnswer)
                return selectedAnswer !== null;
            });
        case 'Incomplete':
            return posts.filter(({ node }) => {
                const title =
                    node.frontmatter.title || node.fields.slug;
                const {
                    selectedAnswer,
                    correctAnswer
                } = getPersistedAnswer(title);
                return selectedAnswer === null;
            });
        default:
            return posts;
    }

};