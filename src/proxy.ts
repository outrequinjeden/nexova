import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Everything is locale-routed, including the homepage — bare "/"
  // gets redirected to the default locale by next-intl.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
