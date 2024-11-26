export interface Notification {
    id: number;
    text: string;
    time: string;
    viewed: boolean;
    profilePic: string;
  }
  
  export const notifications: Notification[] = [
    { 
      id: 1, 
      text: "Nnaemeka Valentine likes your post: \"Don't attribute to malice what can be...\"", 
      time: "2w", 
      viewed: false, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 2, 
      text: "Raymond Mezieaneke likes your post: \"I've got big dreams for me, man. Nobody...\"", 
      time: "3w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 3, 
      text: "Princess Nite reacted to your comment: \"Princess Nite\".", 
      time: "4w", 
      viewed: false, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 4, 
      text: "Ogaga Michael Oghenegare commented on your post.", 
      time: "4w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 5, 
      text: "Nahum Oscar Cfc likes your post: \"Play stupid games, win stupid prizes.\"", 
      time: "4w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    }
  ];
  