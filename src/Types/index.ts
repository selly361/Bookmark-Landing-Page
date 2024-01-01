interface ITabInfo {
    title: string;
    text: string;
    illustration: string;
}

interface ITabData {
    index: number;
    idName: string;
    isChecked: boolean;
    labelText: string;
}

interface IFAQItem {
    id: number;
    question: string;
    answer: string;
}

export type { IFAQItem, ITabData, ITabInfo }