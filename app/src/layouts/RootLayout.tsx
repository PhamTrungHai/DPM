import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

type RootLayoutProps = {} & React.HTMLAttributes<HTMLElement>;
const drawerWidth = 240;
export default function RootLayout({}: RootLayoutProps) {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="flex flex-row mt-16 flex-1">
                <Sidebar drawerWidth={drawerWidth} />
                <main className="flex-1 h-full mt-16 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
