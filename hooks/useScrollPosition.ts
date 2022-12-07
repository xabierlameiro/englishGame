import React from "react";
import type { ObjectVerbType } from "@/types";

const useScrollPosition = ({ fundVerbs }: { fundVerbs?: ObjectVerbType[] }) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        scrollRef.current?.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }, [fundVerbs]);

    return { scrollRef };
};

export default useScrollPosition;
