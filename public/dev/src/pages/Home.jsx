import logo from "../logo.svg";
import styles from "../App.module.css";

export default function Home() {
  return (
    <div class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
      <br />
      <br />

      <p>
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <a
        class={styles.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
    </div>
  );
}
