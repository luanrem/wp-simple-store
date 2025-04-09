import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export function Item() {
  return (
    <div className="flex items-center p-4 gap-2">
      {/* Product Image */}
      <img
        src="https://d1likr6vgtxkkw.cloudfront.net/Custom/Content/Products/29/45/2945_cabide-de-roupas-6-pecas-14438-artrin_m2_637395899543442893.webp"
        alt="Product"
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4 flex flex-col">
        <h2 className="text-sm font-semibold">
          Cabide Lingerie Preto - 10x26cm
        </h2>
        <p className="text-sm text-primary/70">
          Cabide Para Lingerie Calcinha
        </p>
        <p className="text-sm font-bold">
          R$ 0,90
        </p>
      </div>

      {/* Add to Cart Button */}
      <Button className="flex items-center justify-center w-8 h-8">
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  )
}