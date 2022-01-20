type BlockCard = {
    name: string,
    imgArtCrop?: string[],
    colors: string,
    artist: string
}

export const BlockCard = ({name, imgArtCrop, artist}: BlockCard) => {
    return (
        <div className='text-center m-4'>
            <div className='text-center mt-2 mb-2'>
                <p className='text-white'>{name}</p>
            </div>
            <div className='text-center border-8 rounded-lg m-0 m-auto'>
                {
                    imgArtCrop.map(cardImg => (
                        <img src={cardImg} alt={name}/>
                    ))
                }
            </div>
            <p className='text-white'>{artist}</p>
        </div>
    )
}