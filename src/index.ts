// Importing necessary modules
import { Uploader } from "@irys/upload"; // Irys SDK for uploading data
import { Starknet } from "@irys/upload-starknet"; // Starknet integration with Irys
import "dotenv/config"; // Loads environment variables from a .env file

// User's Starknet address (public key)
const userAddress = "ENTER STARKNET WALLET ADDRESS";

// Private key loaded from environment variables (NEVER hardcode private keys in code)
const privateKey = process.env.PRIVATE_KEY;

// Starknet RPC URL (for interacting with the blockchain)
const rpcUrl = "https://starknet-sepolia.public.blastapi.io";

/**
 * Function to initialize the Irys Uploader with Starknet integration.
 * @returns {Promise<Uploader>} - Returns an instance of the Irys Uploader.
 */
const getIrysUploader = async () => {
  // Create an uploader instance for Starknet with userAddress
  const irysUploader = await Uploader(Starknet(userAddress))
    .withWallet(privateKey) // Attach the user's private key for authentication
    .devnet() // Use devnet (testnet environment)
    .withRpc(rpcUrl); // Set the RPC URL for interacting with Starknet

  return irysUploader;
};

/**
 * Function to upload data to Irys
 * This function uploads a text string and an image file.
 */
const uploadData = async () => {
  // Get the Irys uploader instance
  const irysUploader = await getIrysUploader();

  // The text string to be uploaded
  const dataToUpload = "Hello from Starknet!";

  try {
    // // Upload text data to Irys
    const receipt = await irysUploader.upload(dataToUpload);
    console.log(`Data uploaded ===> https://gateway.irys.xyz/${receipt.id}`);

    // // Path to the image file to be uploaded
    // const image = "./images/pfp.jpg";

    // // Tags to add metadata to the uploaded image
    // const tags = [{name: "coloniz",value: "PFP"},{ name: "Content-Type", value: "image/png" }];

    // // Upload image file with metadata tags
    // const receipt2 = await irysUploader.uploadFile(image, { tags: tags });
    // console.log(`Data uploaded ===> https://gateway.irys.xyz/${receipt2.id}`);

    // Upload folder to irys
    // Uploads a group of files to Irys in a single transaction.
    // const folder = "./images";
    // const receipt3 = await irysUploader.uploadFolder("./" + folder, {
    //   indexFile: "a.png", // Optional index file (file the user will load when accessing the manifest)
    //   batchSize: 4, // Number of items to upload at once
    //   keepDeleted: false, // Whether to keep now deleted items from previous uploads
    // });
    // console.log(`Files uploaded. Manifest ID ${receipt3}`);
    // console.log(`Data uploaded ===> https://gateway.irys.xyz/${receipt3?.id}`);
  } catch (error) {
    console.log(error); // Log any errors that occur during upload
  }
};

/**
 * Function to query transaction data from Irys
 * It searches for specific transactions by their IDs.
 */
const queryData = async () => {
  // Get the Irys uploader instance
  const irysUploader = await getIrysUploader();

  // Query transaction data
  const output = irysUploader
    .query({ url: "https://devnet.irys.xyz/graphql" }) // Set the GraphQL query endpoint
    .search("irys:transactions") // Search within the "transactions" table
    .ids([
      "3Lt6qPMteJmmh7z184kziSwCjUDpB83tQjRuaezZu97j",
      "6HfJjfwHTEmnraxoeCWuRC1jC1DGc1x9i2ZdjVPMdJFw",
    ]); // Filter by specific transaction IDs

  console.log("output:", output); // Log the output (results of the query)
};

// Call the upload function to execute data upload
uploadData();

// Uncomment the below line if you want to execute the query function
// queryData();
