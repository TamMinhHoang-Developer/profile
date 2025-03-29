import React from 'react'
import '@testing-library/jest-dom';
import TitleSection from "../sections/home/TitleSection";

import { render } from '@testing-library/react';


describe('TitleSection() TitleSection method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should render the title correctly', () => {
      // Test to ensure the component renders the title correctly
      const { getByText } = render(<TitleSection title="skills" />);
      expect(getByText('skills')).toBeInTheDocument();
    });

    it('should render the hash symbol with the correct class', () => {
      // Test to ensure the hash symbol is rendered with the correct class
      const { container } = render(<TitleSection title="skills" />);
      const hashElement = container.querySelector('.text--deep-mauve');
      expect(hashElement).toBeInTheDocument();
      expect(hashElement?.textContent).toBe('#');
    });

    it('should render the line with the correct styles', () => {
      // Test to ensure the line is rendered with the correct styles
      const { container } = render(<TitleSection title="skills" />);
      const lineElement = container.querySelector('.w-[239px].h-[1px].bg-[var(--deep-mauve)]');
      expect(lineElement).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle an empty title gracefully', () => {
      // Test to ensure the component handles an empty title
      const { container } = render(<TitleSection title="" />);
      const titleElement = container.querySelector('span:nth-child(2)');
      expect(titleElement?.textContent).toBe('');
    });

    it('should handle a very long title', () => {
      // Test to ensure the component handles a very long title
      const longTitle = 'a'.repeat(1000);
      const { getByText } = render(<TitleSection title={longTitle} />);
      expect(getByText(longTitle)).toBeInTheDocument();
    });

    it('should handle special characters in the title', () => {
      // Test to ensure the component handles special characters in the title
      const specialTitle = '!@#$%^&*()_+';
      const { getByText } = render(<TitleSection title={specialTitle} />);
      expect(getByText(specialTitle)).toBeInTheDocument();
    });
  });
});