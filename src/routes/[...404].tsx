import { HttpStatusCode } from "@solidjs/start";
import NotFound from "~/components/NotFound";

export default function CatchAll() {
  return (
    <>
      <HttpStatusCode code={404} />
      <NotFound />
    </>
  );
}
