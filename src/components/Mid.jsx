import Slider from "react-slick";
import React, { useState } from "react";

    const CustomArrow = ({ className, style, onClick, arrowType , isVisible}) => (
        <button
          onClick={onClick}
          style={{
            ...style,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)", // 半透明背景
            color: "#fff", // 按鈕文字顏色
            border: "none", // 移除邊框
            borderRadius: "50%", // 圓形按鈕
            width: "40px", // 按鈕寬度
            height: "40px", // 按鈕高度
            fontSize: "20px", // 按鈕內字體大小
            cursor: "pointer",
            display: isVisible ? "flex" : "none", // 控制按鈕是否顯示
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            ...(arrowType === "prev" ? { left: "10px" } : { right: "10px" }),
          }}
        >
          {arrowType === "prev" ? "❮" : "❯"}
        </button>
      );
    
    const Mid = () => {  
    const [isHovered, setIsHovered] = useState(false); // 控制按鈕顯示狀態  

    const settings = {
        dots: true,          // 顯示導航點
        infinite: false,      // 無限循環
        speed: 500,          // 切換速度
        slidesToShow: 3,     // 每次顯示一張圖片
        slidesToScroll: 1,   // 每次滾動一張圖片
        autoplay: false,      // 自動播放
        autoplaySpeed: 4000, // 自動播放間隔時間 (毫秒)
        cssEase : "liner",
        prevArrow: <CustomArrow arrowType="prev"  isVisible={isHovered} />, // 自定義左箭頭
        nextArrow: <CustomArrow arrowType="next"  isVisible={isHovered} />, // 自定義右箭頭
      };  

      const slides = [
        { image: "images/5.jpg", link: "https://example5.com" },
        { image: "images/6.jpg", link: "https://example6.com" },
        { image: "images/7.jpg", link: "https://example7.com" },
        { image: "images/8.jpg", link: "https://example8.com" },
        { image: "images/9.jpg", link: "https://example9.com" },
      ];
    
  return (
    <div
      style={{ width: "80%", margin: "0 auto", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)} // 滑鼠進入
      onMouseLeave={() => setIsHovered(false)} // 滑鼠離開
    >
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </a>
          <br />
          <br />
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Mid