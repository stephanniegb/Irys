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
  ValidateType,
  TypedDataRevision,
  ec,
  encode,
  WeierstrassSignatureType,
  typedData,
} from "starknet";

const PRIVATE_KEY =
  "0x005d5c250b5c181684ae6d8ebfa0faeac3ad0c6f31a6c2f102a2fffddba00a05";
const account0 =
  "0x02F659cf8CCE41168B8c0A8BedCE468E33BE1B7bd26E920266C025Dc0F8FBD1b";
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

interface Itype {
  chainId: string;
  message: bigint[];
}

export const get_domain = ({
  chainId,
  message,
}: Itype): { typemessage: TypedData } => {
  const typemessage: TypedData = {
    domain: {
      name: "Arbundle",
      chainId: chainId,
      version: "1.0.2",
      revision: TypedDataRevision.ACTIVE,
    },
    message: {
      message,
    },
    primaryType: "Message",
    types: {
      Message: [{ name: "message", type: "felt*" }],
      StarknetDomain: [
        { name: "name", type: "string" },
        { name: "chainId", type: "felt" },
        { name: "version", type: "string" },
      ],
    },
  };
  return {
    typemessage,
  };
};


let provider = new RpcProvider({
  nodeUrl:
    "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/FPlKU5L3HXaOnKp2V-uhZ0Db51b5QcKz",
});
let account = new Account(provider, account0, PRIVATE_KEY);

// const Sign = async (message:Uint8Array, _opts?:any):Promise<Uint8Array> => {
//   let chainId = await account.getChainId();
//   let message_to_felt =  convertToFelt252(message)

//   let typedmessage = await get_domain({
//     chainId,
//     message: message_to_felt,
//   });
//   let signature: Signature = (await account.signMessage(
//     typedmessage.typemessage
//   )) as WeierstrassSignatureType;
//   const r = BigInt(signature.r).toString(16).padStart(64, "0"); // Convert BigInt to hex string
//   const s = BigInt(signature.s).toString(16).padStart(64, "0"); // Convert BigInt to hex string
//   //    @ts-ignore
//   const recovery = signature.recovery.toString(16).padStart(2, "0"); // Convert recovery to hex string

//   const rArray = Uint8Array.from(Buffer.from(r, "hex"));
//   const sArray = Uint8Array.from(Buffer.from(s, "hex"));
//   const recoveryArray = Uint8Array.from(Buffer.from(recovery, "hex"));

//   // Concatenate the arrays
//   const result = new Uint8Array(
//     rArray.length + sArray.length + recoveryArray.length
//   );
//   result.set(rArray);
//   result.set(sArray, rArray.length);
//   result.set(recoveryArray, rArray.length + sArray.length);
//   console.log('result1:==',result)
//   return result;
// };
const SignareWithAppendedChainID = async (message: Uint8Array, _opts?: any): Promise<Uint8Array> => {
  let chainId = await account.getChainId();
  let message_to_felt = convertToFelt252(message);

  let typedmessage = await get_domain({
    chainId,
    message: message_to_felt,
  });

  let signature: Signature = (await account.signMessage(
    typedmessage.typemessage
  )) as WeierstrassSignatureType;

  const r = BigInt(signature.r).toString(16).padStart(64, "0"); // Convert BigInt to hex string
  const s = BigInt(signature.s).toString(16).padStart(64, "0"); // Convert BigInt to hex string
  // @ts-ignore
  const recovery = signature.recovery.toString(16).padStart(2, "0"); // Convert recovery to hex string
  const c = BigInt(chainId).toString(16).padStart(8, "0");

  const rArray = Uint8Array.from(Buffer.from(r, "hex"));
  const sArray = Uint8Array.from(Buffer.from(s, "hex"));
  const recoveryArray = Uint8Array.from(Buffer.from(recovery, "hex"));
  // Assuming chainId is in hexadecimal format, and converting it to Uint8Array
  const chainIdArray = Uint8Array.from(Buffer.from(c, "hex"));

  // Concatenate the arrays including the chainIdArray
  const result = new Uint8Array(
    rArray.length + sArray.length + recoveryArray.length + chainIdArray.length
  );
  result.set(rArray);
  result.set(sArray, rArray.length);
  result.set(recoveryArray, rArray.length + sArray.length);
  result.set(
    chainIdArray,
    rArray.length + sArray.length + recoveryArray.length
  );
  return result;
};

let message = Buffer.from("Hello-world!");
let signature = SignareWithAppendedChainID(message);

const logSignature = async () => {
  console.log("signature:", await signature);
};
logSignature();


//verify
const verify = async (message: Uint8Array): Promise<boolean> => {
  let uint8ChainId = (await signature).slice(-10);
  const hexString =
    "0x" +
    Array.from(uint8ChainId)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  let message_to_string = convertToFelt252(message);

  let typemessage = await get_domain({
    chainId: hexString,
    message: message_to_string,
  });
  const fullPubKey = encode.addHexPrefix(
    encode.buf2hex(ec.starkCurve.getPublicKey(PRIVATE_KEY, false))
  );
  const msgHash = typedData.getMessageHash(
    typemessage.typemessage,
    account.address
  );
  let status = await ec.starkCurve.verify(
    (await signature).slice(0, 64),
    msgHash,
    fullPubKey
  );
  console.log("status==:", status);
  return status;
};
let verify_message = Buffer.from("Hello-world!");

verify(verify_message);

function convertToFelt252(data: Uint8Array): bigint[] {
  const felt252Array: bigint[] = [];
  const felt252Size = 31; // 252 bits / 8 bits per byte = 31.5 bytes (use 31 bytes for felt252)

  for (let i = 0; i < data.length; i += felt252Size) {
    let value = BigInt(0);
    for (let j = 0; j < felt252Size && i + j < data.length; j++) {
      value = (value << BigInt(8)) | BigInt(data[i + j]);
    }
    felt252Array.push(value);
  }

  return felt252Array;
}
