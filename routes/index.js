var express = require('express');
var router = express.Router();
const contract = require('../contract');

router.get('/', function(req, res) {
  res.json({ message: "NFT Mint API Running" });
});

router.post('/mint', async function(req, res) {
  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: "Wallet address is required"
      });
    }

    const mintPrice = await contract.mintPrice();

    const tx = await contract.mint(walletAddress, {
      value: mintPrice
    });

    const receipt = await tx.wait();

    res.json({
      success: true,
      txHash: receipt.hash
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.reason || error.message
    });
  }
});

module.exports = router;
