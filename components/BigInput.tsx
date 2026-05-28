"use client";

import { useState } from "react";
import { Kicker } from "./atoms/Kicker";
import { Arr } from "./atoms/Arr";

export function BigInput() {
  const [val, setVal] = useState("");
  const [chan, setChan] = useState<"whatsapp" | "email">("whatsapp");

  return (
    <section className="section">
      <div className="container">
        <div className="bi">
          <div className="bi__hd">
            <div>
              <Kicker>[&nbsp;05&nbsp;] Tell us what you want</Kicker>
              <h2 className="bi__h" style={{ marginTop: 12 }}>
                We&apos;ll <em>build it.</em>
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: 360 }}>
              Type one line. We reply within an hour with a 48-hour plan. No forms, no
              decks, no fluff.
            </p>
          </div>
          <div className="bi__field">
            <textarea
              className="bi__textarea"
              placeholder="A WhatsApp bot that answers questions over our 800-page policy doc, in Hindi and English…"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <div className="bi__row">
              <div className="bi__channels">
                <span className="meta mono-lbl" style={{ marginRight: 6 }}>reply on</span>
                {(["whatsapp", "email"] as const).map((c) => (
                  <button
                    key={c}
                    className={"bi__channel " + (chan === c ? "on" : "")}
                    onClick={() => setChan(c)}
                  >
                    {c === "whatsapp" ? "WhatsApp" : "Email"}
                  </button>
                ))}
              </div>
              <button className="btn btn-primary">
                Ship it <Arr />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
