import React, { Component } from 'react';
import FolderListItem from '../FolderListItem/FolderListItem';

export class FoldersList extends Component {
  render() {
    const { searchValue, folders } = this.props;
    return (
      <ul>
        {folders.map((item) => {
          return <FolderListItem {...item} searchValue={searchValue} key={item.id} />;
        })}
      </ul>
    );
  }
}

// As for me functional component is better and faster here because this is simple component (lifecycle and state doesn't needed)
// export const FoldersList = ({ searchValue, folders }) => {
//   return (
//     <ul>
//       {folders.map((item) => {
//         return <FolderListItem {...item} searchValue={searchValue} key={item.id} />;
//       })}
//     </ul>
//   );
// };
