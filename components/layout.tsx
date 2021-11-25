import {ReactNode} from 'react';

export interface LayoutProps  {
    children: ReactNode
    className?: string
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <div className='min-h-screen'>
                <main>{props.children}</main>
            </div>
        </>
    )
}