export interface GalleryItem {
  caption: string;
  src: string;
}

export interface InterestLink {
  label: string;
  note: string;
  url: string;
}

export interface InterestsData {
  reading: InterestLink;
  music: InterestLink;
  gallery: GalleryItem[];
}

export const interests: InterestsData = {
  reading: {
    label: "Goodreads",
    note: "books I'm reading and rating",
    url: "https://www.goodreads.com/user/show/180689618-belle/",
  },

  music: {
    label: "Apple Music",
    note: "the loop currently playing",
    url: "https://music.apple.com/profile/bellechillguy/",
  },

  gallery: [
    {
      caption: "take me back",
      src: "/interests/1.jpg",
    },
    {
      caption: "the perfect pair",
      src: "/interests/2.jpg",
    },
    {
      caption: "touch the damn grass",
      src: "/interests/3.jpg",
    },
  ],
};