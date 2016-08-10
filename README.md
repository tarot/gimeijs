# gimeijs

Node.js port of [gimei](https://github.com/willnet/gimei)

## Usage

### name()

```js
const Gimei = require('gimeijs');
let name = Gimei.name();

console.log(name.kanji);          // "斎藤 陽菜"
console.log(name.hiragana);       // "さいとう はるな"
console.log(name.katakana);       // "サイトウ ハルナ"
console.log(name.last.kanji);     // "斎藤"
console.log(name.last.hiragana);  // "さいとう"
console.log(name.last.katakana);  // "サイトウ"
console.log(name.first.kanji);    // "陽菜"
console.log(name.first.hiragana); // "はるな"
console.log(name.first.katakana); // "ハルナ"
```

### male()

```js
const Gimei = require('gimeijs');
let name = Gimei.male();

console.log(name.male);   // true
console.log(name.female); // false
console.log(name.kanji);  // "小林 顕士"
```

### female()

```js
const Gimei = require('gimeijs');
let name = Gimei.female();

console.log(name.male);   // false
console.log(name.female); // true
console.log(name.kanji);  // "根本 彩世"
```

### address()

```js
const Gimei = require('gimeijs');
let address = Gimei.address();

console.log(address.kanji);       // "岡山県大島郡大和村稲木町"
console.log(address.toString());  // "岡山県大島郡大和村稲木町"
console.log(address.hiragana);    // "おかやまけんおおしまぐんやまとそんいなぎちょう"
console.log(address.katakana);    // "オカヤマケンオオシマグンヤマトソンイナギチョウ"

console.log(address.prefecture.kanji);      // "岡山県"
console.log(address.prefecture.toString()); // "岡山県"
console.log(address.prefecture.hiragana);   // "おかやまけん"
console.log(address.prefecture.katakana);   // "オカヤマケン"

console.log(address.city.kanji);      // "大島郡大和村"
console.log(address.city.toString()); // "大島郡大和村"
console.log(address.city.hiragana);   // "おおしまぐんやまとそん"
console.log(address.city.katakana);   // "オオシマグンヤマトソン"

console.log(address.town.kanji);      // "稲木町"
console.log(address.town.toString()); // "稲木町"
console.log(address.town.hiragana);   // "いなぎちょう"
console.log(address.town.katakana);   // "イナギチョウ"
```

## Supported versions

* Node.js v5+

## License

MIT
