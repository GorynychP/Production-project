import { Article } from '../../../src/entities/Article/model/types/article';

const defaultArticle = {
    title: 'Testing',
    subtitle: 'Что нового в C# за 2024 год?',
    img:
        'https://assets-global.website-files.com/5aa7081220a301f2a3644f3b' +
        '/5c363b1f43fb7bbc94f002c3_Website_Reporting%20Language%20Icons_Csharp.png',
    views: 1022,
    userId: '1',
    createdAt: '16.01.2024',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: string) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:5000/articles`,
        headers: { Authorization: 'auth' },
        body: article ?? defaultArticle,
    }).then(res => res.body);
};
export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:5000/articles/${articleId}`,
        headers: { Authorization: 'auth' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
