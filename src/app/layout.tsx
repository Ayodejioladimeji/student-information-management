import './globals.css';
import { Provider } from "@/components/ui/provider"
import { StudentProvider } from '@/context/students';

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
          <StudentProvider>
            {children}
          </StudentProvider>
        </Provider>
      </body>
    </html>
  );
}
