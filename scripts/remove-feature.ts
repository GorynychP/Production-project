import { Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});
const removeFeatureName = process.argv[2]; // название фичи  isArticleEnabled
const featureState = process.argv[3]; //  off/on

if (!removeFeatureName) {
    throw new Error('Укажите называние флага');
}

if (!featureState) {
    throw new Error('Укажите состояния фичи (on или off )');
}
if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное значение состояния фичи (on или off )');
}

// project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild(child => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach(sourceFile => {
    sourceFile.forEachDescendant(node => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );
            if (!objectOptions) return;
            const featureNameProperty = objectOptions?.getProperty('name');

            const onFunctionProperty = objectOptions?.getProperty('on');
            const offFunctionProperty = objectOptions?.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removeFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }
            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
