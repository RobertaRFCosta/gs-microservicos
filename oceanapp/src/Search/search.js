import './search.css';

function Search({searchName, onChange}) {
  return (
    <div className="Search">
      <label>{searchName}</label>
      <input onChange={onChange}/>
    </div>
  );
}

export default Search;
