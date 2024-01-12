import { ArrowIco } from "@app/assets/icons";

interface Props {
  title: string;
  prev: () => void;
  next: () => void;
}

function SectionHeader({ title, prev, next }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h5 className="text-[--darkest]">{title}</h5>
      <div className="flex items-center justify-center">
        <button onClick={prev}>
          <ArrowIco className="rotate-[90deg] scale-125" />
        </button>
        <button onClick={next}>
          <ArrowIco className="rotate-[-90deg] scale-125" />
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
