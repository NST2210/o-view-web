// AppContext.tsx
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Định nghĩa kiểu dữ liệu cho context
interface AppContextType {
    studyData: any;
    setStudyData: Dispatch<SetStateAction<any>>;
    patientData: any;
    setPatientData: Dispatch<SetStateAction<any>>;
}

// Tạo context với giá trị mặc định là undefined để TypeScript không báo lỗi
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Định nghĩa kiểu dữ liệu cho provider props
interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [studyData, setStudyData] = useState<any>("");
    const [patientData, setPatientData] = useState<any>("");

    return (
        <AppContext.Provider value={{ studyData, setStudyData, patientData, setPatientData  }}>
            {children}
        </AppContext.Provider>
    );
};
