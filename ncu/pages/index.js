import { GoogleFonts } from "next-google-fonts";

export default function Home() {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap" />
      <div style={{ width: "100vw", height: "5000px", background: "green" }}>
        content
      </div>
    </>
  );
}
