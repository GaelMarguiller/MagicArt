export interface IArtsCardList {
    _id: string;
    artCart: IArtsCard[]
}

export interface IArtsCard {
    _id: string;
    color: string;
    name: string;
    lang: string;
    img: string;
    type: string
}

export const GET_ARTS_CARD_LIST = 'GET_ARTS_CARD_LIST';
export const GET_ARTS_CARD_LIST_SUCCEEDED = 'GET_ARTS_CARD_LIST_SUCCEEDED';
export const GET_ARTS_CARD_LIST_FAILED = 'GET_ARTS_CARD_LIST_FAILED';
export const GET_ART_CARD = 'GET_ARTS_CARD';
export const GET_ART_CARD_SUCCEEDED = 'GET_ARTS_CARD_SUCCEEDED';
export const GET_ART_CARD_FAILED = 'GET_ARTS_CARD_FAILED';

export interface IGetArtsCardListAction {
    type: typeof GET_ARTS_CARD_LIST,
    fetch: boolean;
}

export interface IGetArtsCardListSucceededAction {
    type: typeof GET_ARTS_CARD_LIST_SUCCEEDED,
    artsCard: IArtsCardList[]
}

export interface IGetArtsCardListFailedAction {
    type: typeof GET_ARTS_CARD_LIST_FAILED,
    error: string
}

export interface IGetArtsCardAction {
    type: typeof GET_ART_CARD,
    fetch: boolean;
}

export interface IGetArtsCardSucceededAction {
    type: typeof GET_ART_CARD_SUCCEEDED,
    artCard: IArtsCard[]
}

export interface IGetArtsCardFailedAction {
    type: typeof GET_ART_CARD_FAILED,
    error: string
}

