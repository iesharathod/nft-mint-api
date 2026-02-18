// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MyNFT is ERC721, Ownable, ReentrancyGuard {

    uint256 public constant MAX_SUPPLY = 5;
    uint256 public mintPrice = 1 ether;
    uint256 public totalMinted;

    string private baseTokenURI;

    constructor(string memory baseURI_)
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)   // ✅ REQUIRED in OZ v5
    {
        baseTokenURI = baseURI_;
    }

    function mint(address to) external payable nonReentrant {
        require(totalMinted < MAX_SUPPLY, "Max supply reached");
        require(msg.value == mintPrice, "Incorrect payment");

        totalMinted++;
        _safeMint(to, totalMinted);
    }

    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }

    function withdraw() external onlyOwner nonReentrant {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}
