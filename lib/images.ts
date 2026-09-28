// Kuratierte, live geprüfte Unsplash-Bilder.
// Naming = Verwendungszweck. Werden direkt als <img src=...> geladen.

const U = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMG = {
  // Werkstatt / Handwerk
  workshopWide: U("photo-1601058268499-e52658b8bb88", 2400),
  workshopHands: U("photo-1615529182904-14819c35db37", 1800),
  workshopTools: U("photo-1520607162513-77705c0f0d4a", 1800),
  workshopBench: U("photo-1519710164239-da123dc03ef4", 1800),
  workshopDetail: U("photo-1552083375-1447ce886485", 1400),
  workshopPlane: U("photo-1567016432779-094069958ea5", 1400),
  workshopWide2: U("photo-1531983412531-1f49a365ffed", 1800),
  workshopSaw: U("photo-1587467512961-120760940315", 1400),
  workshopWood: U("photo-1600210491369-e753d80a41f3", 1400),

  // Holz / Material
  woodGrain: U("photo-1504148455328-c376907d081c", 1600),
  woodStack: U("photo-1509660933844-6910e12765a0", 1600),
  woodBoards: U("photo-1602934585418-f588bea4215c", 1400),
  woodMacro: U("photo-1416339442236-8ceb164046f8", 1600),

  // Möbel / Küche / Innenausbau
  interiorLiving: U("photo-1600607687939-ce8a6c25118c", 2000),
  interiorShelf: U("photo-1556909114-f6e7ad7d3136", 1600),
  interiorKitchen: U("photo-1618221195710-dd6b41faaea6", 2000),
  interiorRoom: U("photo-1503602642458-232111445657", 1800),
  interiorDetail: U("photo-1585128792020-803d29415281", 1600),
  interiorFurniture: U("photo-1590756254933-2873d72a83b6", 1600),
  interiorHouse: U("photo-1600585154340-be6161a56a0c", 2000),
  interiorRoom2: U("photo-1516216628859-9bccecab13ca", 1800),
  interiorRoom3: U("photo-1560184897-ae75f418493e", 1800),
  interiorBath: U("photo-1560472354-b33ff0c44a43", 1600),

  // Bestattungen: ruhig, natürlich, würdevoll
  calmTree: U("photo-1469334031218-e382a71b716b", 2000),
  calmForest: U("photo-1441974231531-c6227db76b6e", 2000),
  calmPath: U("photo-1449034446853-66c86144b0ad", 2000),
  calmLandscape: U("photo-1518709779341-56cf4535e94b", 2000),
  calmMountain: U("photo-1541123437800-1bb1317badc2", 2000),
  calmDark: U("photo-1518709268805-4e9042af9f23", 2000),
  candle1: U("photo-1493663284031-b7e3aefcae8e", 1600),
  candle2: U("photo-1519741497674-611481863552", 1600),
  flower: U("photo-1517594422361-5eeb8ae275a9", 1600),
} as const;

export type ImageKey = keyof typeof IMG;
