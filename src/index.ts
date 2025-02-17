import {Starknet} from "@irys/upload-starknet-node"

import { Uploader } from "@irys/upload";
import Query from "@irys/query";
// Example usage
const userAddress = "";
const privateKey = "";

const createUploaderInstance = async (address: string, privateKey: string) => {
  try {
    const starknetInstance = Starknet(address);

    // Create Uploader instance
    const client = await Uploader(starknetInstance)
      .withWallet(privateKey)
      .devnet()
      .withRpc("https://starknet-sepolia.public.blastapi.io");
// const post_data = await client.upload("Hello world")
// const upload_file = client.uploadFile()
const output = client.query({url:"https://devnet.irys.xyz/graphql"}).search("irys:transactions").ids(["49xGw7akCBCjmkpjoemdgKTXNyLEALPKFHT2KwF3YcYq", "CtfNife5BJEkLadkESRsfn6cVYGtF4EJn8tzm9HBBLyb", "Gmue9Dy1KNDEfDHAsRPSfK7ebEKiydQ6eFPqvGpQptnn"])
  console.log("output:", output)
      
  } catch (error) {
    console.error("Error creating uploader instance:", error);
  }
};



createUploaderInstance(userAddress, privateKey);
