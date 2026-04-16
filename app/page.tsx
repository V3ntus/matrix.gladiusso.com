"use client"

import TypingText from "@/lib/components/TypingText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <svg width="0" height="0">
        <filter id="kill">
          <feColorMatrix type="matrix"
                         result="red_"
                         values="4 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0"/>
          <feOffset in="red_" dx="1" dy="0" result="red"/>
          <feColorMatrix type="matrix"
                         in="SourceGraphic"
                         result="blue_"
                         values="0 0 0 0 0
              0 3 0 0 0
              0 0 2 0 0
              0 0 0 1 0"/>
          <feOffset in="blue_" dx="-2" dy="0" result="blue"/>
          <feBlend mode="screen" in="red" in2="blue"/>

        </filter>
      </svg>
      <span className="md:left-2/5 w-[344px] md:w-[675px]">
        <TypingText
          text={[
            "[ MATRIX.GLADIUSSO.COM ]",
          ]}
          className="text-2xl md:text-5xl"
          cursorClassName="h-8 ml-2 pl-1 invisible"
          style={{
            WebkitFilter: "url(#kill)",
          }}
        />
        <br/>
        <TypingText
          text={[
            "> DEV_MATRIX: ONLINE",
            "> [M] ELEMENT_SYNAPSE",
            "> [E2EE] END_TO_END ENCRYPTED",
            "> LIVEKIT WEB_RTC SFU + JWT",
            "> COTURN TURN/STUN NAT TRAVERSAL",
            "> DRAUPNIR MODERATION",
            "> DISCORD BRIDGED"
          ]}
          className="text-sm md:text-2xl text-gray-400"
          cursorClassName="ml-2"
          style={{
            opacity: 0.8,
            WebkitFilter: "url(#kill)",
          }}
        />
            <hr className="m-4 text-gray-600"/>
            <p style={{fontFamily: "sans-serif"}} className="text-xs text-gray-400 text-center md:text-left">
        Decentralized, federated chat service built with Synapse<br/><br/>

        Please contact the <a href="https://dev.gladiusso.com">admin</a> for registration
      </p>
      </span>
      <Link href="https://element.gladiusso.com" className="pt-2">- ENTER -</Link>
    </div>
  );
}
