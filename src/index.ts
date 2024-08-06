import { NodeIrys } from "@irys/sdk";
import Query from "@irys/query";
import {
  BigNumberish,
  RpcProvider,
  constants,
  TransactionReceipt,
  GetTransactionReceiptResponse,
  TypedData,
  Signer,
  Account,
  Signature,
  stark,
  ArraySignatureType,
} from "starknet";

// interface Transaction {
// 	transaction_hash: string;
// 	type: string;
// 	version: string;
// 	sender_address?: string; // Optional property
//   }

//   type ExtendedResponse = GetTransactionReceiptResponse & {
// 	myNewProperty?: string;
//   };

// const getTx = async(tx:BigNumberish) => {
// 	const provider = new RpcProvider({ nodeUrl: "https://starknet-mainnet.blastapi.io/743189cd-c0ce-463f-94c0-cfb2cc572e92/rpc/v0_7" });
// 	const transaction:Transaction = await provider.getTransaction(tx)
// 	// const response2 = await provider.getTransactionByHash(tx)
// 	const receipt:ExtendedResponse = await provider.getTransactionReceipt(tx)
// 	console.log('get-transaction:', transaction);

// 	// console.log('get-transaction-by-hash', response2)
// 	console.log('receipt:', receipt.value );
// }

const PRIVATE_KEY = "";
const account0= "";
const getIrys = async () => {
  const providerUrl =
    "https://eth-mainnet.g.alchemy.com/v2/UzdAPr86JL10t8A8Dj-UKJTob1LY1woY";
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
  let data = {
    signature:
      "0xcb5acf768b01641581db8d1919833c0029be16829c7ca59c3c4ca92b927502205d85f1c7d516d91f24b9364f28358047314b5a0081c8e1290740466203f531621c",
    dataAvailabilityId: "6be78ba3-b09d-4947-bf66-608ed3e0965d",
    type: "POST_CREATED",
    timestampProofs: {
      type: "BUNDLR",
      hashPrefix: "1",
      response: {
        id: "vQyGuAqHkEENtmMYaMRy2P0xxtxiPFHaJZFsblHaiqM",
        timestamp: 1721999958083,
        version: "1.0.0",
        public:
          "mfzJrSnOWCzwwV9Vndk0dKPycxCJHwSrUVMZn_LBWVfl6hn4-YgzvtOQPZIXyudaTUamvQW-UKMg27by3-ytNrUYwjd5FNSnXrV3lKISbzjiD_V0GRJbQn9Z4_7TwPYamgZIzhZkmvqrHMjqaHLtdPd5I-cvxhcbdP6jCfgYY7OGiB6QOg47_AQIjdEGuXiT8TethpvdOQkmpssrVkCUv3x92rKsEi7a4pamnlTe11Ako_TTPfFQIULqivUu-w2AaJiydwUJ3hvbnWhPxjUujZ8i7wGER6BDy6U4bwMyelNMp3fczwZ37HhiKPvQBgejTDDxALXXU3y3jkAK0TWPPEB7ngNzn3htnWvjPIisILnjgY1a4uC8AM2kDrJJBDiwRRE-NWqfxRkwvQeo5XjNdD4tQDuU0Qv5MqZMceZS_DgA7zfB9Kud7vg2n30xVtT6_DonVkSraX8Fi0ddeiKNyS4s7VRx-1ux-y89eUWg0NPnPq75txnrPce_BEceBCgJwjZbfNSLUDwp5lYGC8Eks-LC8cDc6uCG8UnpCKndfFUYSpAG2m7viPhnHf9s7ip3rL3FKt2rOHyd1G_QFon0wjW1kDvczpOwcqb6KZVKbMfj0wx1HNLn3eGCtaV5iyLidsXQxlkbFXGJFsfN3IZEWlZIsjp-2QgzakJWtC_wHds",
        signature:
          "k1mQl9L52PcCs83ZZeFkRpJ7hcBue4GVdDNIvWHjWXBEEj-ssONxS677DazZi5_L1cgmnjCF729tsPf0JysW29aIKkZhYGrbs9djucXSHglHyFa45_HHLiaC9j0TYK_ysbok5JA2CqILCFmnyrOQlkT85tjrN0yYmoSfOY-cPdbH0yuUy5tE5adQZfyPospkUUX1J_7xbzArNbuIfv8SSvVNBxI8DDM5hg9A39A6T5CgkWSySAPUZ9LcfLMsjVDLnDoA6M4I1YVQjepRbS6wT9PuWt95yTQoZ3ZvGmRqlSZapFvp06EFWvS4gwTUo93RrWUycLk2heUL0P8phAFvKsaysZ8DRw24PNEBLdKYkQFZXROboccjNmJLvaHo2HCx6O6hj1SLcPzouyMUo6kWgNuL2dKwd2K0RkvAyROQQBxenDUXlzMqujAu3dXEBMChbVbc7vG-Z_AmLXBlAjJmkgrI_8hcefOto2ik_benbwK_HIH8kfann37OhtrWEBKGwuiSYQ6wbiGnv_K3WXErfV8aczeIKeP4PoqdatrAjhdcSNpw9zE1xJaPzq-ubrsPAcTLNZsG1B7dOYSe3OiLakgPN3JCndDzl2CipL92L-o0sUzFRg2BjvSy4rwjJa1-XPnHfUb5PN3rnsS6ZJBL_mPBexfanfbXi_tQGzQIEPw",
        deadlineHeight: 1476964,
        block: 1476964,
        validatorSignatures: [],
      },
    },
    chainProofs: {
      thisPublication: {
        signature:
          "0xa4453a5909681b89385224ef55018e4da8e75bb2dbb783ce30f316ed8100f6360977e0801f7fee442097e76b160b24d036cdb4b47dd80661df726f65430ae9781c",
        signedByDelegate: true,
        signatureDeadline: 1721999956,
        typedData: [Object],
        blockHash:
          "0xfb25cffc38018be39c610f7526ea0ff42b86cc73c40226ae5c4fce439f73b45d",
        blockNumber: 59833003,
        blockTimestamp: 1721999956,
      },
      pointer: null,
    },
    publicationId: "0x048b94-0x04-DA-6be78ba3",
    event: {
      postParams: {
        profileId: "0x048b94",
        contentURI:
          "https://backend.0xppl.com/api/0xppl/fetch_lens_metadata?id=1272",
        actionModules: [],
        actionModulesInitDatas: [],
        referenceModule: "0x0000000000000000000000000000000000000000",
        referenceModuleInitData: "0x",
      },
      pubId: "0x04",
      actionModulesInitReturnDatas: [],
      referenceModuleInitReturnData: "0x",
      transactionExecutor: "0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C",
      timestamp: 1721999956,
    },
  };
  const irys = await getIrys();
  // const dataToUpload = "Hello world";
  try {
    const receipt = await irys.upload(JSON.stringify(data));
    console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    console.log("id:", receipt.id);
  } catch (e) {
    console.log("Error uploading data ", e);
  }
};

const fetchQuery = async () => {
  const myQuery = new Query({ network: "mainnet" });
  const results = await myQuery
    .search("irys:transactions")
    .ids([
      "asWT-K5zWn7lKJjKnqIWhOR8CIwpGjdj49R0S1xnt_s",
      "f_gemUVDuxRQcIUR9p6VLs89l3DfebNJswXcABOPLb4",
      "_E1nMsJnRh4OfkFSLIlZ-ppMtUu0VT1IsDRcnkL1I9Q",
      "-WK0Nr7-49H19z1dx7TkgSaMBqchMadCCcZ3fd1LU3U",
      "Fg2zR4RXaMvzwEtW9Xg8WPaBi24O4UV9SS4eh-qFlr0",
      "Ak0H9J3YyuIkIvAS0en04nTQayskOBq87AwqdEjKGOs",
    ]);
  console.log({ "result:": results, length: results.length });
};

const fetchData = async (id: string) => {
  let data = await fetch(`https://gateway.irys.xyz/${id}`);
  console.log("response:", await data.json());
};

import {
  ec,
  hash,
  num,
  json,
  Contract,
  WeierstrassSignatureType,
  encode,
  typedData,
} from "starknet";
// const Sig = async() =>{
// const privateKey = '0x005d5c250b5c181684ae6d8ebfa0faeac3ad0c6f31a6c2f102a2fffddba00a05';
// const starknetPublicKey = await ec.starkCurve.getStarkKey(privateKey);
// const fullPublicKey = await encode.addHexPrefix(
//   encode.buf2hex(ec.starkCurve.getPublicKey(privateKey, false))
// );

// const message: BigNumberish[] = [1, 128, 18, 14];

// const msgHash = await hash.computeHashOnElements(message);
// const signature: WeierstrassSignatureType = await ec.starkCurve.sign(msgHash, privateKey);
// console.log('signature:', signature)
// console.log('public-length', {length:starknetPublicKey.length, pubKey: starknetPublicKey, fullPkey: fullPublicKey.length})
// }
// uploadData()
// fetchQuery()
// fetchData('WkyU0uJMlfjBSLRpI0PGvXYkb7xDbAJfvFv4xNVjk-U')
// getTx("0x028e7842714c294a4c14de17eb61e7432db0294e19b312f379eda5dd19a6f48c");

// Sig()

const messageStructure: TypedData = {
  types: {
    StarkNetDomain: [
      { name: "name", type: "felt" },
      { name: "chainId", type: "felt" },
      { name: "version", type: "felt" },
    ],
    Message: [{ name: "message", type: "felt" }],
  },
  primaryType: "Message",
  domain: {
    name: "MyDapp",
    chainId: "SN_MAIN",
    version: "0.0.1",
  },
  message: {
    message: "hello world!",
  },
};
let provider = new RpcProvider({
  nodeUrl:
    "https://starknet-mainnet.blastapi.io/743189cd-c0ce-463f-94c0-cfb2cc572e92/rpc/v0_7",
});
let account = new Account(
  provider,
  account0,
  PRIVATE_KEY
);

// signMessage
const Sig = async () => {
  let signature: Signature = (await account.signMessage(
    messageStructure
  )) as WeierstrassSignatureType;
  const r = BigInt(signature.r).toString(16).padStart(64, "0"); // Convert BigInt to hex string
  const s = BigInt(signature.s).toString(16).padStart(64, "0"); // Convert BigInt to hex string
  //    @ts-ignore
  const recovery = signature.recovery.toString(16).padStart(2, "0"); // Convert recovery to hex string

  const rArray = Uint8Array.from(Buffer.from(r, "hex"));
  const sArray = Uint8Array.from(Buffer.from(s, "hex"));
  const recoveryArray = Uint8Array.from(Buffer.from(recovery, "hex"));

  // Concatenate the arrays
  const result = new Uint8Array(
    rArray.length + sArray.length + recoveryArray.length
  );
  result.set(rArray);
  result.set(sArray, rArray.length);
  result.set(recoveryArray, rArray.length + sArray.length);

  return result;
};

interface Itype {
  chainId: string | number;
  message: Uint8Array;
}
let signature = Sig();
//verify
const verify = async (): Promise<boolean> => {
  const fullPubKey = encode.addHexPrefix(
    encode.buf2hex(ec.starkCurve.getPublicKey(PRIVATE_KEY, false))
  );
  const msgHash = typedData.getMessageHash(messageStructure, account.address);
  return ec.starkCurve.verify(
    (await signature).slice(0, -1),
    msgHash,
    fullPubKey
  );
};
verify();





// convert Uint8Array to  WeierstrassSignatureType
// function parseSignature(data: Uint8Array): WeierstrassSignatureType {
// 	// Define the length of each component in bytes
// 	const rLength = 32; // Length of r in bytes
// 	const sLength = 32; // Length of s in bytes
// 	const recoveryLength = 1; // Length of recovery in bytes
  
// 	// Extract each component
// 	const rArray = data.slice(0, rLength);
// 	const sArray = data.slice(rLength, rLength + sLength);
// 	const recoveryArray = data.slice(rLength + sLength);
  
// 	// Convert Uint8Array back to hex strings
// 	const rHex = Buffer.from(rArray).toString("hex");
// 	const sHex = Buffer.from(sArray).toString("hex");
// 	const recoveryHex = Buffer.from(recoveryArray).toString("hex");
  
// 	// Convert hex strings to BigInt and number
// 	const r = BigInt("0x" + rHex);
// 	const s = BigInt("0x" + sHex);
// 	const recovery = parseInt(recoveryHex, 16);
  
// 	return { r, s, recovery } as WeierstrassSignatureType;
//   }