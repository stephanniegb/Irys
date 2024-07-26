import {NodeIrys} from "@irys/sdk"
import Query from "@irys/query";


const PRIVATE_KEY = ""
const getIrys = async () => {
	const providerUrl = "https://eth-mainnet.g.alchemy.com/v2/UzdAPr86JL10t8A8Dj-UKJTob1LY1woY";
	const token = "ethereum";
 
	const irys = new NodeIrys({
		network: "mainnet", // "mainnet" || "devnet"
		token, // Token used for payment
		key: PRIVATE_KEY, // Private key
		config: { providerUrl }, // Optional provider URL, only required when using Devnet
	});
	return irys;
};

const uploadData = async () => {
	const irys = await getIrys();
	const dataToUpload = "Hello world";
	try {
		const receipt = await irys.upload(dataToUpload);
		console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
	} catch (e) {
		console.log("Error uploading data ", e);
	}
};

const fetchQuery = async() =>{
    const myQuery = new Query({ network: "mainnet" });
    const results = await myQuery.search("irys:transactions").ids(["asWT-K5zWn7lKJjKnqIWhOR8CIwpGjdj49R0S1xnt_s", "f_gemUVDuxRQcIUR9p6VLs89l3DfebNJswXcABOPLb4", "_E1nMsJnRh4OfkFSLIlZ-ppMtUu0VT1IsDRcnkL1I9Q"])
    console.log({'result:': results, length:results.length})
}


// uploadData()
fetchQuery()