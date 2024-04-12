import { Component } from 'react';
import { FoldersList } from './components/FoldersList/FoldersList';
import Searchbar from './components/Searchbar/Searchbar';
import data from './data/files.json';

// I created data.json by myself, because I couldn't find json in google drive, cuz I don't have the link to google drive :))
// I'm apologise but I'm also I created FoldersList and FoldersListItems components, cuz of
// project architecture, where I have list of folders and inside could be folder or file or both.
// I need your json with data and decision with two components (Folder and File) must be more clear for me.
// And I can rewrite my code in live with your json file)

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleSetSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="App">
        <Searchbar handleSetSearchValue={this.handleSetSearchValue} />
        <FoldersList searchValue={searchValue} folders={data} />
      </div>
    );
  }
}
