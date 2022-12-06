export const parseErrorMsg = (msg: string) => {
    if(msg.includes("insufficient funds for intrinsic transaction cost")) {
        return("Vous ne possédez pas les fonds nécessaires.");
    }
    if(msg.includes("Maximum amount of NFT mints reached")) {
        return("Vous avez atteint le nombe max de mint.");
    }
    if(msg.includes("You are not in the whitelist")) {
        return("Vous ne faites pas partie de la whitelist.");
    }
    if(msg.includes("Maximum pre-sale mints reached")) {
        return("Tout les NFTs de la pre-sale ont été mintés.");
    }
    if(msg.includes("Maximum sale mints reached")) {
        return("Tout les NFTs ont été mintés.");
    }
}