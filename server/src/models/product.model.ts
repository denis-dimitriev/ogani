import { Schema, model } from "mongoose";
import { getOptimizedPreview } from "../helpers/common";

export type ProductType = {
  name: {
    ru: string;
    ro: string;
  };
  category: Schema.Types.ObjectId;
  subCategory: string;
  type: string;
  thumbnail: string;
  sketch: string;
  images: string[];
  price: number;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  info: {
    description?: {
      ru: string;
      ro: string;
    };
    terms?: {
      ru: string;
      ro: string;
    };
    manufacturer?: {
      ru: string;
      ro: string;
    };
  };
  promo: {
    has: boolean;
    oldPrice: number;
    price: number;
    sale: number;
    start: string;
    end: string;
  };
  unit: "kg" | "pcs";
  stock: number;
};

export const productSchema = new Schema<ProductType>(
  {
    name: {
      ru: {
        type: String,
        required: true,
      },
      ro: {
        type: String,
        required: true,
      },
      type: Object,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: String,
    type: String,
    thumbnail: {
      type: String,
    },
    sketch: {
      type: String,
    },
    images: [
      {
        type: String,
        required: true,
        minlength: 2,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    info: {
      description: {
        ru: {
          type: String,
          required: true,
        },
        ro: {
          type: String,
          required: true,
        },
        type: Object,
        required: true,
      },
      terms: {
        ru: {
          type: String,
          required: true,
        },
        ro: {
          type: String,
          required: true,
        },
        type: Object,
        required: true,
      },
      manufacturer: {
        ru: {
          type: String,
          required: true,
        },
        ro: {
          type: String,
          required: true,
        },
        type: Object,
        required: true,
      },
      type: Object,
      required: true,
    },
    promo: {
      has: {
        type: Boolean,
        default: false,
      },
      oldPrice: Number,
      price: {
        type: Number,
        default: 0,
      },
      sale: {
        type: Number,
        default: 0,
      },
      start: {
        type: String,
        default: "",
      },
      end: {
        type: Number,
        default: "",
      },
      type: Object,
    },
    unit: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

productSchema.pre("save", function () {
  if (this.promo.price > 0 || this.promo.start !== "") {
    this.promo.has = true;
    this.promo.oldPrice = this.price;
  } else {
    this.promo.has = false;
    this.promo.oldPrice = 0;
  }
});

productSchema.pre("save", function () {
  this.thumbnail = getOptimizedPreview(this.images[0].toString(), 256, 256);
  this.sketch = getOptimizedPreview(this.images[1].toString(), 256, 256);
});

export const Products = model("Products", productSchema);
