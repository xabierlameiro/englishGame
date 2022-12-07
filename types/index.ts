export type VerbType = {
    number: number;
    infinitive: string;
    pastSimple: string;
    pastParticiple: string;
    translation: string;
};

export type kindOfVerbType =
    | "infinitive"
    | "pastSimple"
    | "pastParticiple"
    | "translation";

export type InputGameType = {
    editable: boolean;
    onEnter: Function;
    verb: VerbType;
    verbType: kindOfVerbType;
};
export type InputTextProps = JSX.IntrinsicAttributes & {
    value?: string;
    onChange: Function;
    placeHolder?: string;
};
export type onChangeType = React.ChangeEvent<HTMLInputElement>;

export type TableCounterProps = {
    score: ScoreType;
    max: number;
};

export type ObjectVerbType = {
    number: number;
    infinitive: string;
    pastSimple: string;
    pastParticiple: string;
    translation: string;
    verbType?: string;
    query?: string;
    success?: boolean;
};

export type ScoreType = {
    hits: number;
    fails: number;
};

export type TableInputType = {
    verbs: ObjectVerbType[];
    score: ScoreType;
    randomVerb: "load" | number;
    setScore: Function;
    setVerbs: Function;
    setResultList: Function;
};

export type TableFinderPropsType = {
    children: React.ReactElement<
        {
            fundVerbs: ObjectVerbType[];
        },
        string | React.JSXElementConstructor<any>
    >;
};

export type ResizeType = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};
