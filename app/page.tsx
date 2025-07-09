"use client";
import Navbar from "./pages/navbar";
import Logo from "./logo.png";
import React from "react";
import Hero from "./pages/hero";
import Services from "./pages/services";
import Banner from "./pages/banner";
import Footer from "./pages/footer";
import Gaming from "./pages/gaming";
import Video from "./pages/video";
import Gift from "./pages/gift";
import About from "./pages/about";
import Home from "./pages/home";
import SocialMediaBoostingSection from "./pages/socialboost";
import SocialMediaSponsorSection from "./pages/socialsponsor";
import NetflixAccountsSection from "./pages/netflix";
import SpotifyAccountsSection from "./pages/spotify";
import PSPlusSubscriptionsSection from "./pages/pspass";
import SoftwareSubscriptionSection from "./pages/softwares";
import SteamGiftCardSection from "./pages/steam";
import ITunes from "./pages/itunes";
import PSNGiftCardSection from "./pages/psn";
import XboxGiftCardSection from "./pages/xbox";
import LoginPage from "./pages/login";
import Cart from "./pages/cart";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
