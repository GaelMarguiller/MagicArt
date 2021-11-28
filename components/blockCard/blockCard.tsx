type BlockCard = {
    name: string,
    imgArtCrop?: string[],
    colors: string,
    artist: string
}

export const BlockCard = ({name, imgArtCrop, colors, artist}: BlockCard) => {
    return (
        <div className='text-center m-4'>
            <div className='text-center mt-2 mb-2'>
                <p>{name}</p>
                <p>{colors}</p>
            </div>
            <div className='text-center border-8 rounded-lg'>
                {
                    imgArtCrop.map(cardImg => (
                        <img src={cardImg} alt={name}/>
                    ))
                }
            </div>
            <p>{artist}</p>
        </div>
    )
}