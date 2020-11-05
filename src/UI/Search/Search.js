import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
const Search = () => {
  return (
    <React.Fragment>
      <div className="search_header">
        <img
          alt=""
          src="https://img.freepik.com/free-vector/youth-day-with-jumping-people_23-2148582324.jpg?size=626&ext=jpg&ga=GA1.2.294454895.1604069931"
          className="search_logo"
        />
        <div className="search_container">
          <div className="search_searchbar">
            <SearchIcon />
            <input
              placeholder="search people, sound and tags..."
              className="search_search"
            />
          </div>
          <PersonAddIcon className="search_add_friends" />
        </div>
      </div>

      <div className="search_logo_container">
        <h2>Trending Videos Will Appear Here...</h2>
      </div>
    </React.Fragment>
  );
};

export default Search;
