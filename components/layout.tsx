import {ReactNode} from 'react';
import {Header} from './header';

export interface LayoutProps  {
    children: ReactNode
    className?: string
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <div className='min-h-screen bg-blackBackground'>
                <Header />
                <main >{props.children}</main>
            </div>
        </>
    )
}