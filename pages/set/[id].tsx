import Layout from '../../components/layout';
import {getAllCardsSet, getAllSetIds} from '../../lib/api';
import {SetsInterface} from '../../lib/interface/setsInterface';
import {ROOT_URL} from '../../lib/constant/apiUrl';
import {BlockCard} from '../../components/blockCard/blockCard';

export default function SetCard({ allSetsData }) {
    return (
        <Layout>
            <section className='max-w-7xl grid grid-cols-1 text-center md:grid-cols-4 m-0 m-auto'>
                { allSetsData.map((setData) => (
                    <BlockCard
                        key={setData.id}
                        name={ setData.name }
                        artist={ setData.artist }
                        colors={ setData.colors }
                        imgArtCrop={ setData.imgArtCrop }
                    />
                    )
                )}
            </section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllSetIds(ROOT_URL)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const allSetsData: SetsInterface[] = await getAllCardsSet(params.id);

    return {
        props: {
            allSetsData
        }
    }
}