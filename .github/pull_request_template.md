## Summary
Describe the change in 1–3 sentences. Why is it needed?

## Related
- Closes #<issue-number>
- Related to #<issue-number>

## Type of change
- [ ] Fix typo or formatting
- [ ] Update existing content
- [ ] New content/page
- [ ] Information Architecture (moves/renames/redirects)
- [ ] Tooling/site build (no content changes)

## Screenshots / Before–After (if UI or rendering changed)
<!-- Drag & drop images or paste links. Include before & after if styling or layout changed. -->

## Checklist — Content & Style
- [ ] Follows the [style guide](https://example.com/STYLE_GUIDE_URL)
- [ ] Clear audience and task orientation
- [ ] Headings use sentence case; one H1 per page
- [ ] Inclusive, plain, second‑person voice; active tone
- [ ] Code blocks have language fences (```lang) and runnable or accurate snippets
- [ ] Images/diagrams include meaningful alt text and captions as needed
- [ ] Internal links use relative paths; anchors exist and render
- [ ] Front matter includes `title`, `description`, and (if used) `slug`/`tags`

## Checklist — Technical
- [ ] Local site builds successfully (e.g., `npm run build`, `mkdocs build`, or `docusaurus build`)
- [ ] No 404s from local/CI link checker
- [ ] Navigation updated (sidebar, breadcrumbs) if pages moved/added
- [ ] Redirects added for moved/renamed pages
- [ ] Versioning handled (applies to all / new only / backport needed)
- [ ] Search metadata/SEO updated where relevant
- [ ] Large media optimized (SVG/PNG compression) and licensed for reuse

## Risk & Rollout
- [ ] Change is backwards compatible (links/bookmarks won’t break)
- [ ] Communication plan (release notes, changelog, or announcement)

## Post‑merge tasks (if any)
- [ ] Backport to older versions
- [ ] Trigger translation/update workflows
- [ ] Update index/search configuration

## Reviewer notes (for maintainers)
- Assign a docs maintainer for editorial review
- Assign a SME for technical accuracy when needed
- Label PR appropriately (area, type, versioning)
```

---

### Optional labels to pre‑create
Create labels that match the templates above so auto‑labeling is useful:

```
bug, docs, needs triage, type:request, rfc, link-check,
area:guides, area:tutorials, area:api, area:concepts,
area:navigation, area:search, area:landing, area:style, area:translations
```

### Tips
- Keep the forms concise for contributors but strict enough for triage.
- Revisit labels and template wording every quarter based on real usage.
- If you use multiple PR templates per change type, place them in `.github/PULL_REQUEST_TEMPLATE/`.
