import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../app/fonts/USA-Bold.woff2", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://achaq.dev/og-bg.png)",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Wright Pro",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            backgroundImage:
              "linear-gradient(90deg, #00B4DB, #0083B0, #3A00FF)",
            color: "transparent",
            backgroundClip: "text",
            lineHeight: "300px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            bottom: 0,
            right: 0,
            marginRight: 80,
            marginBottom: 40,
            fontFamily: "Wright Pro",
            fontStyle: "normal",
            color: "white",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundImage:
                "linear-gradient(90deg, #00B4DB, #0083B0, #3A00FF)",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: 40,
                letterSpacing: "-0.05em",
              }}
            >
              Mohamed Achaq
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: "-0.05em",
                color: "#BDBDBD",
              }}
            >
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Wright Pro",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
