import React, { Component } from 'react';
import { FoldersList } from '../FoldersList/FoldersList';
import styles from './FolderListItem.module.css';

class FolderListItem extends Component {
  state = {
    isExpanded: false,
  };

  handleToggleNesting = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  isSearchedFileExists = () => {
    const { searchValue, title, children } = this.props;
    if (!searchValue.trim()) {
      return false;
    }
    return title.toLowerCase().includes(searchValue.toLowerCase()) || this.searchNameByQuery(children, searchValue);
  };

  searchNameByQuery = (items, query) => {
    if (!items) {
      return null;
    }
    return items.some((item) => {
      if (item?.children?.length) {
        return this.searchNameByQuery(item.children, query);
      }
      return item?.title?.toLowerCase().includes(query?.toLowerCase());
    });
  };

  unwrapAfterSearch = () => {
    if (this.isSearchedFileExists()) {
      this.setState({
        isExpanded: true,
      });
    }
  };

  componentDidMount = () => {
    const { searchValue } = this.props;
    if (searchValue.trim()) {
      this.unwrapAfterSearch();
    }
  };

  componentDidUpdate = (prevProps) => {
    const { searchValue } = this.props;

    if (searchValue.trim() && prevProps.searchValue !== searchValue) {
      this.unwrapAfterSearch();
    }
  };

  renderByMimeType = (type, textColor, title, mimeType) => {
    return type === 'folder' ? (
      <span
        style={{
          color: textColor,
        }} // inline styles because of changeable text color (with UI libraries it would be without inline styles)
      >
        {title}
      </span>
    ) : (
      <span
        style={{
          color: textColor,
        }}
      >
        {title}.{mimeType}
      </span>
    );
  };

  render() {
    const { title, children, type, mimeType, searchValue } = this.props;
    const { isExpanded } = this.state;
    const isSearchedFileExists = this.isSearchedFileExists();
    const isButtonNeeded = !!children?.length;
    const buttonText = isExpanded ? '-' : '+';
    const textColor = isSearchedFileExists && type !== 'folder' ? 'green' : 'black';

    if (!children?.length) {
      return (
        <div className={styles.flex}>
          {isButtonNeeded && <button onClick={this.handleToggleNesting}>{buttonText}</button>}
          {this.renderByMimeType(type, textColor, title, mimeType)}
        </div>
      );
    }

    return (
      <div>
        <div className={styles.flex}>
          <button onClick={this.handleToggleNesting}>{buttonText}</button>
          {this.renderByMimeType(type, textColor, title, mimeType)}
        </div>
        {isExpanded && <FoldersList searchValue={searchValue} folders={children} />}
      </div>
    );
  }
}

export default FolderListItem;
