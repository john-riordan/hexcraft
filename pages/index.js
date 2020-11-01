import { useState } from 'react';
import Head from 'next/head';

import { StateContext } from '../StateContext';

import ItemDetails from '../Components/ItemDetails/';
import ItemGrid from '../Components/ItemGrid/';
import StatFilters from '../Components/StatFilters/';
import Tabs from '../Components/Tabs/';

import styles from '../styles/Home.module.css';

export default function Home({ allItemsData }) {
  const [state, setState] = useState({
    itemsData: allItemsData,
    tab: 'All Items',
    stat: null,
    order: 'desc',
  });

  console.log(state);

  return (
    <StateContext.Provider value={{ state, setState }}>
      <div className={styles.container}>
        <Head>
          <title>Hexcraft</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Tabs />
        <main className={styles.main}>
          <StatFilters className={styles.filters} />
          <ItemGrid className={styles.grid} />
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

  const usableItems = items.filter(
    (item) => item.inStore && item.mapStringIdInclusions.includes('SR')
  );

  const mythics = usableItems
    .filter((item) => item.description.includes('Mythic Passive:'))
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

  const legendaries = usableItems
    .filter(
      (item) =>
        item.priceTotal > 2000 && !item.description.includes('Mythic Passive:')
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

  const epics = usableItems
    .filter(
      (item) =>
        item.priceTotal < 2000 &&
        item.priceTotal > 500 &&
        item.from.length &&
        !item.isEnchantment &&
        !item.categories.includes('Boots')
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

  const basics = usableItems
    .filter(
      (item) =>
        item.priceTotal &&
        !item.from.length &&
        !item.categories.includes('Boots') &&
        !item.requiredBuffCurrencyCost
    )
    .map((item) => ({
      ...item,
      iconPath: item.iconPath.split('/').slice(-1)[0].toLowerCase(),
    }))
    .reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

  const allItemsData = {
    mythics,
    legendaries,
    epics,
    basics,
  };

  // By returning { props: allItemsData }, the Blog component
  // will receive `allItemsData` as a prop at build time
  return {
    props: {
      allItemsData,
    },
  };
}
