import {
  useAddress,
  useContract,
  useOwnedNFTs,
  Web3Button,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import NFTCard from "../components/nft-card";

export default function NFTs() {
  const address = useAddress();

  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: ownedNFTs, isLoading: ownedNFTsLoading } = useOwnedNFTs(
    contract,
    address
  );

  return (
    <div className={styles.container}>
      <h1>NFTs</h1>
      <div className={styles.nftRow}>
        {ownedNFTsLoading ? (
          <p>Loading...</p>
        ) : ownedNFTs && ownedNFTs.length > 0 ? (
          ownedNFTs.map((nft) => (
            <div key={nft.metadata.id} className={styles.nftCard}>
              <NFTCard nft={nft} quantity={parseInt(nft.quantityOwned!)} />
            </div>
          ))
        ) : (
          <p>No NFTs owned</p>
        )}
      </div>
    </div>
  );
}
