import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import WhatsAppFab from "~/components/WhatsAppFab";
import DraftBanner from "~/components/DraftBanner";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Talmar Express | Travel and events in Kenya, from one team</Title>
          <Meta
            name="description"
            content="Talmar Express handles transport and airport transfers, private safaris, partner hotels and events across Kenya from Nairobi. Plan. Move. Celebrate."
          />
          <DraftBanner />
          <Header />
          <main id="main">
            <Suspense>{props.children}</Suspense>
          </main>
          <Footer />
          <WhatsAppFab />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
