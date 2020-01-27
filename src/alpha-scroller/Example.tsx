import React from 'react';
import {IAlphaScrollItemData} from './IAlphaScrollItemData';
import AlphaScrollList from './AlphaScrollList/AlphaScrollList';
import SectionItem from './SectionItem';
import SectionHeader from './SectionHeader';

const randomItems = (min: number, max: number): IAlphaScrollItemData[] => {
  let count = Math.floor(Math.random() * (max - min) + min);

  let items: IAlphaScrollItemData[] = [...new Array(count)].map((i, index) => ({
    id: index,
    image: 'https://avatars0.githubusercontent.com/u/22367929?s=40&v=4',
    name: `name ${index.toString()}`,
  }));

  return items;
};

const data: {[key: string]: IAlphaScrollItemData[]} = {
  A: randomItems(8, 14),
  B: randomItems(3, 5),
  C: randomItems(21, 35),
  F: randomItems(1, 2),
  G: randomItems(3, 14),
  H: randomItems(8, 21),
  I: randomItems(16, 45),
  J: randomItems(7, 14),
  K: randomItems(5, 14),
  L: randomItems(8, 35),
  M: randomItems(8, 14),
  N: randomItems(8, 14),
  O: randomItems(8, 14),
  P: randomItems(8, 14),
  Q: randomItems(8, 14),
  T: randomItems(8, 14),
  U: randomItems(8, 14),
  V: randomItems(8, 14),
  W: randomItems(8, 14),
  X: randomItems(8, 14),
  Y: randomItems(8, 14),
  Z: randomItems(8, 14),
};

const SearchBoxHeight = 50;
const SectionHeaderHeight = 50;
const ItemHeight = 40;
const AlphaScrollerVerticalPadding = 25;

export class Example extends React.Component {
  onSelect = (item: IAlphaScrollItemData) => {
    console.log(item.name);
  };
  render() {
    return (
      <AlphaScrollList<IAlphaScrollItemData>
        data={data}
        itemHeight={ItemHeight}
        sectionHeaderHeight={SectionHeaderHeight}
        searchBoxHeight={SearchBoxHeight}
        alphaScrollerVerticalPadding={AlphaScrollerVerticalPadding}
        renderItem={SectionItem}
        renderSectionHeader={SectionHeader}
        onSelect={this.onSelect}
      />
    );
  }
}
