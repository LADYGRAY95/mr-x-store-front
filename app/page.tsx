"use client";
import Navbar from "@/components/navbar/navbar";
import Logo from "./logo.png";
import React from "react";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/footer";
import Gaming from "@/components/products/gaming";
import Video from "@/components/banner/video";
import Gift from "@/components/giftcard/gift";
import About from "@/components/about/about";
import Home from "./home";
import SocialMediaBoostingSection from "@/./components/services/socialboost";
import SocialMediaSponsorSection from "@/./components/services/socialsponsor";
import NetflixAccountsSection from "@/./components/services/netflix";
import SpotifyAccountsSection from "@/./components/services/spotify";
import PSPlusSubscriptionsSection from "@/./components/services/pspass";
import SoftwareSubscriptionSection from "@/./components/services/softwares";
import SteamGiftCardSection from "@/./components/giftcard/steam";
import ITunes from "@/./components/giftcard/itunes";
import PSNGiftCardSection from "@/./components/giftcard/psn";
import XboxGiftCardSection from "@/./components/giftcard/xbox";
import LoginPage from "@/components/login&register/login";
import Cart from "./cart";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
