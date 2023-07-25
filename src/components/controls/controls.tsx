import { Progress } from '@/components/ui/progress';
import {
  PlayIcon,
  PauseIcon,
  TrackPreviousIcon,
  TrackNextIcon,
} from '@radix-ui/react-icons';

export const Controls = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span>0:00</span>
        <Progress value={33} className="mx-4" />
        <span>3:56</span>
      </div>

      <div className="flex items-center justify-around">
        <TrackPreviousIcon />
        <PlayIcon />
        <PauseIcon />
        <TrackNextIcon />
      </div>
    </div>
  );
};
