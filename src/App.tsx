import { Input } from '@/components/ui/input';
import './app.scss';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import {
  PlayIcon,
  PauseIcon,
  TrackPreviousIcon,
  TrackNextIcon,
  BarChartIcon,
} from '@radix-ui/react-icons';

function App() {
  return (
    <div id="song-search-app">
      <div className="mb-4">
        <Input type="text" placeholder="Search by artist" />
      </div>

      <div className="mb-4">
        <ScrollArea className="h-[200px]  rounded-md border p-4">
          <ul>
            <li className="flex items-center justify-between">
              Song <BarChartIcon />
            </li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
            <li>Song</li>
          </ul>
        </ScrollArea>
      </div>

      <div>
        <Progress value={33} />
        <div className="flex items-center justify-around">
          <TrackPreviousIcon />
          <PlayIcon />
          <PauseIcon />
          <TrackNextIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
