const keccak256 = require("keccak256");
import MerkleTree from "merkletreejs";
import { addresses } from "./addresses";

function getProof(tree: MerkleTree, address: string) {
    const leaf = keccak256(address);
    const proof = tree.getHexProof(leaf);
    return proof;
}

export const createProof = (address: string) => {
    const leaves = addresses.map((address: any) => keccak256(address));
    const tree = new MerkleTree(leaves, keccak256, {sort: true});
    const proof = getProof(tree, address);
    //console.log("root : " + tree.getHexRoot() + " - " + "proof : " + proof);
    return proof;
}

