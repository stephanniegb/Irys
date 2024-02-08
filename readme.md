# NFT AIRDROP SCRIPT

An implementation of ERC721 AIRDROP CONTRACT SCRIPT:

[REFERENCE NFT CONTRACT IMPLEMENTATION](https://github.com/codeWhizperer/ERC721-AIRDROP)


<!-- setup -->

```bash
const CLASS_HASH = "";
const provider = new RpcProvider({ nodeUrl: "" });
const account1Address = "";
const account3 = new Account(provider, account1Address, process.env.PRIVATE_KEY!);
```
```bash
// ipfs CID Of nft collection
const longString = "ipfs://QmSkDCsS32eLpcymxtn1cEn7Rc5hfefLBgfvZyjaYXr4gQ/"
```
```bash
//nft address after deployment
const NFTADDRESS = ""

```

```bash
const deployNFT = async () => {
    //set owner at deployment of contract
    let owner = ""
    const contractCallData: CallData = new CallData(tokenABi);
    const myCalldata: Calldata = contractCallData.compile("constructor", [owner]);
    const deployAddr = await account3.deployContract({
        classHash: CLASS_HASH,
        constructorCalldata: myCalldata
    })
    return deployAddr.address
}


const deploy = async () => {
    let address = await deployNFT();
    console.log('nft-address:', address);
}
```

```bash
// set contract uri
const setTokenUri = async () => {
    const accountAddress2 = ""
    const private_key2 = ""
    const account2 = new Account(provider, accountAddress2, process.env.PRIVATE_KEY2!
    );
    let newContract = await new Contract(tokenABi, NFTADDRESS, account2)
    const result = await newContract.set_token_uri(longString)
    newContract.connect(account2)
    console.log('result:', await result)
}

```

```bash
const airdrop =['0x0143255712596fe3b1ebb6a4309230d2592034e6fe544e33acf2848fe7cf5fa7''0x0227fd0cba3497f781821922c0dbdd9a622db621286dad907d135b39697f7382', '0x03e8cbb63a7d14b1a0514bc63fd891a7ad61d67c73a55aadf67a405a8a9c0000']
const airdrop_tokens = async () => {
    // owner of nft contract
    const accountAddress2 = ""
    const private_key2 = ""
    const account2 = new Account(provider, accountAddress2, private_key2);
    let newContract = await new Contract(tokenABi, NFTADDRESS, account2)
    const result = await newContract.airdrop_token(airdrop)
    newContract.connect(account2)
    console.log('result:', await result)
}
```

```bash
//call functions
deploy()
setTokenUri()
airdrop_tokens()
```

