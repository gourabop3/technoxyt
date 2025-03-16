import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Backend",
  description: "Ecommerce Backend for Educational purposes",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
