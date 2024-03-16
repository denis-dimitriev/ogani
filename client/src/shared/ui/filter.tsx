import { FilterIco } from "@app/assets/icons";
import { observer } from "mobx-react-lite";
import { ProductType } from "@shared/types/product.types.ts";

interface Props {
  products: ProductType[];
}

const Filter = observer(function ({ products }: Props) {
  console.log(products);

  return (
    <div className="flex flex-col gap-[30px] text-[--darkest]">
      <div className="flex items-center justify-center">
        <button>
          <FilterIco className="scale-75" />
        </button>
        <h6 className="font-medium uppercase tracking-wide">Filtru</h6>
      </div>
      <div className="flex flex-col">
        <h6 className="font-medium tracking-wide">Dupa tara</h6>
        <ul className="flex flex-col p-2 text-[14px]">
          <li className="flex justify-between p-1">
            <button className="hover:text-[--gray]">Moldova</button>
            <span>(5)</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Filter;
