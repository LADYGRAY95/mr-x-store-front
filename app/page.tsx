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
import About from "@/app/about/page";
import Home from "./home";
import SocialMediaBoostingSection from "@/app/socialboost/page";
import SocialMediaSponsorSection from "@/app/socialsponsor/page";
import NetflixAccountsSection from "@/app/netflix/page";
import SpotifyAccountsSection from "@/app/spotify/page";
import PSPlusSubscriptionsSection from "@/app/pspass/page";
import SoftwareSubscriptionSection from "@/app/softwares/page";
import SteamGiftCardSection from "@/app/steam/page";
import ITunes from "@/app/itunes/page";
import PSNGiftCardSection from "@/app/psn/page";
import XboxGiftCardSection from "@/app/xbox/page";
import LoginPage from "@/app/login/page";
import Cart from "./cart/page";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
