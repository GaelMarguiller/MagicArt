import Link from 'next/link'

export const Header = () => {
    return (
        <header className='mx-auto px-4 sm:px-6 bg-headerFooterBlack'>
            <nav className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                <Link href='/'>
                    <a className='-m-3 p-3 flex items-start rounded-lg text-textColorHeader'>Accueil</a>
                </Link>
                <Link href='/credit'>
                    <a className='-m-3 p-3 flex items-start rounded-lg text-textColorHeader'>Credit</a>
                </Link>
            </nav>
        </header>
    )
};