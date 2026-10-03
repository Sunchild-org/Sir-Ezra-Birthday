// ============ EDIT THIS FILE — it's all you need to change ============

window.KEEPSAKE = {
  // His name. Leave "" to show just "Happy Birthday".
  name: "Ezra",

  // Optional: link to a Google Form / Typeform where people can submit memories.
  // Leave "" to hide the "Add your memory" button.
  memoryFormUrl: "",

  // The three films. Put video files in /assets and set `src`, e.g. "assets/elders.mp4".
  // Leave src as "" to show "still being wrapped".
  gifts: [
    {
      from: "From your elders",
      nav: "Elders", // short label shown in the top navigation
      title: "From the ones who raised",
      subtitle: "The elders and mentors you love and respect, a few words that have been waiting, that they have never really gotten the opportunity to say.",
      src: "assets/elders.mp4",
      poster: "assets/poster-elders.jpg",
    },
    {
      from: "From your friends",
      nav: "Friends", // short label shown in the top navigation
      title: "From the ones who run with you",
      subtitle: "Your friends, the laughter, the stories, and everything they never quite say out loud.",
      src: "assets/friends.mp4",
      poster: "assets/poster-friends.jpg",
    },
    {
      from: "From driven",
      nav: "Driven", // short label shown in the top navigation
      title: "From the ones you lead",
      subtitle: "Your very own people, the teachings, inspiring moments, prayers.",
      src: "assets/driven.mp4",
      poster: "assets/poster-driven.jpg",
    },
    {
      from: "The birthday film",
      nav: "Birthday Film", // short label shown in the top navigation
      title: "Made just for you",
      subtitle: "A birthday film with your name on it. Happy birthday.",
      src: "assets/birthday.mp4",
      poster: "assets/poster-birthday.jpg",
    },
  ],

  // The memory wall. These are SAMPLE memories — replace with the real ones.
  // Add a new one by copying a line. `date` is optional.
  memories: [
    { name: "Mama", relation: "Family", date: "2026-10-01", message: "From the day the doctor placed you in my arms, I knew God had answered every prayer I ever whispered. I am so endlessly proud of the man you are becoming." },
    { name: "Daddy", relation: "Family", date: "2026-10-01", message: "Son, watching you grow has been my life's greatest work and my life's greatest joy. Whatever you carry, carry it with your head high. Happy birthday, my boy." },
    { name: "Pastor Emeka", relation: "Mentor", date: "2026-10-01", message: "I have watched you serve, grow, and stay humble through it all. You carry light into every room you enter. May this new year of your life overflow with favour." },
    { name: "Uncle Tunde", relation: "Family", date: "2026-10-01", message: "The day you were born, the whole compound knew your name by evening. That same joy has never left you. God keep you, dear." },
    { name: "Big bro Chidi", relation: "Brother", date: "2026-10-01", message: "Still remember carrying you on my shoulders at the market, everyone greeting us. Now look at you — taller than me and still my small brother. I love you plenty." },
    { name: "Ada", relation: "Sister", date: "2026-10-01", message: "You are the reason I learned what kindness actually looks like in a person. Thank you for every laugh, every fight we made up from, every time you showed up for me." },
    { name: "Samuel", relation: "Friend since 2015", date: "2026-10-01", message: "Every road trip, every bad playlist, every 2am talk about the future — I would not trade a single one. Brother from another mother, happy birthday." },
    { name: "Miss Grace", relation: "Teacher", date: "2026-10-01", message: "Of all the students I have taught, few have had your hunger to learn and your gentleness of spirit. Your future is bright, and I am proud to have played a small part." },
    { name: "Kelechi", relation: "Friend", date: "2026-10-01", message: "The day you showed up at my door with jollof rice when I had nothing, I knew you were different. Here is to many more years of this friendship." },
    { name: "Auntie Ngozi", relation: "Family", date: "2026-10-01", message: "You have the kindest heart of anyone I know, and you got it from your mother. Happy birthday my darling. Eat cake for me." },
    { name: "Tobi", relation: "Friend from school", date: "2026-10-01", message: "From copying homework together to watching you conquer everything you set your mind on — what a journey. So glad I get to call you my friend." },
    { name: "Coach Bola", relation: "Mentor", date: "2026-10-01", message: "Discipline, humility, heart. You brought all three to every training session. Whatever field you play on in life, you have already won." },
  ],
};
