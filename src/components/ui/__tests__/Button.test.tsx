import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  const variantClasses: Record<string, string> = {
    primary: 'bg-primary-600',
    secondary: 'bg-gray-600',
    outline: 'border-gray-300',
    ghost: 'bg-transparent',
  };

  it.each(Object.entries(variantClasses))('renders %s variant', (variant, cls) => {
    render(<Button variant={variant as any}>Test</Button>);
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button.className).toContain(cls);
  });
});
