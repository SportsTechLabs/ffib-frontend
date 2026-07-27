/**
 * FFIB Design System
 *
 * Semantic color tokens.
 *
 * Colors are provided by shadcn/ui through CSS variables.
 * This file documents their intended usage.
 */

export const colors = {
  primary: {
    usage: 'Primary actions, links and highlights.',
  },

  secondary: {
    usage: 'Secondary actions.',
  },

  accent: {
    usage: 'Highlighted UI elements.',
  },

  muted: {
    usage: 'Secondary backgrounds and helper text.',
  },

  destructive: {
    usage: 'Errors and destructive actions.',
  },

  success: {
    usage: 'Success states.',
  },

  warning: {
    usage: 'Warnings.',
  },

  background: {
    usage: 'Application background.',
  },

  foreground: {
    usage: 'Primary text color.',
  },

  border: {
    usage: 'Borders and dividers.',
  },

  input: {
    usage: 'Input borders.',
  },

  ring: {
    usage: 'Focus states.',
  },
} as const;