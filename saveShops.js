const baseURL = 'https://cdnprimagiimg01.blob.core.windows.net/primagi/data/json';

async function main() {
  const prefIDs = await fetchPrefIDs()
  const shops = await fetchShops(prefIDs);
  saveShops(shops)
}

async function fetchPrefIDs() {
  const url = `${baseURL}/shop/pref.json`
  const res = await (await fetch(url)).json()
  return Object.keys(res);
}

async function fetchShops(prefIDs) {
  const shops = []
  for (const pref of prefIDs.slice(0, 1)) {
    const url = `${baseURL}/shop/${pref}.json`;
    const prefShops = await (await fetch(url)).json()
    for (const [id, data] of Object.entries(prefShops)) {
      const shop = {id, pref, ...data}
      shops.push(shop)
    }

  }
  return shops;
}

function saveShops(shops) {
  const fs = require('node:fs')
  const today = new Date().toISOString().slice(0, 10)
  const data = {updated: today, shops}
  fs.writeFileSync('shops.json', JSON.stringify(data, null, 2))
}

main()
