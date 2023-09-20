export type DraggableProps = {
  id: string;
};

export const Draggable = ({ id }: DraggableProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', id);
    console.log('dragStart', e);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('dragEnd', e);
  };

  return (
    <div
      draggable
      className="min-h-20 flex w-full max-w-xs flex-col justify-center gap-2 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h3 contentEditable className="text-xl font-bold">
        Grab this and move (You can edit this)
      </h3>
      <h5>id : {id}</h5>
    </div>
  );
};
