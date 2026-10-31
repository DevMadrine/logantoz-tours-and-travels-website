import LegalPage from "~/components/LegalPage";

export default function Cancellation() {
  return (
    <LegalPage title="Cancellation and refunds" description="What you get back if you cancel a tour, transfer, stay or event with Talmar Express.">
      <h2>Tours and accommodation</h2>
      <p>Measured from the start date, in days before departure:</p>
      <ul>
        <li>More than 30 days: full refund less any non-refundable park fees, permits and bank charges.</li>
        <li>15 to 29 days: 50% of the total price is refunded.</li>
        <li>14 days or fewer, or no-show: no refund.</li>
      </ul>
      <p>Gorilla permits, park entry fees, train and flight tickets are non-refundable once issued, whatever the notice.</p>
      <h2>Vehicle hire and transfers</h2>
      <ul>
        <li>More than 48 hours' notice: full refund.</li>
        <li>24 to 48 hours: 50% refund.</li>
        <li>Under 24 hours or no-show: no refund.</li>
      </ul>
      <h2>Events</h2>
      <ul>
        <li>More than 30 days before the event: deposit refunded less costs already committed (venue holds, tastings, hire).</li>
        <li>15 to 29 days: deposit is retained.</li>
        <li>14 days or fewer: full price is due.</li>
      </ul>
      <h2>Moving a date</h2>
      <p>One date change is free with more than 14 days' notice, subject to availability. Any price difference is payable.</p>
      <h2>If we cancel</h2>
      <p>If we cancel for a reason within our control you get a full refund or a comparable alternative, your choice. If we cancel for reasons outside our control (weather, civil unrest, park closures, government orders) we refund what we can recover from suppliers and offer a credit for the rest.</p>
      <h2>How refunds are paid</h2>
      <p>By M-Pesa to the number the booking was paid from, within 14 working days of the cancellation being confirmed in writing.</p>
    </LegalPage>
  );
}
