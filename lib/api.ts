import {SetsInterface} from './interface/setsInterface';

export async function getAllSets(url: string) {
    const res = await fetch(url);
    const json = await res.json();
    const filteredSetsList = json.data.filter(set =>
        set.set_type === 'core' || set.set_type === 'expansion'
    );
    const setsList: SetsInterface[] = filteredSetsList.map(set =>
        ({
            id: set.id,
            name: set.name,
            setType: set.set_type,
            setCode: set.code,
            searchUri: set.search_uri,
            iconSvgUri: set.icon_svg_uri
        })
    );

    return setsList;
}

export async function getAllSetIds(url) {
    const res = await fetch(url);
    const json = await res.json();
    const filteredSetsList = json.data.filter(set =>
        set.set_type === 'core' || set.set_type === 'expansion'
    );
    return filteredSetsList.map(set => {
            return {
                params: {
                    id: set.code
                }
            };
        }
    );
}


export async function getAllCardsSet(codeSet: string) {
    const res = await fetch(`https://api.scryfall.com/sets/${codeSet}`);
    const data = await res.json();

    const searchCardSetUri = data.search_uri;

    const request = await fetch(searchCardSetUri);
    const allCardsData = await request.json();

    return await allCardsData.data.map(allCardSet =>
        ({
            id: allCardSet.id,
            name: allCardSet.name,
            imgArtCrop: !allCardSet.image_uris || !allCardSet.image_uris.art_crop
                ? null
                : allCardSet.image_uris.art_crop,
            colors: allCardSet.color_identity,
            artist: allCardSet.artist
        })
    );
}