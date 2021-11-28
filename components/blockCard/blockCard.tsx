type BlockCard = {
    name: string,
    imgArtCrop?: string,
    colors: string,
    artist: string
}

export const BlockCard = ({name, imgArtCrop, colors, artist}: BlockCard) => {
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{colors}</p>
            </div>
            <div>
                <img src={imgArtCrop} alt={name}/>
            </div>
            <p>{artist}</p>
        </div>
    )
}