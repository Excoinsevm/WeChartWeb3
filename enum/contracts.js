const UtilsAddresses = require("../utils/addresses");
const EnumChainId = require("./chain.id");

const EnumContracts = {
    [EnumChainId.BROCK]: {
        MAIN_ROUTER: UtilsAddresses.toCheckSum("0x28011841A9E8D782a3B58da3e757fc939cca84B3"), // Pancake
        MAIN_FACTORY: UtilsAddresses.toCheckSum("0x195b605fa7c6f379fd27ddeec89cfae6caabfae9") // Pancake
    }
};

module.exports = EnumContracts
