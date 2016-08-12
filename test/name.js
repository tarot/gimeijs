'use strict';

describe('Gimei.name()', () => {
    describe('#male', () => {
        it('男性の場合は true を返すこと', () => {
            assert(Gimei.male().male);
        });

        it('女性の場合は false を返すこと', () => {
            assert(!Gimei.female().male);
        });
    });

    describe('#female', () => {
        it('男性の場合は true を返すこと', () => {
            assert(!Gimei.male().female);
        });

        it('女性の場合は false を返すこと', () => {
            assert(Gimei.female().female);
        });
    });

    describe('#kanji', () => {
        it('全角文字とスペースが返ること', () => {
            assert(Gimei.name().kanji.match(new RegExp(`^[${zenkaku}]+ [${zenkaku}]+$`)));
        });
    });

    describe('#toString()', () => {
        it('全角文字とスペースが返ること', () => {
            assert(Gimei.name().toString().match(new RegExp(`^[${zenkaku}]+ [${zenkaku}]+$`)));
        });
    });

    describe('#hiragana', () => {
        it('ひらがなとスペースが返ること', () => {
            assert(Gimei.name().hiragana.match(new RegExp(`^[${hiragana}]+ [${hiragana}]+$`)));
        });
    });

    describe('#katakana', () => {
        it('カタカナとスペースが返ること', () => {
            assert(Gimei.name().katakana.match(new RegExp(`^[${katakana}]+ [${katakana}]+$`)));
        });
    });

    describe('#first', () => {
        describe('#male', () => {
            it('男性の場合は true を返すこと', () => {
                assert(Gimei.male().first.male);
            });

            it('女性の場合は false を返すこと', () => {
                assert(!Gimei.female().first.male);
            });
        });

        describe('#female', () => {
            it('男性の場合は true を返すこと', () => {
                assert(!Gimei.male().first.female);
            });

            it('女性の場合は false を返すこと', () => {
                assert(Gimei.female().first.female);
            });
        });

        describe('#kanji', () => {
            it('全角文字が返ること', () => {
                assert(Gimei.name().first.kanji.match(new RegExp(`^[${zenkaku}]+$`)));
            });
        });

        describe('#toString()', () => {
            it('全角文字が返ること', () => {
                assert(Gimei.name().first.toString().match(new RegExp(`^[${zenkaku}]+$`)));
            });
        });

        describe('#hiragana', () => {
            it('ひらがなが返ること', () => {
                assert(Gimei.name().first.hiragana.match(new RegExp(`^[${hiragana}]+$`)));
            });
        });

        describe('#katakana', () => {
            it('カタカナが返ること', () => {
                assert(Gimei.name().first.katakana.match(new RegExp(`^[${katakana}]+$`)));
            });
        });
    });

    describe('#last', () => {
        describe('#kanji', () => {
            it('全角文字が返ること', () => {
                assert(Gimei.name().last.kanji.match(new RegExp(`^[${zenkaku}]+$`)));
            });
        });

        describe('#toString()', () => {
            it('全角文字が返ること', () => {
                assert(Gimei.name().last.toString().match(new RegExp(`^[${zenkaku}]+$`)));
            });
        });

        describe('#hiragana', () => {
            it('ひらがなが返ること', () => {
                assert(Gimei.name().last.hiragana.match(new RegExp(`^[${hiragana}]+$`)));
            });
        });

        describe('#katakana', () => {
            it('カタカナが返ること', () => {
                assert(Gimei.name().last.katakana.match(new RegExp(`^[${katakana}]+$`)));
            });
        });
    });
});