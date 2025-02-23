import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import { buildItemsData } from "../helpers/buildItemsData";

import { PATCHES } from "../data/patches";

import { StateContext } from "../StateContext";

import ItemDetails from "../Components/ItemDetails/";
import ItemGrid from "../Components/ItemGrid/";
import StatFilters from "../Components/StatFilters/";
import Search from "../Components/Search/";
import Inventory from "../Components/Inventory/";
import Modal from "../Components/Modal/";

import styles from "../styles/Home.module.css";
import Disclaimer from "../Components/Disclaimer";

export default function Home(props) {
  const { patch, pbe, updatedAt, itemsData, latestPatchChanges } = props;

  const router = useRouter();
  const purchaseRef = useRef(null);
  const sellRef = useRef(null);
  const cantRef = useRef(null);

  const [state, setState] = useState({
    patch,
    pbe,
    updatedAt,
    itemsData,
    latestPatchChanges,
    tab: "all",
    stat: [],
    desc: true,
    selectedItem: null,
    search: "",
    searchOpen: false,
    inventoryCost: 0,
    modal: null,
    soundPurchase: purchaseRef,
    soundSell: sellRef,
    soundCant: cantRef,
  });

  const inventory = router.query?.i ? router.query?.i?.split(",") : [];

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
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-N7F0JT23B2"
              strategy="beforeInteractive"
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
            <title>League of Legends Items Season 2025 - LoL Shop</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://lolstatic-a.akamaihd.net" />
            <link rel="preconnect" href="https://raw.communitydragon.org" />
            <meta name="darkreader-lock" />
            <meta
              name="Description"
              content="League of Legends Season 2025 / Season 15 Items"
            />
            <meta
              property="og:title"
              content="LoL Shop - League of Legends Season 15 Items"
            />
            <meta
              property="og:description"
              content="List of all League of Legends items including the Season 2025 changes, buff, nerfs, and patch notes."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://lolshop.gg" />
            <meta
              property="og:image"
              content="https://lolshop.gg/lolshop.jpg"
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627" />
          </Head>

          <div className={styles.main}>
            <StatFilters className={styles.filters} />
            <main className={styles.center}>
              <Disclaimer />
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
        <audio controls src="/purchase.mp3" ref={purchaseRef} />
        <audio controls src="/sell.mp3" ref={sellRef} />
        <audio controls src="/cant.mp3" ref={cantRef} />
      </StateContext.Provider>
    </>
  );
}

const USE_PBE = false;

// This function gets called at build time
export async function getStaticProps() {
  // 1) Fetch latest patch(es)
  const ddragonPatchesReq = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const ddragonPatchesRes = await ddragonPatchesReq.json();
  const ddragonPatchesLatest = ddragonPatchesRes[0];
  const [major, minor] = ddragonPatchesLatest.split(".");

  // 2) DDragon data - Live
  const ddragonItemsReq = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${ddragonPatchesLatest}/data/en_US/item.json`
  );
  const ddragonItems = (await ddragonItemsReq.json()) || {};
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

  // 3) CDragon data - Live OR PBE
  const cdragonURL = USE_PBE
    ? `http://raw.communitydragon.org/${major}.${minor}/plugins/rcp-be-lol-game-data/global/default/v1/items.json`
    : `http://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/items.json`;
  const cdragonReq = await fetch(cdragonURL);
  const cdragonItems = (await cdragonReq.json()) || [];
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

  // 3) meraki data
  const merakiURL =
    "https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json";
  const merakiReq = await fetch(merakiURL);
  const merakiItems = (await merakiReq.json()) || {};
  const merakiItemsMap = Object.values(merakiItems).reduce((acc, curr) => {
    console.log(curr.name);

    const stats = Object.entries(curr.stats).reduce((acc, curr) => {
      const [key, stats] = curr;
      if (!stats.flat && !stats.percent) return acc;
      acc[key] = {
        flat: stats.flat,
        percent: stats.percent,
      };
      return acc;
    }, {});

    acc[curr.id] = {
      id: curr.id,
      stats,
    };
    return acc;
  }, {});

  const latestPatchChanges = PATCHES[ddragonPatchesLatest];

  return {
    revalidate: 6 * 60 * 60, // 6 hours
    props: {
      updatedAt: Date.now(),
      pbe: USE_PBE,
      patch: ddragonPatchesLatest,
      hasPatchChanges: !!latestPatchChanges,
      itemsData: buildItemsData({
        usePBE: USE_PBE,
        ddragonItemsMap,
        cdragonItemsMap,
        merakiItemsMap,
        patchChanges: latestPatchChanges,
      }),
    },
  };
}
