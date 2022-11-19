import account from "../assets/account.png";
import battery from "../assets/battery.png";
import recipt from "../assets/recipt.png";
import addGST from "../assets/addgstin.png";

export const SideNavbarList = [
  {name:"Onboard",image:addGST, link:"dashboard"},
  { name: "Wallet", image: account, link:'wallet' },
  { name: "Token balance", image: recipt, link:'tokenbalance' },
  { name: "NFT Metadata", image: battery , link:'nft'},
];

export const CsvHeaders = [
  { label: "LEGAL NAME", key: "lgnm" },
  { label: "TRADE NAME", key: "name" },
  { label: "GST NUMBER", key: "gstin" },
  { label: "GST TYPE", key: "gstRegType" },
  { label: "REGISTRATION DATE", key: "rgdt" },
  { label: "CANCELLATION DATE", key: "cancellationDate" },
];
