// Import types for each component
import type { WOICheckBoxProps } from './dist/components/WOICheckBox/index.js';
import type { TextFieldProps } from './dist/components/WOITextField/index.js';
import type { WOIRadioButtonProps } from './dist/components/WOIRadioButton/index.js';

// Declare the components with their respective prop types
declare const WOIRadioButton: React.FC<WOIRadioButtonProps>;
declare const WOITextField: React.FC<TextFieldProps>;
declare const WOICheckBox: React.FC<WOICheckBoxProps>;

// Export the components
export { WOIRadioButton, WOICheckBox, WOITextField };
