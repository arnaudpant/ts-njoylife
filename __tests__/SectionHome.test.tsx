import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionHome from '../src/components/SectionHome';
import React from "react";

test('Affichage Title H1', ()=>{
    render(<SectionHome />)
    const title = screen.getByRole('heading', {name: /NATUROPATHE/i})

    expect(title).toBeInTheDocument()
})

test('Affichage image Woman', async () => {
    render(<SectionHome />)
    //const avatar = await screen.findByRole('img', {name: /avatar/i})

    //expect(avatar).toBeInTheDocument()
})

screen.debug()