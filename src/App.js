import React from "react";
import CardList from "./CardList";
import { friends } from "./friends";
import SearchBox from "./SearchBox";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: "",
      friends: friends,
    };
  }
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
    // console.log(event.target.value);
  };
  render() {
    const filterFriend = this.state.friends.filter((friend) => {
      return friend.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (filterFriend === null) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc pa3">
          <h1>Friend's Constact</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          {/* <Molk /> */}
          <CardList friends={filterFriend} /> 
        </div>
      );
    }
  }
}

export default App;
