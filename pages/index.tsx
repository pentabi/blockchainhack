import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";

import Image from "next/image";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: contractMetadata } = useContractMetadata(contract);

  return (
    <div className={styles.container}>
      {address ? (
        <div className={styles.nftClaim}>
          {/* First Image */}
          <div className={styles.imageContainer}>
            <Image src={"/shoku.png"} alt="" height={300} width={350} />
            <Web3Button
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={(contract) => contract.erc1155.claim(2, 1)}
              onSuccess={() => alert("NFT Claimed!")}
            >
              植林
            </Web3Button>
          </div>

          {/* Second Image */}
          <div className={styles.imageContainer}>
            <Image src={"/shoumi.png"} alt="" height={300} width={350} />
            <Web3Button
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={(contract) => contract.erc1155.claim(3, 1)}
              onSuccess={() => alert("NFT Claimed!")}
            >
              フードロス削減
            </Web3Button>
          </div>

          {/* Middle Image */}
          <div className={styles.imageContainer}>
            <Image src={"/gomi.png"} alt="" height={300} width={300} />
            <Web3Button
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={(contract) => contract.erc1155.claim(0, 1)}
              onSuccess={() => alert("NFT Claimed!")}
            >
              ゴミ拾い
            </Web3Button>
          </div>
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <ConnectWallet btnTitle="Login" />
        </div>
      )}
    </div>
  );
};

export default Home;
