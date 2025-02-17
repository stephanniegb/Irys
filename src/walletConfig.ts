import argentAbi from "./argent.json";
import braavosAbi from "./braavos.json";

export const walletConfigs = [
    {
      name: 'Argent',
      abi: argentAbi,
      selector: 'get_owner',
    },
    {
      name: 'Braavos',
      abi: braavosAbi,
      selector: 'get_public_key',
    },
  ];
  