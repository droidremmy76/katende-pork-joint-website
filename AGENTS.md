<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the restaurant concept on the index route with focused presentation components under `src/components/katende`; this is intentionally one homepage.
- Centralize contact URLs and bundled illustrative photos in the shared content module so every contact action uses the same verified details.
- Define the editorial design system in `src/styles.css` and use the shared Button variants for controls to keep visual roles consistent.
- Use Radix Dialog for photograph enlargement to preserve focus trapping, keyboard dismissal, and accessible dialog semantics.
- Keep menu category filtering local and illustrative; this demo intentionally has no ordering, booking, or persistence.