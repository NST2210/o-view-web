import {create} from 'zustand';

export const useOpenNewStudy = create((set) => ({
    isOpenNewStudy: false,
    openNewStudy: () => set({isOpenNewStudy: true}),
    closeNewStudy: () => set({isOpenNewStudy: false}),
}));

export const useOpenDeleteStudy = create((set) => ({
    isOpenDeleteStudy: false,
    openDeleteStudy: () => set({isOpenDeleteStudy: true}),
    closeDeleteStudy: () => set({isOpenDeleteStudy: false}),
}));

export const useOpenEditPatient = create((set) => ({
    isOpenEditPatient: false,
    openEditPatient: () => set({isOpenEditPatient: true}),
    closeEditPatient: () => set({isOpenEditPatient: false}),
}));

export const useOpenDeletePatient = create((set) => ({
    isOpenDeletePatient: false,
    openDeletePatient: () => set({isOpenDeletePatient: true}),
    closeDeletePatient: () => set({isOpenDeletePatient: false}),
}));

export const useOpenFileExport = create((set) => ({
    isOpenFileExport: false,
    openFileExport: () => set({isOpenFileExport: true}),
    closeFileExport: () => set({isOpenFileExport: false}),
}));

export const useOpenUseBackup = create((set) => ({
    isOpenUseBackup: false,
    openUseBackup: () => set({isOpenUseBackup: true}),
    closeUseBackup: () => set({isOpenUseBackup: false}),
}));

export const useOpenSaveToPack = create((set) => ({
    isOpenSaveToPack: false,
    openSaveToPack: () => set({isOpenSaveToPack: true}),
    closeSaveToPack: () => set({isOpenSaveToPack: false}),
}));