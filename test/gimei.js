'use strict';

describe('Gimei', () => {
    describe('.address()', () => {
        it('呼び出しごとに新しいインスタンスが作られること', () => {
            assert(Gimei.address() !== Gimei.address());
        });

        it('各プロパティは新しいインスタンスを作らないこと', () => {
            let address = Gimei.address();
            assert(address.kanji === address.kanji);
            assert(address.katakana === address.katakana);
            assert(address.hiragana === address.hiragana);

            assert(address.prefecture === address.prefecture);
            assert(address.prefecture.kanji === address.prefecture.kanji);
            assert(address.prefecture.katakana === address.prefecture.katakana);
            assert(address.prefecture.hiragana === address.prefecture.hiragana);

            assert(address.city === address.city);
            assert(address.city.kanji === address.city.kanji);
            assert(address.city.katakana === address.city.katakana);
            assert(address.city.hiragana === address.city.hiragana);

            assert(address.town === address.town);
            assert(address.town.kanji === address.town.kanji);
            assert(address.town.katakana === address.town.katakana);
            assert(address.town.hiragana === address.town.hiragana);
        });
    });

    describe('.name()', () => {
        it('呼び出しごとに新しいインスタンスが作られること', () => {
            assert(Gimei.name() !== Gimei.name());
        });

        it('各プロパティは新しいインスタンスを作らないこと', () => {
            let name = Gimei.name();
            assert(name.kanji === name.kanji);
            assert(name.katakana === name.katakana);
            assert(name.hiragana === name.hiragana);
            assert(name.male === name.male);
            assert(name.female === name.female);

            assert(name.first === name.first);
            assert(name.first.kanji === name.first.kanji);
            assert(name.first.katakana === name.first.katakana);
            assert(name.first.hiragana === name.first.hiragana);
            assert(name.first.male === name.first.male);
            assert(name.first.female === name.first.female);

            assert(name.last === name.last);
            assert(name.last.kanji === name.last.kanji);
            assert(name.last.katakana === name.last.katakana);
            assert(name.last.hiragana === name.last.hiragana);
        });
    });

    describe('.male()', () => {
        it('Gimei.name() と同じクラスのインスタンスであること', () => {
            assert(Gimei.name().constructor === Gimei.male().constructor);
        });

        it('呼び出しごとに新しいインスタンスが作られること', () => {
            assert(Gimei.male() !== Gimei.male());
        });
    });

    describe('.female()', () => {
        it('Gimei.name() と同じクラスのインスタンスであること', () => {
            assert(Gimei.female().constructor === Gimei.female().constructor);
        });

        it('呼び出しごとに新しいインスタンスが作られること', () => {
            assert(Gimei.female() !== Gimei.female());
        });
    });
});