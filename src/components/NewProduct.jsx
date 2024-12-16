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

const NewProduct = () => {
    const [isHovered, setIsHovered] = useState(false); // 控制按鈕顯示狀態  
    const dataPrice = '2999';
    const settings = {
        dots: true, // 顯示下方點點
        infinite: false, // 無限循環
        speed: 500,
        slidesToShow: 4, // 每次顯示一個「頁面」
        slidesToScroll: 2, // 每次滾動一個「頁面」
        autoplay: true, // 自動播放
        autoplaySpeed: 3000, // 每 3 秒滾動一次
        cssEase : "liner",
        prevArrow: <CustomArrow arrowType="prev"  isVisible={isHovered} />, // 自定義左箭頭
        nextArrow: <CustomArrow arrowType="next"  isVisible={isHovered} />, // 自定義右箭頭
      };

  return (
    <>
     <div
      style={{  margin: "0 auto", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)} // 滑鼠進入
      onMouseLeave={() => setIsHovered(false)} // 滑鼠離開
    >
    <div className="col-12">
        <strong style={{fontSize :'30px', display :'inline'}}>新品推薦</strong>
        <br />
    </div>
    <div className="col-12">
        <div className="carousel-container">
            <Slider {...settings}>
            {/* 1     */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ikea.com.tw/dairyfarm/tw/images/751/1375106_PE960171_S4.webp" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 2 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ikea.com.tw/dairyfarm/tw/images/008/1300826_PE937203_S4.webp" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>玩具廚房, 灰色, 68x40x100 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
             {/* 3 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ikea.com.tw/dairyfarm/tw/images/509/1350925_PE951817_S4.webp" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 4 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ikea.com.tw/dairyfarm/tw/images/797/1279753_PE931522_S4.webp" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 5 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ikea.com.tw/dairyfarm/tw/images/358/1235864_PE917380_S4.webp" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 6 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 7 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>
            {/* 8 */}
            <div>
                <input type="checkbox" style={{fontSize :'15px', display :'inline'}}/> &nbsp;比較
                <div className="slide">
                    <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                    <img src="" alt="Image 1" className="carousel-image" />
                    </a>
                </div>
                <div className="cardbody">
                <p>TONSTAD</p>
                <p>邊桌, 淺乳白色, 64x40 公分</p>
                </div>
                <div className="itemPriceBox" style={{fontSize:'30px'}}>${dataPrice}</div>
            </div>

            </Slider>  
            
        </div>
        </div> 
    </div>
        </>
  )
}

export default NewProduct