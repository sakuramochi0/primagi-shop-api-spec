# primagi-shop-api-spec
📄 Specification of the Primagi shop API

## `/shop/pref.json`

Returns a map from the prefecture code to the number of shops.

For example, a mapping `"3": 4` means that the prefecture code `3` (Iwate prefecture) has four shops we can play Primagi.

### URL

https://cdnprimagiimg01.blob.core.windows.net/primagi/data/json/shop/pref.json

### Respose Example

```json
{
    "1": 41,
    "2": 16,
    "3": 4,
    "4": 26,
    "5": 4,
    ...
}
```

## `/shop/<pref-code>.json`

Returns the list of shop information in the specified prefecture.

### URL

https://cdnprimagiimg01.blob.core.windows.net/primagi/data/json/shop/3.json

### Response Example

```json
{
    "181": {
        "Name": "モーリーファンタジーイオン盛岡南",
        "Address": "盛岡市本宮7-1-1"
    },
    "405": {
        "Name": "タイトーステーション 盛岡マッハランド",
        "Address": "盛岡市上堂1-2-38  "
    },
    "582": {
        "Name": "モーリーファンタジー一関",
        "Address": "一関市山目字泥田89-1"
    },
    "726": {
        "Name": "モーリーファンタジー前沢",
        "Address": "奥州市前沢区向田2-85"
    }
}
```
