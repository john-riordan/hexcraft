import { useContext } from "react";
import posthog from "posthog-js";

import { StateContext } from "../../StateContext";
import styles from "./Tabs.module.css";

import Icon from "../Icon/";

const TABS = [
  { key: "all", name: "All Items", icon: "grid" },
  { key: "fighter", name: "Fighter", icon: "axe" },
  { key: "marksman", name: "Marksman", icon: "bow" },
  { key: "assassin", name: "Assassin", icon: "knife" },
  { key: "mage", name: "Mage", icon: "book" },
  { key: "tank", name: "Tank", icon: "shield" },
  { key: "support", name: "Support", icon: "support" },
];

const Tabs = () => {
  const { state, setState } = useContext(StateContext);

  const handleTabClick = (tab) => {
    if (state.tab === tab.key) {
      setState((prev) => ({ ...prev, tab: null }));
      return;
    }
    setState((prev) => ({ ...prev, tab: tab.key }));
    posthog.capture("tab_clicked", {
      tab_name: tab.name,
    });
  };

  return (
    <div className={styles.tabs}>
      {TABS.map((tab) => (
        <button
          key={tab.key}
          name={tab.name}
          onClick={() => handleTabClick(tab)}
          className={`${styles.tab} ${state.tab === tab.key && styles.active}`}
        >
          <div>
            <Icon icon={tab.icon} />
            <span>{tab.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
