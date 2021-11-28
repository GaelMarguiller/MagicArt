import Link from 'next/link'

export const Header = () => {
    return (
        <header className='max-w-7xl mx-auto px-4 sm:px-6 bg-white'>
            <nav className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                <Link href='/'>
                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>Accueil</a>
                </Link>
                <Link href='/credit'>
                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>Credit</a>
                </Link>
            </nav>
        </header>
    )
};