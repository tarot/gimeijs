'use strict';

const kanji = [
    '\\u3000-\\u303f', // CJK Symbols and Punctuation
    '\\u3400-\\u4dbf', // CJK Unified Ideographs Extension A
    '\\u4e00-\\u9fff', // CJK Unified Ideographs
    '\\uf900-\\ufaff', // CJK Compatibility Ideographs
].join('');
const hiragana = '\\u3040-\\u309f';
const katakana = '\\u30a0-\\u30ff';
const zenkaku = hiragana + katakana + kanji;

Object.assign(global, {hiragana, katakana, zenkaku});