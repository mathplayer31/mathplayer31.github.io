---
title: SvenskaCore
summary: An app to learn Swedish from A1 to B2, on the web and on Android, even offline.
year: 2026
kind: Web and Android app
stack: [React 19, TypeScript, Vite, Tailwind CSS, Supabase, Capacitor, ts-fsrs]
order: 1
featured: true
mockup: svenskacore
steps:
  - title: SvenskaCore, learning Swedish without the noise.
    text: Vocabulary cards with spaced repetition (FSRS), IPA pronunciation and audio for every word.
    chips: [React 19, TypeScript, ts-fsrs]
  - title: 3,023 words, from A1 to B2.
    text: 31 units and 44 themed decks, generated from content files, with more than 4,300 audio clips.
    chips: [Supabase, edge-tts, Node]
  - title: Offline, on Android, and competitive.
    text: PWA and Capacitor APK, progress sync, XP, streaks and a leaderboard between accounts.
    chips: [Capacitor, PWA, Cloudflare Pages]
---

## The project

SvenskaCore is a Swedish-learning app built for complete beginners. It follows the European framework (CEFR) from A1 to B2 and runs in the browser as well as on Android, online or offline.

The same engine also powers FranceCore, a second course for learning French.

## What it does

- **31 units and 44 themed decks**, 3,023 distinct words and expressions.
- **Spaced repetition** with the FSRS algorithm: each card comes back right before you would forget it.
- **Pronunciation**: IPA transcription, Swedish pitch accents and an audio clip for every word (more than 4,300 clips).
- **Offline mode**: the app and all its audio stay available without a network, as a PWA and in the Android APK.
- **Accounts and sync**: progress follows the learner from one device to another.
- **Motivation**: XP, day streaks, a leaderboard between accounts and a daily reminder at the time you choose.
- **Interface in French and English.**

## Under the hood

- **Front end**: React 19, TypeScript, Vite and Tailwind CSS v4.
- **Mobile**: Capacitor for the Android APK, scheduled local notifications.
- **Data**: Supabase (PostgreSQL) with row-level security so each user only reads their own data.
- **Content**: courses are written in source files; one command syncs the database, generates the audio (edge-tts) and exports the app's content.
- **Web reminders**: push notifications sent by an Edge Function scheduled with pg_cron, in each subscriber's time zone.
