---
title: SvenskaCore
summary: Une application pour apprendre le suédois du A1 au B2, sur le web et sur Android, même hors ligne.
year: 2026
kind: App web et Android
stack: [React 19, TypeScript, Vite, Tailwind CSS, Supabase, Capacitor, ts-fsrs]
order: 1
featured: true
mockup: svenskacore
steps:
  - title: SvenskaCore, apprendre le suédois sans s'éparpiller.
    text: Cartes de vocabulaire avec répétition espacée (FSRS), prononciation en IPA et audio pour chaque mot.
    chips: [React 19, TypeScript, ts-fsrs]
  - title: 3 023 mots, du A1 au B2.
    text: 31 unités et 44 decks thématiques, générés depuis des fichiers de contenu, avec plus de 4 300 sons.
    chips: [Supabase, edge-tts, Node]
  - title: Hors ligne, sur Android, et en compétition.
    text: PWA et APK Capacitor, synchro de la progression, XP, streak et classement entre comptes.
    chips: [Capacitor, PWA, Cloudflare Pages]
---

## Le projet

SvenskaCore est une application d'apprentissage du suédois pensée pour un débutant complet. Elle suit le cadre européen (CECR) du niveau A1 au niveau B2 et fonctionne aussi bien dans le navigateur que sur Android, avec ou sans réseau.

Le même moteur fait aussi tourner FranceCore, un second cours pour apprendre le français.

## Ce qu'elle fait

- **31 unités et 44 decks thématiques**, soit 3 023 mots et expressions distincts.
- **Répétition espacée** avec l'algorithme FSRS : chaque carte revient au moment où on risque de l'oublier.
- **Prononciation** : transcription IPA, accents tonals du suédois et un fichier audio pour chaque mot (plus de 4 300 sons).
- **Mode hors ligne** : l'application et tous ses sons restent disponibles sans réseau, en PWA comme dans l'APK Android.
- **Comptes et synchro** : la progression suit l'utilisateur d'un appareil à l'autre.
- **Motivation** : XP, série de jours (streak), classement entre comptes et rappel quotidien à l'heure choisie.
- **Interface en français et en anglais.**

## Côté technique

- **Front** : React 19, TypeScript, Vite et Tailwind CSS v4.
- **Mobile** : Capacitor pour l'APK Android, notifications locales programmées.
- **Données** : Supabase (PostgreSQL) avec règles d'accès par ligne (RLS) pour que chacun ne lise que ses données.
- **Contenu** : les cours sont écrits dans des fichiers source ; une seule commande synchronise la base, génère les sons (edge-tts) et exporte le contenu de l'application.
- **Rappels web** : notifications push envoyées par une Edge Function planifiée avec pg_cron, dans le fuseau de chaque abonné.
