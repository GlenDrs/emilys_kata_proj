var {Shop, Item,  Backstage, AgedBrie,  Conjured,  NormalItem, Sulfuras} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("SHOP", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("ITEM", function() {
    const gildedRose = new Item([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("BACKSTAGE", function() {
    const gildedRose = new Backstage([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("AGE-BRIE", function() {
    const gildedRose = new AgedBrie([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("CONJURED", function() {
    const gildedRose = new Conjured([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("NORMAL - ITEM", function() {
    const gildedRose = new NormalItem([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("SULFURAS", function() {
    const gildedRose = new Sulfuras([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });


});
