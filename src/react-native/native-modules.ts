import { RNBootSplash } from "..";

type NMType = {
  RNBootSplash: RNBootSplash;
};

const NativeModules: NMType = {
  RNBootSplash: {
    async show(fade) {
      return await Promise.resolve(true);
    },
    async hide(fade) {
      return await Promise.resolve(true);
    },
    async getVisibilityStatus() {
      return await Promise.resolve("transitioning");
    },
  },
};

export { NativeModules };
