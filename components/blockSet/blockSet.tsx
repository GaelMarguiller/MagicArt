import React from 'react'
import Link from 'next/link'

type blockSetProps = {
    blockName: string,
    iconSvgUri: string,
    id: string
}

export const BlockSet = ({blockName, iconSvgUri, id} :blockSetProps) => {
    return (
        <div className='text-center mt-2 mb-2'>
            <Link href={`/set/${id}`}>
                <a>{blockName}</a>
            </Link>
            <div className='md:w-1/4 text-center m-0 m-auto'>
                <Link href={`/set/${id}`}>
                    <img src={iconSvgUri} alt='img sets'/>
                </Link>
            </div>
        </div>
    )
}