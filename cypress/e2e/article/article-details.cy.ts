let currentArticleId = '';

describe('Пользователь создает статью и переходит на нее', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.createArticle().then(article => {
                currentArticleId = article.id;
                cy.visit(`articles/${article.id}`);
            });
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Показ содержимое созданной статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Список рекомендаций отображается', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Оставляем комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test comment');
        cy.addComment('test comment 2');
        cy.getByTestId('CommentCard.Content').should('have.length', 2);
    });
    it('Ставим оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
