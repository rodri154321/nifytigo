const { users, nfts } = require('../db'); // Asegúrate de que la ruta sea correcta

// Activar o desactivar un usuario
async function toggleUserStatus(req, res) {
  const { userId } = req.params;
  try {
    const user = await users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cambiar el estado del usuario
    user.active = !user.active;
    await user.save();

    return res.status(200).json({ message: 'User status updated successfully', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Activar o desactivar un NFT
async function toggleNFTStatus(req, res) {
  const { nftId } = req.params;
  try {
    const nft = await nfts.findByPk(nftId);
    if (!nft) {
      return res.status(404).json({ message: 'NFT not found' });
    }

    // Cambiar el estado del NFT
    nft.active = !nft.active;
    await nft.save();

    return res.status(200).json({ message: 'NFT status updated successfully', nft });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Obtener todos los usuarios activos
async function getAllActiveUsers(req, res) {
  try {
    const activeUsers = await users.findAll({ where: { active: true } });
    return res.status(200).json(activeUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Obtener todos los NFTs activos
async function getAllActiveNFTs(req, res) {
  try {
    const activeNFTs = await nfts.findAll({ where: { active: true } });
    return res.status(200).json(activeNFTs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  toggleUserStatus,
  toggleNFTStatus,
  getAllActiveUsers,
  getAllActiveNFTs,
};
