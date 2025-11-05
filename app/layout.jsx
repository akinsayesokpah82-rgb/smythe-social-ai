export const metadata = {
  title: "Smythe Social AI",
  description: "Social AI platform for Smythe University College",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
