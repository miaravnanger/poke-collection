# Pokémon Card Collection

A personal web app for tracking your Pokémon TCG card collection. Browse sets, view cards, and check off the ones you own.

## Features

- Browse all Pokémon TCG sets
- View cards within each set with pagination
- Check off cards you own — saved locally in the browser
- Responsive design for both desktop and mobile
- Data cached in localStorage to reduce API calls

## Tech Stack

- **React** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **React Router** — client-side routing
- **Axios** — HTTP requests
- **Pokémon TCG API** (pokemontcg.io) — card and set data

## Project Structure

```
src/
  api/          # API calls (pokemonApi.js)
  components/   # Reusable UI components (CardGrid, CardItem, Header, Pagination)
  hooks/        # Custom React hooks (useSets, useSetDetail, useSetInfo, useOwnedCards)
  pages/        # Page components (Home, AllSets, SetDetail)
  routes/       # React Router configuration
  utils/        # Utility functions (cardUtils.js)
  styles/       # Global CSS
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root and add your Pokémon TCG API key:
   ```
   VITE_POKEMON_API_KEY=your-api-key-here
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
