interface StepsConfig {
    current: number;
    status?: 'wait' | 'process' | 'finish' | 'error';
}
interface StepConfig {
    idx?: number;
    title?: string;
    content?: string;
}
interface PublicMethods {
    config(el: string): {
        setSteps: ({ current, status }: StepsConfig) => void;
        setChildren: ({ idx, title, content }: StepConfig) => void;
    };
}
declare class Steps implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;
    constructor();
    config(el: string): {
        setSteps({ current, status }: StepsConfig): void;
        setChildren({ idx, title, content }: StepConfig): void;
    };
    private _create;
    private _createStepItem;
    private _setDirection;
    private _updateStatus;
    private _setCurrentStatus;
    private _setPrevStatus;
    private _setNextStatus;
    private _setNextErrorStatus;
    private _autoSetFinishOrErrorIcon;
    private _setCustomIcon;
    private _getCurrent;
    private _geStatus;
    private _getTitle;
    private _getContent;
    private _getIcon;
    private _validIndexCheck;
}
export default Steps;
