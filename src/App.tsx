import { Search } from '@/components/search/search';
import { SongList } from '@/components/song-list/song-list';
import { Controls } from '@/components/controls/controls';
import './app.scss';

const App = () => {
  return (
    <div id="song-search-app">
      <Search />

      <SongList />

      <Controls />
    </div>
  );
};

export default App;
