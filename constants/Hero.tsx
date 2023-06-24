'use client'

import Image from "next/image"
import CustomButton from "./CustomButton"

export default function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          원하시는 차량을 찾고 계신가요?
        </h1>

        <p className="hero__subtitle">
          차량을 검색하고, 비교하고, 구매하세요.
        </p>

        <CustomButton 
          title="차량 검색하기"
          onClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain"/>

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}
