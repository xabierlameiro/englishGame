import React from "react";
import { verbs as irregularVerbs } from "@/sources/irregularVerbs";
import type { kindOfVerbType, onChangeType } from "@/types";

const useVerbFinder = () => {
    const [fundVerbs, setFundVerbs] = React.useState(irregularVerbs);
    const onChange = (typeOfVerb: kindOfVerbType) => (event: onChangeType) => {
        const results = irregularVerbs.filter((verb) =>
            verb[typeOfVerb]
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        );
        setFundVerbs(results);
    };
    return { fundVerbs, onChange };
};

export default useVerbFinder;
