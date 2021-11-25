import {SetsInterface} from "./interface/setsInterface";

export async function getAllSets(url: string) {
    const res = await fetch(url);
    const json = await res.json();
    const filteredSetsList = json.data.filter(set =>
        set.set_type === 'core' || set.set_type === 'expansion'
    )
    const setsList: SetsInterface[] = filteredSetsList.map(set =>
        ({
            id: set.id,
            name: set.name,
            setType: set.set_type,
            searchUri: set.search_uri,
            iconSvgUri: set.icon_svg_uri
        })
    )

    return setsList
}