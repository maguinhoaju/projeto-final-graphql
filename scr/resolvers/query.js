const Query = {
    welcome: () => {
        return "Olá!";
    },
    localizations: (_, args, context) => {
        const { localizations } = context;
        return localizations;
    },
    localization: (_, args, context) => {
        const id = args.id;
        const nome = args.nome;
        const { localizations } = context;
        return localizations.filter(localization => {
            return localization.id == id;
        })[0];
    },
};

export default Query;