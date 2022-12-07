import "./globals.css";
import NavigationMenu from "../components/NavigationMenu";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <header>
                    <NavigationMenu />
                </header>
                {children}
            </body>
        </html>
    );
}
