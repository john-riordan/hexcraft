import { useState } from 'react';
import Head from 'next/head';

import { buildItemsData } from '../helpers/buildItemsData';

import { StateContext } from '../StateContext';

import ItemDetails from '../Components/ItemDetails/';
import ItemGrid from '../Components/ItemGrid/';
import StatFilters from '../Components/StatFilters/';
import Tabs from '../Components/Tabs/';

import styles from '../styles/Home.module.css';

export default function Home({ itemsData }) {
  const [state, setState] = useState({
    itemsData: itemsData,
    tab: 'all',
    stat: null,
    order: 'desc',
    selectedItem: null,
  });

  console.log(state);

  return (
    <StateContext.Provider value={{ state, setState }}>
      <div className={styles.container}>
        <Head>
          <title>Hexcraft</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.left}>
            <Tabs />
            <div className={styles.leftPanels}>
              <StatFilters className={styles.filters} />
              <ItemGrid className={styles.grid} />
            </div>
          </div>
          <ItemDetails className={styles.details} />
        </main>
      </div>
    </StateContext.Provider>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json'
  );
  const items = await res.json();

  // By returning { props: itemsData }, the Blog component
  // will receive `itemsData` as a prop at build time
  return {
    props: {
      itemsData: buildItemsData(items),
    },
  };
}
