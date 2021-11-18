class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class IntermediatelItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateItemSellIn() {
    this.sellIn--;
  } }

class Shop extends IntermediatelItem{
  constructor(items=[]){
    this.sellIn = sellIn;
    this.quality = quality;
  } }

class Backstage extends IntermediatelItem{ 
    constructor(items=[]){
      this.sellIn = sellIn;
      this.quality = quality;
} }

class AgedBrie extends IntermediatelItem{ 
      constructor(items=[]){
        this.sellIn = sellIn;
        this.quality = quality;
}  }

class Conjured extends IntermediatelItem{
     constructor(items=[]){
    this.sellIn = sellIn;
    this.quality = quality;
}   }
 
class Sulfuras extends IntermediatelItem{
    constructor(items=[]){
      this.sellIn = sellIn;
      this.quality = quality;
} }

   //   

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

module.exports = {
  Item,
  Shop,
  Backstage,
  AgedBrie, 
  Conjured,
  NormalItem,
  Sulfuras
}
