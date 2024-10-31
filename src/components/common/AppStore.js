import { create } from 'zustand';

export const useModalWalletsStore = create((set) => ({
  isOpenWallet: false,
  updateOpenWallet: (isOpen) => set({ isOpen: isOpen }),
}));

export const useSidebarStore = create((set) => ({
  isOpenSidebar: false,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));

export const useOpenModal = create((set) => ({
  isOpenModal: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useOpenNewStudy = create((set) => ({
  isOpenNewStudy: false,
  openNewStudy: () => set({ isOpenNewStudy: true }),
  closeNewStudy: () => set({ isOpenNewStudy: false }),
}));

export const useOpenDeleteStudy = create((set) => ({
  isOpenDeleteStudy: false,
  openDeleteStudy: () => set({ isOpenDeleteStudy: true }),
  closeDeleteStudy: () => set({ isOpenDeleteStudy: false }),
}));
