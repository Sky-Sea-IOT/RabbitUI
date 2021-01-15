export default function warn(msg: unknown): void {
    console.error(`[RabbitUI] Error: ${msg}`);
    return;
}
