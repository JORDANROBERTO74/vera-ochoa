import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#fcfaf4",
          color: "#101010",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "999px",
              background: "#101010",
              color: "#fcfaf4",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            V
          </span>
          <span style={{ fontSize: "22px", fontWeight: 600 }}>{dict.nav.brand}</span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5a5750",
            }}
          >
            {dict.hero.eyebrow}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "62px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              maxWidth: "900px",
            }}
          >
            <span>{dict.meta.ogTagline}</span>
          </div>
          <div style={{ display: "flex", fontSize: "22px", color: "#5a5750", maxWidth: "700px", lineHeight: 1.4 }}>
            {dict.meta.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "3px solid #101010",
            paddingTop: "22px",
            fontSize: "15px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#5a5750",
          }}
        >
          <span>{site.domain}</span>
          <span style={{ display: "flex", gap: "10px" }}>
            <span style={{ width: "18px", height: "18px", background: "#ff6a3d", border: "2px solid #101010" }} />
            <span style={{ width: "18px", height: "18px", background: "#2d3fe0", border: "2px solid #101010" }} />
            <span style={{ width: "18px", height: "18px", background: "#ffc93c", border: "2px solid #101010" }} />
            <span style={{ width: "18px", height: "18px", background: "#b9f2d6", border: "2px solid #101010" }} />
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
