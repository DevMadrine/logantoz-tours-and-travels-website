import CtaBand from "~/components/CtaBand";
import Faq from "~/components/Faq";
import Seo from "~/components/Seo";
import { faqs } from "~/data/faqs";

export default function FaqPage() {
  return (
    <>
      <Seo title="Questions" description="Booking, deposits, payments, cancellations and what's included. Answers to the questions Logantoz Tours gets most." />
      <section class="bg-ink text-white">
        <div class="wrap py-12 lg:py-16">
          <h1 class="display text-4xl sm:text-6xl lg:text-7xl">Questions</h1>
          <p class="mt-5 max-w-xl text-lg text-stone">If yours isn't here, WhatsApp us. Draft answers for Logantoz to confirm.</p>
        </div>
      </section>
      <section class="wrap py-12 lg:py-16">
        <Faq items={faqs} />
      </section>
      <CtaBand title="Still wondering?" body="Ask on WhatsApp. A person answers." />
    </>
  );
}
