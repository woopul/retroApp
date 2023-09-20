import { cn } from '@/utils/cn';
import { AddButton } from './AddButton';
import { Draggable } from './Draggable';

export type DropZoneProps = {
  id: string;
  className?: string;
  items: { id: string; dz_id: string }[];
  addDraggable: () => void;
};

export const DropZone = ({ addDraggable, className, id: dz_id, items }: DropZoneProps) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('drop', { data: e.dataTransfer.getData('text/plain') });
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('dragEnter', e);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('dragLeave', e);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('dragOver', e);
  };

  return (
    <div
      id={dz_id}
      className={cn('relative flex h-full flex-col items-center gap-2 bg-white/5', className)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      // ------------------- DROP ZONE BECAUSE OF BELOW ---------------------
      // For an element to become a drop zone or droppable, the element must have both ondragover and ondrop event handler attributes.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {items.map(({ id }) => (
        <Draggable key={id} id={id} />
      ))}
      <AddButton onClick={addDraggable} className="sticky bottom-5 mt-auto" />
    </div>
  );
};
