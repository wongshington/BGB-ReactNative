import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { searchbarStyles } from './_searchbar';

const SearchbarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      onChangeText={ onChangeSearch }
      value={ searchQuery }
      style={ searchbarStyles.main }
    />
  );
};

export default SearchbarComponent;