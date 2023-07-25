import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BarChartIcon } from '@radix-ui/react-icons';

export const SongList = () => {
  return (
    <div className="mb-4">
      <ScrollArea
        className="rounded-md border p-4"
        style={{ height: 'calc(100vh - 10rem)' }}
      >
        <ul>
          {[1, 2, 3, 4].map((song, i) => (
            <React.Fragment key={i}>
              <li className="flex items-center justify-between">
                Song <BarChartIcon />
              </li>
              <Separator className="my-4" />
            </React.Fragment>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};
