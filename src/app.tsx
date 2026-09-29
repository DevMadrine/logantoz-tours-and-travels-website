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
          <Title>Logantoz Tours | Safaris, executive transport and events in Kenya</Title>
          <Meta
            name="description"
            content="Logantoz Tours plans safaris, airport transfers, executive car hire and full event logistics from Nairobi. Plan. Move. Celebrate."
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
