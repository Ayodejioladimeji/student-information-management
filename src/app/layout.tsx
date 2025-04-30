import './globals.css';
import { ReactNode } from 'react';
import { Provider } from "@/components/ui/provider"
import { StudentProvider } from '@/context/students';

export const metadata = {
  title: 'Student Information System',
  description: 'Manage student records - Miva Test',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
