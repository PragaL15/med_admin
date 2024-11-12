import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import 'primeicons/primeicons.css';

const Sidebar = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null); 
    const navigate = useNavigate(); 
    const location = useLocation(); // Get current route
    const userId = localStorage.getItem('user_id'); // Fetch the user_id from localStorage

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleNavigation = (route) => {
        navigate(route);
        setIsMenuVisible(false); // Close the menu after navigation
    };

    // Define all possible menu items
    const allItems = [
        { label: 'Home', icon: 'pi pi-home', route: '/dashboard', allowedUserIds: [1, 2] },
        { label: 'Record', icon: 'pi pi-file', route: '/Record', allowedUserIds: [1] },
        { label: 'Past Record', icon: 'pi pi-history', route: '/pastrec', allowedUserIds: [1, 2] },
        { label: 'New Patient Details', icon: 'pi pi-user-plus', route: '/AddPatient', allowedUserIds: [1] },
        { label: 'Logout', icon: 'pi pi-sign-out', route: '/logout', allowedUserIds: [1, 2] }
    ];

    // Filter the menu items based on user_id
    const items = allItems.filter(item => item.allowedUserIds.includes(Number(userId)));

    // Update the active item based on the current route
    useEffect(() => {
        const currentRoute = location.pathname;
        const activeItem = items.find(item => item.route === currentRoute);
        setActiveItem(activeItem ? activeItem.label : null);
    }, [location.pathname, items]); // Re-run on route change

    return (
        <>
            {isMenuVisible && <div className="fixed inset-0 opacity-50 z-40 h-full bg-black" onClick={toggleMenu}></div>}

            {/* Mobile Menu Toggle Button */}
            {!isMenuVisible && (
                <div className="md:hidden">
                    <Button
                        icon="pi pi-bars"
                        className="p-button-text absolute z-50 top-2 left-2"
                        onClick={toggleMenu}
                    />
                </div>
            )}

            <div className={`fixed top-0 left-0 h-screen w-52 p-3 z-50 transition-transform transform bg-side-blue ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <p className='text-white text-2xl font-medium text-center pt-5 pb-5'>Med Records</p>
                {items.map((item) => {
                    return (
                        <div
                            key={item.label}
                            className={`text-white mt-3 p-2 ${activeItem === item.label ? ' bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white-blue' : ''} hover:bg-gray-50 rounded-lg hover:text-side-blue`}
                            onClick={() => {
                                setActiveItem(item.label);
                                handleNavigation(item.route);
                            }}
                        >
                            <a className="flex items-center gap-4 text-xl">
                                <span className={item.icon} />
                                <span>{item.label}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Sidebar;
