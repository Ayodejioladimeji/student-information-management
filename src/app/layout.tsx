import './globals.css';
import { Provider } from "@/components/ui/provider"
import { Providers } from './providers';


export const metadata = {
  title: 'Student Information System',
  description: 'Manage student records - Miva Test',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Provider>
            {children}
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
