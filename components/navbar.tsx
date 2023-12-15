import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const address = useAddress();
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.navIcon}>
        <Image src={"/gomi.png"} alt="" width={46} height={46} />
        <p className={styles.navIconLabel}>さすてな</p>
      </Link>
      <Link href="/nfts" className={styles.navIcon}>
        <Image src={"/fabric_medal_yellow.png"} alt="" width={30} height={40} />
        <p className={styles.navIconLabel}>バッジ</p>
      </Link>
      <div className={styles.navIcon}>
        {address && (
          <ConnectWallet
            btnTitle="Login"
            detailsBtn={() => {
              return (
                <div>
                  <Image src={"/profile.png"} alt="" width={40} height={35} />
                  <p className={styles.navIconLabel}>プロフィール</p>
                </div>
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
