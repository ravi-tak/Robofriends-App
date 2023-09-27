const SearchBar = ({ apiData, setData }) => {
  const handler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = apiData.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setData(filteredData);
  };

  return (
    <div className="search-bar">
      <p>Serach Monster</p>
      <input
        type="search"
        id="input"
        placeholder="Monster"
        onChange={handler}
      ></input>
    </div>
  )
}

export default SearchBar
