import create from "zustand";
//
// IGNORE THIS FILE FOR NOW
//

export const useStore = create((set) => ({
  //   darkMode: JSON.parse(localStorage.getItem("darkmode")) || false,
  //   setDarkMode: (val) => {
  //     set((val) => ({ darkMode: !val.darkMode }));
  //     localStorage.setItem("darkmode", !val);
  //   },

  title: "",
  setTitle: (val) => set({ title: val }),

  breif: "",
  setBreif: (val) => set({ breif: val }),

  description: "",
  setDescription: (val) => set({ description: val }),

  duration: {
    start: "",
    end: "",
  },
  setDurationStart: (val) =>
    set((state) => ({ duration: { ...state.duration, start: val } })),
  setDurationEnd: (val) =>
    set((state) => ({ duration: { ...state.duration, end: val } })),

  ageRange: {
    start: "",
    end: "",
  },
  setAgeStart: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, start: val } })),
  setAgeEnd: (val) =>
    set((state) => ({ ageRange: { ...state.ageRange, end: val } })),

  location: "",
  setLocation: (val) => set({ location: val }),

  category: "select",
  setCategory: (val) => set({ category: val }),

  type: "Indoor",
  setType: (val) => set({ type: val }),

  fee: "",
  setFee: (val) => set({ fee: val }),

  pictures: "",
  setPictures: (val) => {
    let values = [];
    for (var i = 0; i < val.length; i++) {
      values = [...values, val[i].name];
    }
    set({ pictures: values });
  },

  date: {
    start: "",
    end: "",
  },
  setDateStart: (val) =>
    set((state) => ({ date: { ...state.date, start: val } })),
  setDateEnd: (val) => set((state) => ({ date: { ...state.date, end: val } })),

  email: "",
  setEmail: (val) => set({ email: val }),

  url: "",
  setUrl: (val) => set({ url: val }),

  phone: 0,
  setPhone: (val) => set({ phone: Number(val) }),

  address: "",
  setAddress: (val) => set({ address: val }),

  organization: "",
  setOrganization: (val) => set({ organization: val }),
}));
