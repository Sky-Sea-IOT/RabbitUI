function initComps(c) {
    switch (c) {
        case "Message":
            Rabbit.prototype.Message.container();
            break;

        case "Notice":
            Rabbit.prototype.Notice.container();
            break;

        case "LoadingBar":
            Rabbit.prototype.LoadingBar.create();
            break;

        default:
            console.error(`[Rabbit warn] "${c}", unable to initialize component`);
    }
}