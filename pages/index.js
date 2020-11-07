import { useState, useEffect } from 'react';
import Head from 'next/head';

import { buildItemsData } from '../helpers/buildItemsData';

import { StateContext } from '../StateContext';

import ItemDetails from '../Components/ItemDetails/';
import ItemGrid from '../Components/ItemGrid/';
import StatFilters from '../Components/StatFilters/';
import Search from '../Components/Search/';

import styles from '../styles/Home.module.css';

export default function Home({ itemsData }) {
  const [state, setState] = useState({
    itemsData: itemsData,
    tab: 'all',
    stat: null,
    desc: true,
    selectedItem: null,
    search: '',
    searchOpen: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.desc, state.tab, state.stat]);

  return (
    <StateContext.Provider value={{ state, setState }}>
      <div className={styles.container}>
        <Head>
          <script
            script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N7F0JT23B2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-N7F0JT23B2');
              `,
            }}
          />
          <title>LoL Shop - League of Legends Season 11 Item Changes</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Description"
            content="League of Legends Season 2021 / Season 11 Item Changes"
          />
          <meta
            property="og:title"
            content="LoL Shop - League of Legends Season 11 Item Changes"
          />
          <meta
            property="og:description"
            content="Season 2021 Pre-Season Item changes"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lolshop.gg" />
          <meta property="og:image" content="https://lolshop.gg/lolshop.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
        </Head>

        <div className={styles.main}>
          <StatFilters className={styles.filters} />
          <div className={styles.center}>
            <Search />
            <ItemGrid className={styles.grid} items={itemsData.all} />
          </div>
          {state.selectedItem && (
            <div
              className={styles.detailsOverlay}
              onClick={() =>
                setState((prev) => ({ ...prev, selectedItem: null }))
              }
            />
          )}
          <ItemDetails className={styles.details} />
        </div>
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
