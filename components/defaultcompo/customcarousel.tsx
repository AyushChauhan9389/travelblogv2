import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import Cards from "@/components/defaultcompo/cards";

export default function Customcarousel(){
    return(
        <div className="grid  md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    )
}