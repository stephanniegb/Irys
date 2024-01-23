import * as Merkle from "starknet-merkle-tree";
import fs from "fs"
import { RpcProvider, Contract, Account, CallData, Uint256 } from "starknet";





// // address + quantity (u256.low + u256.high)
const airdrop: Merkle.InputForMerkle[] = [
    ['0x0143255712596fe3b1ebb6a4309230d2592034e6fe544e33acf2848fe7cf5fa7', '250', '0'],
    ['0x69b49c2cc8b16e80e86bfc5b0614a59aa8c9b601569c7b80dde04d3f3151b79', '256', '0'],
    ['0x3cad9a072d3cf29729ab2fad2e08972b8cfde01d4979083fb6d15e8e66f8ab1', '25', '0'],
];



// merkle contract class_hash on sepolia
const MERKLE_CLASS_HASH_POSEIDON = "0x03e2efc98f902c0b33eee6c3daa97b941912bcab61b6162884380c682e594eaf";

const tree = Merkle.StarknetMerkleTree.load(
    JSON.parse(fs.readFileSync('src/data/treeTestPoseidon.json', 'ascii'))
);

const leaf = tree.getInputData(0);
const proof = tree.getProof(0);

console.log('leaf:', leaf)
console.log('proof:', proof)

// provider and account setup
const provider = new RpcProvider({ nodeUrl: process.env.RPC_URL });
const account3Address = "0x0661aB0dE03527dEB438FC6E315e9898D4CcD09A5334821CEebe6AcBe17b2407";
const account3 = new Account(provider, account3Address, process.env.PRIVATE_KEY as string);

// deploy merkle contract from class hash
// deployed merkle contract address: 0x3a8c8a730b04e91829d15ecb3dfd7da7e0ad977721427a6e8a86a5132cfdb96
const myConstructorMerkleVerify = CallData.compile([tree.root]);

// deploy merkle_contract from merkle class_hash on sepolia
const deployResponses = async () => {
    const deployAddr = await account3.deployContract({
        classHash: MERKLE_CLASS_HASH_POSEIDON,
        constructorCalldata: myConstructorMerkleVerify
    })
    return deployAddr.address
}


const deployMerkle = async () => {
    let address = await deployResponses();
    console.log('merkleVerifyAddress:', address);
}

deployMerkle()


// invoke request_airdrop on contract: 0x06262879a96a42c2f15930e764d4081e8beabab754a2fce755b987b97afc2dca
const invoke_request_airdrop = async () => {
    const AIRDROP_ADDRESS = "0x06262879a96a42c2f15930e764d4081e8beabab754a2fce755b987b97afc2dca"
    let abi = await (await provider.getClassAt(AIRDROP_ADDRESS)).abi

    if (abi === undefined) { throw new Error("no abi.") };
    const myContract = new Contract(abi, AIRDROP_ADDRESS, account3);
    const amount: Uint256 = { low: leaf[1], high: leaf[2] };
    const myCall = myContract.populate("request_airdrop", {
        address: "0x0143255712596fe3b1ebb6a4309230d2592034e6fe544e33acf2848fe7cf5fa7", //address to claim
        amount,
        proof
    })
    const txResp = await account3.execute(myCall);
    const txR = await provider.waitForTransaction(txResp.transaction_hash);
    console.log("event =", txR.events);
}



invoke_request_airdrop()

