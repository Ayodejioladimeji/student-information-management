import TopBar from "@/components/layout/topbar";
import NonProtectedRoute from "@/components/routes/non-protected-route";

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
    <NonProtectedRoute>
    <TopBar/>
    {children}
    </NonProtectedRoute>
  );
}
