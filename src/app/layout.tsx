import './globals.css';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Student Information System',
  description: 'Manage student records - Miva Test',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <ChakraProvider> */}
          {children}
        {/* </ChakraProvider> */}
      </body>
    </html>
  );
}
