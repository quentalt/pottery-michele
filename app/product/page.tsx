import { ProductDetail } from "@/components/product-detail";
import { CraftsmanshipSection } from "@/components/craftsmanship-section";
import { QuoteSection } from "@/components/quote-section";
import { CareSection } from "@/components/care-section";

export default function ProductPage() {
    return (
        <>
            <ProductDetail />
            <CraftsmanshipSection />
            <QuoteSection />
            <CareSection />
        </>
    );
}
