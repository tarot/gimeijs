'use strict';

describe('Gimei.address()', () => {
    before(() => {
        this.zenkaku = new RegExp(`^[${zenkaku}]+$`);
        this.hiragana = new RegExp(`^[${hiragana}]+$`);
        this.katakana = new RegExp(`^[${katakana}]+$`);
    });

    it('全角文字が返ること', () => {
        assert(Gimei.address().kanji.match(this.zenkaku));
        assert(Gimei.address().toString().match(this.zenkaku));
        assert(Gimei.address().prefecture.kanji.match(this.zenkaku));
        assert(Gimei.address().prefecture.toString().match(this.zenkaku));
        assert(Gimei.address().city.kanji.match(this.zenkaku));
        assert(Gimei.address().city.toString().match(this.zenkaku));
        assert(Gimei.address().town.kanji.match(this.zenkaku));
        assert(Gimei.address().town.toString().match(this.zenkaku));
    });

    it('ひらがなが返ること', () => {
        assert(Gimei.address().hiragana.match(this.hiragana));
        assert(Gimei.address().prefecture.hiragana.match(this.hiragana));
        assert(Gimei.address().city.hiragana.match(this.hiragana));
        assert(Gimei.address().town.hiragana.match(this.hiragana));
    });

    it('カタカナが返ること', () => {
        assert(Gimei.address().katakana.match(this.katakana));
        assert(Gimei.address().prefecture.katakana.match(this.katakana));
        assert(Gimei.address().city.katakana.match(this.katakana));
        assert(Gimei.address().town.katakana.match(this.katakana));
    });
});