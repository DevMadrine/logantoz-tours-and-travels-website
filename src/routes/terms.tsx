import { A } from "@solidjs/router";
import LegalPage from "~/components/LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Terms and conditions" description="Booking terms for tours, transport, accommodation and events with Talmar Express.">
      <h2>1. Who we are</h2>
      <p>Talmar Express ("we", "us") is a transport, travel and events company registered in Kenya and based at CityPark Estate, Parklands, Nairobi. These terms apply to every booking made with us, whether through this website, WhatsApp, email or in person.</p>
      <h2>2. Quotes and bookings</h2>
      <p>A quote is valid for 7 days unless it says otherwise. A booking is confirmed only when we have received your deposit and sent written confirmation. Prices are in Kenyan shillings and include VAT where applicable. Park fees, permits and third-party costs may change without notice and will be passed on at cost.</p>
      <h2>3. Payment</h2>
      <p>A deposit of 50% confirms a booking. The balance is due on the day of the trip or event, before departure or before the event begins. Park fees and permits are payable in full at booking. We accept M-Pesa, paid to the Buy Goods till number we send with the quote.</p>
      <h2>4. Changes by you</h2>
      <p>We will try to accommodate changes to dates, group size or itinerary. Changes may affect the price, and changes inside 14 days of departure may be treated as a cancellation of the original booking.</p>
      <h2>5. Changes by us</h2>
      <p>Rarely, weather, road conditions, park closures or supplier problems force a change. We will offer a comparable alternative or a refund of the affected part. We are not liable for costs outside the booking, such as flights you booked separately.</p>
      <h2>6. Cancellation</h2>
      <p>Cancellations are handled under our <A href="/cancellation" class="underline">cancellation and refund policy</A>.</p>
      <h2>7. Vehicles and drivers</h2>
      <p>All vehicles are supplied with a Talmar Express driver; we do not offer self-drive hire. Vehicles carry commercial insurance with passenger cover. Passengers must follow the driver's safety instructions. Damage caused by passengers is charged at cost.</p>
      <h2>8. Your responsibilities</h2>
      <p>You are responsible for valid identification, visas, vaccinations and travel insurance, and for telling us about medical conditions or dietary needs that affect the trip. Parks and lodges have their own rules which you agree to follow.</p>
      <h2>9. Liability</h2>
      <p>We take reasonable care in choosing lodges, camps and other suppliers but do not own or control them. Our liability for any booking is limited to the amount paid to us for that booking, except where the law does not allow such a limit. We strongly recommend travel insurance covering cancellation, medical care and evacuation.</p>
      <h2>10. Events</h2>
      <p>Event quotes are based on the guest numbers, venue and running order you give us. Final numbers for catering are due 7 days before the event. Venue access, power and water are the client's responsibility unless the quote says otherwise.</p>
      <h2>11. Complaints</h2>
      <p>Tell us during the trip or event so we can fix it. If it can't be fixed on the day, write to us within 14 days and we will respond within 14 days.</p>
      <h2>12. Law</h2>
      <p>These terms are governed by the laws of Kenya.</p>
    </LegalPage>
  );
}
