import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  const variantClasses: Record<string, string> = {
    primary: 'bg-primary-600',
    secondary: 'bg-gray-600',
    outline: 'border-gray-300',
    ghost: 'bg-transparent',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  it.each(Object.entries(variantClasses))('renders %s variant', (variant, cls) => {
    render(<Button variant={variant as any}>Test</Button>);
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button.className).toContain(cls);
  });

  it.each(Object.entries(sizeClasses))('renders %s size', (size, cls) => {
    render(<Button size={size as any}>Size</Button>);
    const button = screen.getByRole('button', { name: 'Size' });
    expect(button.className).toContain(cls);
  });
});
