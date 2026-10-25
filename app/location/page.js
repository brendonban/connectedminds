import locationData from "../../content/location.json";

export const metadata = {
  title: "Location | Connected Minds",
  description: "How to find the Connected Minds lab, parking rates, and public transport options.",
};

export default function LocationPage() {
  const { title, intro, address, parkingOptions, publicTransport } = locationData;

  return (
    <article className="max-w-[900px] mx-auto pb-24">
      <header className="grid gap-3 mb-10">
        <h1 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-bold leading-[1.2]">
          {title}
        </h1>
        <p className="text-muted text-[1.0625rem] leading-[1.7] max-w-[65ch]">{intro}</p>
      </header>

      <div className="grid gap-10">
        <section className="rounded-xl border border-divider p-5 grid gap-1">
          <h2 className="text-base font-bold">Address</h2>
          <p className="leading-[1.7]">{address}</p>
        </section>

        <section className="grid gap-4">
          <h2 className="text-[clamp(1.125rem,1.3vw,1.25rem)] font-semibold">Parking</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {(parkingOptions || []).map((p, i) => (
              <div key={i} className="rounded-xl border border-divider overflow-hidden grid">
                {p.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.photo} alt="" className="w-full h-40 object-cover" />
                )}
                <div className="p-5 grid gap-1">
                  <h3 className="font-bold">{p.title}</h3>
                  {p.subtitle && <p className="text-muted italic">{p.subtitle}</p>}
                  <ul className="mt-2 grid gap-1">
                    {(p.rates || []).map((rate, ri) => (
                      <li key={ri} className="leading-[1.7]">
                        {rate}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {publicTransport && (
          <section className="rounded-xl border border-divider overflow-hidden grid">
            {publicTransport.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={publicTransport.photo} alt="" className="w-full h-40 object-cover" />
            )}
            <div className="p-5 grid gap-1">
              <h3 className="font-bold">{publicTransport.title}</h3>
              <p className="leading-[1.7]">{publicTransport.description}</p>
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
