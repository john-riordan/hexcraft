import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { buildItemsData } from '../helpers/buildItemsData';
import { DDRAGON_PATCH } from '../helpers/constants';

import { PATCHES } from '../data/patches';

import { StateContext } from '../StateContext';

import ItemDetails from '../Components/ItemDetails/';
import ItemGrid from '../Components/ItemGrid/';
import StatFilters from '../Components/StatFilters/';
import Search from '../Components/Search/';
import Inventory from '../Components/Inventory/';
import Modal from '../Components/Modal/';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { patch, itemsData, latestPatchChanges } = props;

  const router = useRouter();
  const purchaseRef = useRef(null);
  const sellRef = useRef(null);
  const cantRef = useRef(null);

  const [state, setState] = useState({
    patch,
    itemsData,
    latestPatchChanges,
    tab: 'all',
    stat: null,
    desc: true,
    selectedItem: null,
    search: '',
    searchOpen: false,
    inventoryCost: 0,
    modal: null,
    soundPurchase: purchaseRef,
    soundSell: sellRef,
    soundCant: cantRef,
  });

  const inventory = router.query?.i ? router.query?.i?.split(',') : [];

  const items = inventory.map((item) => itemsData.items[item]);
  const cost = items.reduce((acc, curr) => acc + curr.priceTotal, 0);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      inventoryCost: cost,
    }));
  }, [cost]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.desc, state.tab, state.stat]);

  return (
    <>
      <StateContext.Provider value={{ state, setState }}>
        <div className={styles.container}>
          <Head>
            <script
              script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-N7F0JT23B2'
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
            <title>LoL Shop - League of Legends Season 13 Item Changes</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='darkreader-lock' />
            <meta
              name='Description'
              content='League of Legends Season 2023 / Season 13 Item Changes'
            />
            <meta
              property='og:title'
              content='LoL Shop - League of Legends Season 13 Item Changes'
            />
            <meta
              property='og:description'
              content='Season 2023 Item changes'
            />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://lolshop.gg' />
            <meta
              property='og:image'
              content='https://lolshop.gg/lolshop.jpg'
            />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='627' />
          </Head>

          <div className={styles.main}>
            <StatFilters className={styles.filters} />
            <main className={styles.center}>
              <Search />
              <ItemGrid className={styles.grid} />
            </main>
            {state.selectedItem && (
              <div
                className={styles.detailsOverlay}
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    selectedItem: null,
                  }))
                }
              />
            )}
            <ItemDetails className={styles.details} />
          </div>
          {inventory?.length ? <Inventory /> : null}
        </div>
        {state.modal && <Modal />}
        <audio controls src='/purchase.mp3' ref={purchaseRef} />
        <audio controls src='/sell.mp3' ref={sellRef} />
        <audio controls src='/cant.mp3' ref={cantRef} />
      </StateContext.Provider>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // CDragon data - PBE
  const cdragonReq = await fetch(
    'http://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json'
  );
  const cdragonItems = await cdragonReq.json();

  // DDragon data
  const ddragonPatchesReq = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  );
  const ddragonPatchesRes = await ddragonPatchesReq.json();
  const ddragonPatchesLatest = ddragonPatchesRes?.length
    ? ddragonPatchesRes[0]
    : DDRAGON_PATCH;

  const ddragonItemsReq = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${ddragonPatchesLatest}/data/en_US/item.json`
  );
  const ddragonItems = await ddragonItemsReq.json();

  const ddragonItemsMap = Object.entries(ddragonItems.data || {}).reduce(
    (acc, curr) => {
      const [id, info] = curr;
      acc[id] = {
        ...info,
        id: Number(id),
      };
      return acc;
    },
    {}
  );
  const cdragonItemsMap = cdragonItems.reduce((acc, curr) => {
    acc[curr.id] = {
      ...curr,
      to: curr.into,
      tags: curr.categories || [],
      stats: ddragonItemsMap[curr.id]?.stats ?? {},
      gold: {
        total: curr.priceTotal,
      },
    };
    return acc;
  }, {});

  const latestPatchChanges = PATCHES[ddragonPatchesLatest];

  return {
    props: {
      patch: ddragonPatchesLatest,
      itemsData: buildItemsData({
        ddragonItemsMap,
        cdragonItemsMap,
        patchChanges: latestPatchChanges,
      }),
    },
  };
}
