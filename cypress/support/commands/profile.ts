import { selectByTestId } from '../../helpers/selectByTestId';

export const updateProfile = (newName: string, newLastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(newName);
    cy.getByTestId('ProfileCard.lastname').clear().type(newLastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};
export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:5000/profile/${profileId}`,
        headers: { Authorization: 'auth' },
        body: {
            id: '3',
            first: 'test',
            lastname: 'test',
            age: 40,
            currency: 'EUR',
            country: 'Turkey',
            city: 'Istambul',
            username: 'testuser',
            avatar: 'https://pics.craiyon.com/2023-08-06/7bc5b0ccdd4d4576a03ecd52815ae1bc.webp',
        },
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                newName: string,
                newLastname: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
