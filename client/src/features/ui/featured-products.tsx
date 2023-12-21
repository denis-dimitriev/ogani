import CardSm from "@shared/ui/card-sm.tsx";

function FeaturedProducts() {
  return (
    <div className="flex">
      <ul className="relative flex overflow-hidden overflow-x-scroll">
        <li>
          <ul>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
            <li>
              <CardSm />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FeaturedProducts;
