import React from 'react';
import {IAlphaScrollItemData} from './IAlphaScrollItemData';
import AlphaScrollList from './AlphaScrollList/AlphaScrollList';
import SectionHeader from './SectionHeader/SectionHeader';

import data from '../../assets/data/countries-section.json';
import {convertToThreeXSize} from '../styles/metrics';

const SearchBoxHeight = 50;
const SectionHeaderHeight = 50;
const ItemHeight = convertToThreeXSize(176);
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
        renderSectionHeader={SectionHeader}
        onSelect={this.onSelect}
        countryCode="US"
        onClose={() => {}}
      />
    );
  }
}
