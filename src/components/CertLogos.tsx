import React from "react";

export const CertLogos = {
  BRC: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="900" fill="#005A9C" textAnchor="middle" letterSpacing="-1">BRCGS</text>
    </svg>
  ),
  ISO22000: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#1D1D1B" textAnchor="middle">ISO 22000</text>
      <text x="100" y="65" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#666" textAnchor="middle" letterSpacing="2">FOOD SAFETY</text>
    </svg>
  ),
  ISO9001: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#1D1D1B" textAnchor="middle">ISO 9001</text>
      <text x="100" y="65" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#666" textAnchor="middle" letterSpacing="2">QUALITY MANAGEMENT</text>
    </svg>
  ),
  FDA: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g transform="translate(30, 20) scale(0.6)">
        <path d="M40 60 V20 H90 V30 H55 V35 H85 V45 H55 V60 Z" fill="#003595" />
        <path d="M100 60 V20 H130 C150 20 150 60 130 60 Z M115 35 V45 H125 C135 45 135 35 125 35 Z" fill="#003595" />
        <path d="M165 20 L185 60 H170 L165 45 H145 L140 60 H125 L145 20 Z M150 35 L160 35 L155 25 Z" fill="#003595" />
      </g>
    </svg>
  ),
  Halal: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="50" r="42" fill="none" stroke="#007A33" strokeWidth="4" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#007A33" strokeWidth="1" />
      <text x="50" y="56" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#007A33" textAnchor="middle">HALAL</text>
    </svg>
  ),
  Kosher: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#1D1D1B" strokeWidth="4" />
      <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill="#1D1D1B" textAnchor="middle">U</text>
    </svg>
  ),
  IFS: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="20" width="120" height="40" fill="#E3000F" rx="4" />
      <text x="100" y="47" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#FFF" textAnchor="middle">IFS Food</text>
    </svg>
  ),
  SEDEX: () => (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <text x="100" y="52" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="bold" fill="#7AB800" textAnchor="middle" letterSpacing="-1">Sedex</text>
    </svg>
  )
};
