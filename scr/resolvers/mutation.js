import { v4 } from 'uuid';

const Mutation = {
    addLocalization: (_, args, context) => {
        const { newLocalization } = args;
        const { localizations } = context;
        console.log(newLocalization);
        newLocalization.id = v4();
        localizations.push(newLocalization);
        return newLocalization;
    },
    deleteLocalization: (_, args, context) => {
        const { id } = args; 
        const { localizations } = context;
        const localizationIndex = localizations.findIndex(loc => loc.id === id);
        console.log("LocalizationId " + localizationIndex);
        // Se a localization não for encontrada, retornar um erro
        if (localizationIndex === -1) {
            throw new Error("Localization not found");
        }
        const deletedLocalization = localizations.splice(localizationIndex, 1)[0];
        return deletedLocalization.id;
    },
    updateLocalization: (_, args, context) => {
        const { newLocalization } = args;
        const { localizations } = context;
        const localizationIndex = localizations.findIndex(loc => loc.id === newLocalization.id);
        console.log("LocalizationId " + localizationIndex);
        // Se a localization não for encontrada, retornar um erro
        if (localizationIndex === -1) {
            throw new Error("Localization not found");
        }
        localizations.splice(localizationIndex, 1); //remove a Localization
        const editedLocalization = localizations.push(newLocalization); // adiciona a Localization atualizada
        return editedLocalization;
    }
};

export default Mutation;