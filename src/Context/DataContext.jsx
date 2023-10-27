import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState("about");
    const [showContacts, setShowContacts] = useState(false);

    useEffect(() => {
        console.log(selectedTab);
    }, [selectedTab]);

    return (
        <DataContext.Provider
            value={{
                selectedTab,
                showContacts,
                setShowContacts,
                setSelectedTab,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
