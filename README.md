# Aleta Design System

Monorepo za UI komponente (`aleta-ui`) i Storybook playground.

## Preduvjeti

- Node.js (preporuka: 18+)
- `pnpm` (repo koristi `pnpm@9.4.0`)

## Instalacija

```bash
pnpm install
```

## Razvoj (Storybook)

Pokretanje Storybooka iz root-a:

```bash
pnpm dev
```

Alternativno direktno:

```bash
pnpm -C apps/storybook dev
```

Storybook priča (stories) se učitava iz `packages/ui/src/**/*.stories.tsx`.

## Build

Build UI paketa (`aleta-ui`):

```bash
pnpm -C packages/ui build
```

Build Storybook statike:

```bash
pnpm -C apps/storybook build
```

Build svega u workspace-u:

```bash
pnpm build
```

## Testiranje

Trenutno nema unit/integration testova.

Preporučeni minimum je TypeScript typecheck:

```bash
pnpm -C packages/ui exec tsc -p tsconfig.json --noEmit
pnpm -C apps/storybook exec tsc -p tsconfig.json --noEmit
```

## Ažuriranje/razvoj komponenti

Komponente su u `packages/ui/src`.

Tipičan workflow:

1. Dodaj/izmijeni komponentu u `packages/ui/src/*.tsx`
2. Dodaj/izmijeni Storybook story u `packages/ui/src/*.stories.tsx`
3. Exportuj komponentu iz `packages/ui/src/index.ts`
4. Regeneriši `dist` i tipove:

```bash
pnpm -C packages/ui build
```

## Objavljivanje (publish)

### Opcija A: ručno (najjednostavnije)

1. Bump verziju u `packages/ui/package.json`
2. Build:

```bash
pnpm -C packages/ui build
```

3. Publish iz foldera `packages/ui`:

```bash
pnpm publish
```

### Opcija B: Changesets (preporučeno za versioning/release)

Repo već ima skripte (`pnpm changeset`, `pnpm version-packages`, `pnpm release`), ali treba imati Changesets CLI i inicijalizovan `.changeset/`.

Jednokratno:

```bash
pnpm add -w -D @changesets/cli
pnpm changeset init
```

Release flow:

```bash
pnpm changeset
pnpm version-packages
pnpm release
```

## Troubleshooting

- Ako `pnpm dev` prijavi problem s `aleta-ui/tailwind-preset`, pokreni `pnpm -C packages/ui build` (da se generiše `dist`).

