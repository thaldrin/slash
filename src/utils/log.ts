import { Logtail } from "@logtail/node";
const Logger = new Logtail(process.env.LOGTAIL_TOKEN as string)


export default Logger 