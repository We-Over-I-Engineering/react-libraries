// Import types for each component
import type { IconButtonProps } from './dist/components/WOIIconButton/index.js';
import type { ParallelogramButtonProps } from './dist/components/WOIParallelogramButton/index.js';
import type { ButtonProps } from './dist/components/WOITextButton/index.js';

// Declare the components with their respective prop types
declare const WOIIconButton: React.FC<IconButtonProps>;
declare const WOIParallelogramButton: React.FC<ParallelogramButtonProps>;
declare const WOITextButton: React.FC<ButtonProps>;

// Export the components
export { WOIIconButton, WOIParallelogramButton, WOITextButton };
