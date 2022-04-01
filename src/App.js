import "../src/css/bootstrap.min.css"
import "../src/css/bootstrap.css"
import "../src/css/style.css"
import CharacterCard from './CharacterCard'
import SearchBarAndFilter from './SearchBarAndFilter'
import Pagination from '../src/Pagination'

function App() {
  return (
    <div>
    <br />
    <SearchBarAndFilter />
    <div className="row">
      <div className="col-lg-12">
      <Pagination />
      </div>
    </div>
    <div className="row">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
    <div className="row">
      <div className="col-lg-12">
      <center>
      <Pagination />
      </center>
      </div>
    </div>
    </div>
  );
}

export default App;
