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

export const useOpenTransferItem = create((set) => ({
  isOpenModal: false,
  openTransferItem: () => set({ isOpenTransferItem: true }),
  closeTransferItem: () => set({ isOpenTransferItem: false }),
}));
export const useOpenTransferItemOTP = create((set) => ({
  isOpenModal: false,
  openTransferItemOTP: () => set({ isOpenTransferItemOTP: true }),
  closeTransferItemOTP: () => set({ isOpenTransferItemOTP: false }),
}));
export const useOpenTransferItemSuccess = create((set) => ({
  isOpenModal: false,
  openTransferItemSuccess: () => set({ isOpenTransferItemSuccess: true }),
  closeTransferItemSuccess: () => set({ isOpenTransferItemSuccess: false }),
}));
