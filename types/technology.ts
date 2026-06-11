export type TechnologyItem = {
    name: string;
    icon: string;
    featured?: boolean;
};

export type TechnologieItem = TechnologyItem;

export type Technologies = {
    frontend: TechnologyItem[];
    backend: TechnologyItem[];
    database: TechnologyItem[];
    tools: TechnologyItem[];
};

export type TechnologieCategories = Technologies;
