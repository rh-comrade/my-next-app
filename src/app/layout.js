"use client"
import { Inter } from "next/font/google";
// import "./globals.css";
import { appStore } from "@/redux/store";
import { Provider } from "react-redux";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={appStore}>
          {children}
        </Provider>

      </body>
    </html>
  );
}
