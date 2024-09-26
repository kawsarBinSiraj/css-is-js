import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PageFooter } from "@/components/PageFooter";

export const metadata: Metadata = {
    title: "CSS.js | Made by Kawsar Bin Siraj",
    description: "An approachable, performant and versatile interaction with pure css",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={`bg-slate-100`}>
                <ThemeProvider>
                    <PageHeader />
                    {children}
                    <PageFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
