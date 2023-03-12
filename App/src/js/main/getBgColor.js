export const getBgColor = (category) => {
  const bgColor = {
    생활: "bg-color-category-navy",
    "의료/건강": "bg-color-category-sky",
    "쇼핑/뷰티": "bg-color-category-cyan",
    교통: "bg-color-category-mint",
    식비: "bg-color-category-blue",
    "문화/여가": "bg-color-category-pink",
    미분류: "bg-color-category-purple",
    월급: "bg-color-category-green",
    용돈: "bg-color-category-green",
    기타수입: "bg-color-category-green",
  };

  return bgColor[category];
};
