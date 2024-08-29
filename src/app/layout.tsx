import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/container";
import AppBar from "@/components/app-bar";
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({ weight: ["100", "300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O. Veselyi | Home",
  description:
    "I’m a Front-end Developer who creates modern and efficient web applications with a focus on usability and performance. I’m constantly improving my skills, experimenting with new technologies, and always open to challenges to deliver the best solutions for my clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Container className="flex flex-col gap-14 md:gap-20">
            <AppBar />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
