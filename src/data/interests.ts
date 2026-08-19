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
    note: "curl up with a good book",
    url: "https://www.goodreads.com/user/show/180689618-belle/",
  },

  music: {
    label: "Apple Music",
    note: "many playlists to share",
    url: "https://music.apple.com/profile/bellechillguy/",
  },

  gallery: [
    {
      caption: "take me back",
      src: "/images/interests/1.webp",
    },
    {
      caption: "the perfect pair",
      src: "/images/interests/2.webp",
    },
    {
      caption: "touch the grass",
      src: "/images/interests/3.webp",
    },
  ],
};
