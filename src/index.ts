import { Uploader } from "@irys/upload";
import { Starknet } from "@irys/upload-starknet-node";
import 'dotenv/config'

const userAddress = "0x02d904Aedff382C0D68F22444B525146ec5eA2926e271fC411845e8D9E751DE1";
const privateKey = process.env.PRIVATE_KEY;
const rpcUrl = "https://starknet-sepolia.public.blastapi.io";

const getIrysUploader = async() => {
  const irysUploader = await Uploader(Starknet(userAddress)).withWallet(privateKey).devnet().withRpc(rpcUrl);
  return irysUploader;
}

const uploadData = async() => {
  const irysUploader = await getIrysUploader();
  const dataToUpload = "Hello world";

  try {
    // upload text
    const receipt = await irysUploader.upload(dataToUpload);
    console.log(`Data uploaded ===> https://gateway.irys.xyz/${receipt.id}`);

    // upload image
    const image = "./images/pfp.jpg";
    const tags = [{ name: "coloniz", value: "PFP" }];
    const receipt2 = await irysUploader.uploadFile(image, { tags: tags });
    console.log(`Data uploaded ===> https://gateway.irys.xyz/${receipt2.id}`);
  }
  catch(error) {
    console.log(error);
  }
}

const queryData = async() => {
  const irysUploader = await getIrysUploader();

  const output = irysUploader
    .query({url:"https://devnet.irys.xyz/graphql"})
    .search("irys:transactions")
    .ids(["3Lt6qPMteJmmh7z184kziSwCjUDpB83tQjRuaezZu97j", "6HfJjfwHTEmnraxoeCWuRC1jC1DGc1x9i2ZdjVPMdJFw"]);

  console.log("output:", output)
}

uploadData();
// queryData();
