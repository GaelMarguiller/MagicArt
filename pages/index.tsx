import Layout from '../components/layout';
import { Header } from '../components/header';
import { BlockSet } from '../components/blockSet/blockSet';
import {getAllSets} from '../lib/api';
import {ROOT_URL} from '../lib/constant/apiUrl';
import {SetsInterface} from '../lib/interface/setsInterface';


export default function Home({allSetsData}) {
    return (
        <Layout>
            <Header />
            <section className='max-w-7xl grid grid-cols-1 text-center md:grid-cols-4 m-0 m-auto'>
                { allSetsData.map((setData) => (
                    <BlockSet blockName={setData.name} iconSvgUri={setData.iconSvgUri} key={setData.id}/>
                    )
                )}
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allSetsData: SetsInterface[] = await getAllSets(ROOT_URL);

    return {
        props: {
            allSetsData
        }
    }
}