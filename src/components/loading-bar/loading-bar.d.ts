interface UpdatelobalAPI {
    color?: string;
    height?: number;
    duration?: number;
    failedColor?: string;
}
interface Events {
    statr(): void;
    finish(): void;
    error(): void;
    update(percent: number): void;
    destroy(): void;
}
declare class $LoadingBar implements Events {
    readonly VERSION: string;
    readonly component: any;
    constructor();
    statr(): void;
    update(percent: number): void;
    finish(): void;
    error(): void;
    config(options: UpdatelobalAPI): void;
    destroy(): void;
}
export default $LoadingBar;
