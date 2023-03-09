
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

/// <reference types="vite/client" />

export default defineConfig({
  plugins: [react()]
})


export type Chains = Chain[];

export interface Chain {
  name: string;
  logo: any;
}

export interface ChainProps {
  data: Chains,
  isCollection?: boolean
}

export interface NavProps {
  openNav: boolean,
  setOpenNav: any
}