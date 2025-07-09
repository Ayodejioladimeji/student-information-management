import TopBar from "@/components/layout/topbar";

export const metadata = {
  title: 'Miva | Auth page',
  description: 'Manage student records - Miva Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <TopBar/>
    {children}
    </>
  );
}
