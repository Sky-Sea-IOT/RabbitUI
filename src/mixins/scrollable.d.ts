interface Options {
    scroll?: boolean;
    lock?: boolean;
    node?: Element;
    tagName?: string;
}
export default function scrollable({ scroll, lock, node, tagName }: Options): void;
export {};
