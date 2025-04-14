import React from "react";

export const revalidate = 86400; // revalidate every hour

export const getHeroContent = async (): Promise<heroContent> => {
  const data = {
    title: "Welcome to my world",
    headingOne: "Hi, I'm Subroto",
    animatedText: ["JS Developer", "Frontend Enginer"],
    headingTwo: "Based in India",
    image:
      "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/475214094_476431662179863_3900306950900823586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hCCqXgKNb8MQ7kNvwEsY8CB&_nc_oc=AdmgkuESG21fTaxuSVl6vBBvtHzvaQOxAIDN1_uIZKQtqpLb0LUWgB9XVJocF7OY4WTG7vfMTxN7X_9xwSkAz0sm&_nc_zt=23&_nc_ht=scontent.fshl2-1.fna&_nc_gid=TMogmmXKOgstcxvV97Syvg&oh=00_AfGD2ss-_mS9n03VwA4bnqIU_202K5BddPddg5xldkElBw&oe=6801168C",
    video: "",
  };
  return data;
};

const Index = () => {
  return <div></div>;
};

export default Index;
