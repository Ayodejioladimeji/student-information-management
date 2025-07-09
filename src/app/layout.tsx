import './globals.css';
import { Provider } from "@/components/ui/provider"


export const metadata = {
  title: 'Student Information System',
  description: 'Manage student records - Miva Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
  );
}
