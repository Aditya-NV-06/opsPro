import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Search from '../components/Search';
import '@testing-library/jest-dom/vitest';

describe('Search Component', () => {
    it('renders the input element', () => {
        render(<Search placeholder="Search" search="" setSearch={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });

});