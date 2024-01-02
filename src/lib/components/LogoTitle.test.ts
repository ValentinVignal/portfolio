import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from "vitest";
import LogoTitle from "./LogoTitle.svelte";


describe('LogoTitle', () => {
  it('should render the logo title', () => {
    render(LogoTitle, { props: { title: 'title', src: 'src', } });

    const title = screen.getByText('title');

    expect(title).toBeTruthy();
  });
});
