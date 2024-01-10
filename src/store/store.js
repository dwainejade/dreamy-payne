import { create } from "zustand";

export const useStore = create((set) => {
  return {
    ballOneMass: 1,
    ballTwoMass: 1000,

    setBallOneMass: (mass) => set({ ballOneMass: mass }),
    setBallTwoMass: (mass) => set({ ballTwoMass: mass }),

    ballOnePosition: [6, 4, 0],
    ballTwoPosition: [-6, 4, 0],

    setBallOnePosition: (position) => set({ ballOnePosition: position }),
    setBallTwoPosition: (position) => set({ ballTwoPosition: position }),

    resetBallPositions: () => {
      set({
        ballOnePosition: [6, 4, 0],
        ballTwoPosition: [-6, 4, 0],
      });
    },
  };
});
