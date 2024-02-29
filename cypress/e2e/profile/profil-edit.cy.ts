let profileId = '';

describe('Профиль', () => {
    describe('Пользователь заходит на страницу профиля ', () => {
        beforeEach(() => {
            cy.login().then(data => {
                profileId = data.id;
                cy.visit(`/profile/${data.id}`);
            });
        });
        afterEach(() => {
            cy.resetProfile(profileId);
        });
        it('Профиль успешно открывается ', () => {
            cy.getByTestId('ProfileCard.firstname').should(
                'have.value',
                'test',
            );
        });
        it('Редактирование профиля', () => {
            const newName = 'newName';
            const newLastName = 'newLastName';
            cy.updateProfile(newName, newLastName);
            cy.getByTestId('ProfileCard.firstname').should(
                'have.value',
                newName,
            );
            cy.getByTestId('ProfileCard.lastname').should(
                'have.value',
                newLastName,
            );
        });
    });
});
